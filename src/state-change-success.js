import { STATE_CHANGE_SUCCESS } from './action-types';

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @return {Object} Action object
 */

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} event State change event
 * @param {Object} toState To state definition
 * @param {Object} toParams To state params
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From state params
 * @return {Object} Action object
 */
export default function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {
  return {
    type: STATE_CHANGE_SUCCESS,
    payload: {
      event,
      toState,
      toParams,
      fromState,
      fromParams
    }
  };
}
