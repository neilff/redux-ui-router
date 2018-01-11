'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.router = undefined;
exports.routerStateReducerFactory = routerStateReducerFactory;

var _actionTypes = require('../constants/action-types');

var INITIAL_STATE = {
	currentState: {
		data: {}
	},
	currentParams: {},
	prevState: {},
	prevParams: {}

	/**
  * Factory for creating the root reducer with a configurable initial
  * state
  * @param {Object} initialState
  */
};function routerStateReducerFactory(initialState, reducer) {
	/**
  * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
  * with { currentState, currentParams, prevState, prevParams }
  *
  * @param  {Object} state - Previous state
  * @param  {Object} action - Action
  * @return {Object} New state
  */
	return function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		if (action.type !== _actionTypes.STATE_CHANGE_FINISH) {
			return state;
		}
		return action.payload;
	};
}

var router = exports.router = routerStateReducerFactory(INITIAL_STATE);