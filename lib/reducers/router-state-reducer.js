'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.router = undefined;
exports.routerStateReducerFactory = routerStateReducerFactory;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actionTypes = require('../constants/action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
	currentState: {
		data: {}
	},
	currentParams: {},
	prevState: {},
	prevParams: {}
};

/**
 * Factory for creating the root reducer with a configurable initial
 * state
 * @param {Object} initialState
 */
function routerStateReducerFactory(initialState) {
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

		if (action.type !== _actionTypes.STATE_CHANGE_SUCCESS) {
			return state;
		}
		return _lodash2.default.merge(initialState, action.payload);
	};
}

var router = exports.router = routerStateReducerFactory(INITIAL_STATE);