'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stateReload;

var _actionTypes = require('./action-types');

/**
 * This action create will trigger a $state.reload in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.reload function.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param  {String} state - (optional) Root of the resolves to be re-resolved
 * @return {Object} Action object
 */

function stateReload(state) {
  return {
    type: _actionTypes.STATE_RELOAD,
    payload: state
  };
}

module.exports = exports['default'];