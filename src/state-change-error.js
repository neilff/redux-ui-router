import { STATE_CHANGE_ERROR } from './action-types';

/**
 * This action is triggered when a $stateChangeError event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeError event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @param {Object} err Error resolve object
 * @return {Object} Action object
 */
export default function onStateChangeError(evt, toState, toParams, fromState, fromParams, err) {
  return {
    type: STATE_CHANGE_ERROR,
    payload: {
      evt,
      toState,
      toParams,
      fromState,
      fromParams,
      err,
    },
  };
}
