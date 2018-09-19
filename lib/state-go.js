'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateGo;

var _actionTypes = require('./action-types');

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
function stateGo(to, params, options) {
  return {
    type: _actionTypes.STATE_GO,
    payload: {
      to: to,
      params: params,
      options: options
    }
  };
}