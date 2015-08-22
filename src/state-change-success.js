import { STATE_CHANGE_SUCCESS } from './action-types';

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} evt event details
 * @param {Object} currentState To state definition
 * @param {Object} currentParams To params object
 * @param {Object} prevState From state definition
 * @param {Object} prevParams From params object
 * @return {Object} Action object
 */
export default function onStateChangeSuccess(evt, currentState, currentParams, prevState, prevParams) {
  return {
    type: STATE_CHANGE_SUCCESS,
    payload: {
      currentState,
      currentParams,
      prevState,
      prevParams
    }
  };
}
