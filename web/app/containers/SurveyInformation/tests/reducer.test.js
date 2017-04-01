
import { fromJS } from 'immutable';
import surveyInformationReducer from '../reducer';

describe('surveyInformationReducer', () => {
  it('returns the initial state', () => {
    expect(surveyInformationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
