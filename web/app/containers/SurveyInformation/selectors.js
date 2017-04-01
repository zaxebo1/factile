import { createSelector } from 'reselect';

/**
 * Direct selector to the surveyInformation state domain
 */
const selectSurveyInformationDomain = () => (state) => state.get('surveyInformation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SurveyInformation
 */

const makeSelectSurveyInformation = () => createSelector(
  selectSurveyInformationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSurveyInformation;
export {
  selectSurveyInformationDomain,
};
