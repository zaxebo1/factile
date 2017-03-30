'use strict';

const Config = require('config');

const Request = require('request').defaults({
  auth: {
    user: Config.get('email.username').trim(),
    pass: Config.get('email.password').trim()
  },
  agentOptions: {
    securityOptions: 'SSL_OP_NO_SSLv3'
  }
});

const logResponseEnd = (err, httpResponse, uri, start) => {

  const elapsed = process.hrtime(start)[1] / 1000000;
  httpResponse = httpResponse || {};
  if (err) {
    console.log(err);
  }
  console.log('[request] Request to %s [HTTP %d]. Took %d ms', uri, httpResponse.statusCode, elapsed);
};

const post = (uri, json, callback) => {

  const start = process.hrtime();
  const backend = Config.get('email.url');

  console.log(`[request] Sending request to ${backend} ${uri}`);

  Request.post({ url: backend + uri, body: json, json: true }, (err, httpResponse, response) => {

    logResponseEnd(err, httpResponse, uri, start);
    callback(err, response);
  });
};

module.exports = {
  post
};
