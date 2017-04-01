import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { authError } from '../App/actions';
import {
  GET_SURVEYS
} from './constants';

import {
  getSurveysSuccess,
  getSurveysFailed
} from './actions';

import API from './api';

function* getSurveysFlow() {
  try {
    const response = yield call(API.getSurveys);

    if (response.data) {
      yield put(getSurveysSuccess(response.data));
    }

  } catch (err) {
    if(err.response && err.response.status === 401) {
      yield put(authError());
    } else {
      console.log(err);
      const message = (err.response && err.response.data.message) || 'Error!';
      yield put(getSurveysFailed(message));
    }
  }
}

export function* getSurveys() {
  yield* takeLatest(GET_SURVEYS, getSurveysFlow);
}

function* getSurveysWatcher() {
  const watcher = yield fork(getSurveys);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getSurveysWatcher
];
