'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onStateChangeError;

var _actionTypes = require('./action-types');

/**
 * This action is triggered when a $transitions.onError event is occours.
 * Accepts a payload which matches the UI Router $transition$.
 *
 * http://angular-ui.github.io/ui-router/1.0.0-alpha.3/classes/transition.transition-1.html#onerror
 *
 * @param {Object} toState To state definition
 * @param {Object} toParams To params object
 * @param {Object} fromState From state definition
 * @param {Object} fromParams From params object
 * @param {Object} err Error resolve object
 * @return {Object} Action object
 */
function onStateChangeError(toState, toParams, fromState, fromParams, err) {
  return {
    type: _actionTypes.STATE_CHANGE_ERROR,
    payload: {
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      err: err
    }
  };
}