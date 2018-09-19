'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routerStateReducer;

var _actionTypes = require('./action-types');

var INITIAL_STATE = {
  currentState: {},
  currentParams: {},
  prevState: {},
  prevParams: {}
};

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
function routerStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  if (action.type !== _actionTypes.STATE_CHANGE_FINISH) {
    return state;
  }
  return action.payload;
}