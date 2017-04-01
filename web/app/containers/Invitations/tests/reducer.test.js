
import { fromJS } from 'immutable';
import invitationsReducer from '../reducer';

describe('invitationsReducer', () => {
  it('returns the initial state', () => {
    expect(invitationsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
