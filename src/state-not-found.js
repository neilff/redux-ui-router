import { STATE_NOT_FOUND } from './action-types';

/**
 * This action is triggered when a $stateNotFound event is broadcast.
 * Accepts a payload which matches the UI Router $stateNotFound event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} unfoundState The unfound state definition
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @return {Object} Action object
 */
export default function onStateNotFound(evt, unfoundState, fromState, fromParams) {
  return {
    type: STATE_NOT_FOUND,
    payload: {
      evt,
      unfoundState,
      fromState,
      fromParams,
    },
  };
}
