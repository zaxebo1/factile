
import { fromJS } from 'immutable';
import mySurveysReducer from '../reducer';

describe('mySurveysReducer', () => {
  it('returns the initial state', () => {
    expect(mySurveysReducer(undefined, {})).toEqual(fromJS({}));
  });
});
