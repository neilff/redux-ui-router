import { STATE_GO } from './action-types';

/**
 * This action create will trigger a $state.go in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.go function.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param  {String} to - State name
 * @param  {Object} params - (optional) Parameters to send with state
 * @param  {Object} options - (optional) Options object
 * @return {Object} Action object
 */
export default function stateGo(to, params, options) {
  return {
    type: STATE_GO,
    payload: {
      to,
      params,
      options,
    },
  };
}
