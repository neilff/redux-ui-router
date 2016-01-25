import { STATE_CHANGE_SUCCESS } from './action-types';

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @return {Object} Action object
 */
export default function onStateChangeSuccess() {
  return {
    type: STATE_CHANGE_SUCCESS,
  };
}
