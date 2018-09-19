'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onStateChangeFinish;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $stateChangeFinish event is broadcast.
 * Accepts a payload which matches the UI Router $stateChangeFinish event.
 *
 * http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
 *
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @param {Object} options Options object
 * @return {Object} Action object
 */
function onStateChangeFinish(toState, toParams, fromState, fromParams, options) {
  return {
    type: _actionTypes.STATE_CHANGE_FINISH,
    payload: {
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      options: options
    }
  };
}