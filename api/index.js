'use strict';

const Hapi          = require('hapi');
const Config        = require('config');
const HapiAuthJWT   = require('hapi-auth-jwt2');
const Routes        = require('./lib/routes/');
const Token         = require('./lib/models/token');
const LoggingConfig = require('./lib/middlewares/logging_config');
const Inert = require('inert');
const Lout = require('lout');
const Vision = require('vision');

// Create a server with a host and port
const server = new Hapi.Server();

// Logging setup
const goodOptions = { reporters: LoggingConfig, includes: { request: ['headers'] } };

const loutRegister = {
  register: Lout,
  options: { endpoint: '/docs' }
};

const corsConfig = () => {

  const enabled = Config.get('api.cors');
  if (!enabled) {
    return false;
  }

  return { additionalHeaders: ['x-correlation-id'] };
};

// Server config
server.connection({ port: Config.get('api.port'), routes: { cors: corsConfig() } });

// Auth
/* $lab:coverage:off$ */
server.register([HapiAuthJWT, Vision, Inert, loutRegister, { register: require('good'), options: goodOptions }], (err) => {

  if (err) {
    console.error(err);
  }

  server.auth.strategy('jwt', 'jwt',
    { key: Config.get('token.secret'),
      validateFunc: Token.validate,
      verifyOptions: { algorithms: ['HS256'] }
    }
  );

  server.auth.default('jwt');
  // Add the routes
  server.route(Routes);

  // Start the server
  server.start(() => {

    console.log('Server running at:', server.info.uri);
  });
});
/* $lab:coverage:on$ */


module.exports = server;
