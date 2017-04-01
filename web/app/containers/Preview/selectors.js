import { createSelector } from 'reselect';

/**
 * Direct selector to the preview state domain
 */
const selectPreviewDomain = () => (state) => state.get('preview');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Preview
 */

const makeSelectPreview = () => createSelector(
  selectPreviewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPreview;
export {
  selectPreviewDomain,
};
