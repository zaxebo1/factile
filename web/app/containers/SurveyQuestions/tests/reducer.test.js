
import { fromJS } from 'immutable';
import surveyQuestionsReducer from '../reducer';

describe('surveyQuestionsReducer', () => {
  it('returns the initial state', () => {
    expect(surveyQuestionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
