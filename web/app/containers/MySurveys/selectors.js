import { createSelector } from 'reselect';

/**
 * Direct selector to the mySurveys state domain
 */
const selectMySurveysDomain = () => (state) => state.get('mySurveys');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MySurveys
 */

const selectSurveys = () => createSelector(
  selectMySurveysDomain(),
  (substate) => substate.get('surveys').toJS()
);

export {
  selectSurveys,
};
