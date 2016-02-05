import { STATE_CHANGE_START } from './action-types';

/**
 * This action is triggered when a $stateChangeStart event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeStart event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @return {Object} Action object
 */
export default function onStateChangeStart(evt, toState, toParams, fromState, fromParams) {
  return {
    type: STATE_CHANGE_START,
    payload: {
      evt,
      toState,
      toParams,
      fromState,
      fromParams,
    },
  };
}
