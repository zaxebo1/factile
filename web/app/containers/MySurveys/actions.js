/*
 *
 * MySurveys actions
 *
 */

import {
  GET_SURVEYS,
  GET_SURVEYS_SUCCESS,
  GET_SURVEYS_ERROR
} from './constants';

export function getSurveys() {
  return {
    type: GET_SURVEYS
  };
}

export function getSurveysSuccess(surveys) {
  return {
    type: GET_SURVEYS_SUCCESS,
    surveys
  };
}

export function getSurveysFailed(message) {
  return {
    type: GET_SURVEYS_ERROR,
    message
  };
}
