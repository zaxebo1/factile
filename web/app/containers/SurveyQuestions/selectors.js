import { createSelector } from 'reselect';

/**
 * Direct selector to the surveyQuestions state domain
 */
const selectSurveyQuestionsDomain = () => (state) => state.get('surveyQuestions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SurveyQuestions
 */

const makeSelectSurveyQuestions = () => createSelector(
  selectSurveyQuestionsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSurveyQuestions;
export {
  selectSurveyQuestionsDomain,
};
