'use strict';

const JWT    = require('jsonwebtoken');
const Config = require('config');

class Token {

  static validate(decoded, request, callback) {

    if (!decoded.id) {
      callback(null, false);
    }
    else {
      callback(null, true);
    }
  }

  static generate(userId, organizationId) {

    return JWT.sign({ id: userId, organization_id: organizationId }, Config.get('token.secret'), { expiresIn: '1h' });

  }

}

module.exports = Token;
