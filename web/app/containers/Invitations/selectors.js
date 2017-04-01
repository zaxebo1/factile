import { createSelector } from 'reselect';

/**
 * Direct selector to the invitations state domain
 */
const selectInvitationsDomain = () => (state) => state.get('invitations');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Invitations
 */

const makeSelectInvitations = () => createSelector(
  selectInvitationsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInvitations;
export {
  selectInvitationsDomain,
};
