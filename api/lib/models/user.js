'use strict';

const DB = require('./db');

const find = (id) => {

  return DB('users').where({ $id: id });
};

module.exports = {
  find
};
