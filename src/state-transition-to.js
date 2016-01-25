import { STATE_TRANSITION_TO } from './action-types';

/**
 * This action create will trigger a $state.transitionTo in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.transitionTo function.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param  {String} to - State name
 * @param  {Object} toParams - (optional) Parameters to send with state
 * @param  {Object} options - (optional) Options object
 * @return {Object} Action object
 */
export default function stateTransitionTo(to, toParams, options) {
  return {
    type: STATE_TRANSITION_TO,
    payload: {
      to,
      toParams,
      options,
    },
  };
}
