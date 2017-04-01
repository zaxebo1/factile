'use strict';

const DB = require('./db');

const findById = (id, user) => {

  return DB('surveys').where({ surveyId: id, owner: user });
};

const basicSurveyInfo = (survey) => ({
  name: survey.name,
  status: survey.status,
  created_at: survey.history.created_at,
  id: survey.surveyId
});

const all = (user) => {

  return DB('surveys').where({ owner: user }).then((surveys) => surveys.map(basicSurveyInfo));
};

module.exports = {
  all,
  findById
};
