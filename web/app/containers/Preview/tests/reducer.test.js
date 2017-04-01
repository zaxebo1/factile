
import { fromJS } from 'immutable';
import previewReducer from '../reducer';

describe('previewReducer', () => {
  it('returns the initial state', () => {
    expect(previewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
