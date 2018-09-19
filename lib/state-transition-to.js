'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateTransitionTo;

var _actionTypes = require('./action-types');

/**
 * This action create will trigger a $state.transitionTo in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.transitionTo function.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param  {String} to - State name
 * @param  {Object} params - (optional) Parameters to send with state
 * @param  {Object} options - (optional) Options object
 * @return {Object} Action object
 */
function stateTransitionTo(to, params, options) {
  return {
    type: _actionTypes.STATE_TRANSITION_TO,
    payload: {
      to: to,
      params: params,
      options: options
    }
  };
}