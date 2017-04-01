'use strict';

const Survey = require('../models/survey');

const index = (request, response) => {

  response(Survey.all('asinghal79@gmail.com'));
};

module.exports = {
  index
};
