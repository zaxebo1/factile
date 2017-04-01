'use strict';

const Ping              = require('./ping');
const Surveys           = require('./surveys');

const Routes = [
  { method: 'GET', path: '/',  config: { handler: Ping.index, auth: false } },
  { method: 'GET', path: '/surveys',  config: { handler: Surveys.index, auth: false } }
];

module.exports = Routes;
