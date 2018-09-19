'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateActivationActions;

var _stateGo = require('./state-go');

var _stateGo2 = _interopRequireDefault(_stateGo);

var _stateReload = require('./state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

var _stateTransitionTo = require('./state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Transition Actions
function stateActivationActions($ngRedux) {
  var actionCreator = {
    stateGo: _stateGo2.default,
    stateReload: _stateReload2.default,
    stateTransitionTo: _stateTransitionTo2.default
  };

  return (0, _redux.bindActionCreators)(actionCreator, $ngRedux.dispatch);
}

stateActivationActions.$inject = ['$ngRedux'];