'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = routerStateReducer;

var _actionTypes = require('./action-types');

var INITIAL_STATE = {
  event: null,
  toState: null,
  toParams: null,
  fromState: null,
  fromParams: null
};

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { toState, toParams, fromState, fromParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */

function routerStateReducer(state, action) {
  if (state === undefined) state = INITIAL_STATE;

  return action.type === _actionTypes.STATE_CHANGE_SUCCESS ? action.payload : state;
}

module.exports = exports['default'];