'use strict';

const Ping              = require('./ping');

const Routes = [
  { method: 'GET', path: '/',  config: { handler: Ping.index, auth: false } }
];

module.exports = Routes;
