import { STATE_RELOAD } from './action-types';

/**
 * This action create will trigger a $state.reload in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.reload function.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param  {String} state - (optional) Root of the resolves to be re-resolved
 * @return {Object} Action object
 */
export default function stateReload(state) {
  return {
    type: STATE_RELOAD,
    payload: state,
  };
}
