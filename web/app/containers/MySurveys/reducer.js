/*
 *
 * MySurveys reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_SURVEYS_SUCCESS,
  GET_SURVEYS_ERROR
} from './constants';

const initialState = fromJS({ surveys: [] });

function mySurveysReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS_SUCCESS:
      return state.set('surveys', fromJS(action.surveys));
    case GET_SURVEYS_ERROR:
      return state;
    default:
      return state;
  }
}

export default mySurveysReducer;
