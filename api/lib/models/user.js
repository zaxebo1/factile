'use strict';

const DB = require('./db');

const findById = (id) => {

  return DB('users').where({ $id: id });
};

const all = () => {

  return DB('users').all();
};

module.exports = {
  all,
  findById
};
