'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onStateChangeSuccess;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $stateChangeSuccess event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeSuccess event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @return {Object} Action object
 */
function onStateChangeSuccess(toState, toParams, fromState, fromParams) {
  return {
    type: _actionTypes.STATE_CHANGE_SUCCESS,
    payload: {
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams
    }
  };
}