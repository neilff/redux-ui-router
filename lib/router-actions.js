'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = routerActions;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stateChangeStart = require('./state-change-start');

var _stateChangeStart2 = _interopRequireDefault(_stateChangeStart);

var _stateChangeSuccess = require('./state-change-success');

var _stateChangeSuccess2 = _interopRequireDefault(_stateChangeSuccess);

var _stateGo = require('./state-go');

var _stateGo2 = _interopRequireDefault(_stateGo);

var _stateReload = require('./state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

var _stateTransitionTo = require('./state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

var _redux = require('redux');

var redux = _interopRequireWildcard(_redux);

function routerActions($ngRedux) {
  var actionCreator = {
    onStateChangeStart: _stateChangeStart2['default'],
    onStateChangeSuccess: _stateChangeSuccess2['default'],
    stateGo: _stateGo2['default'],
    stateReload: _stateReload2['default'],
    stateTransitionTo: _stateTransitionTo2['default']
  };

  return redux.bindActionCreators(actionCreator, $ngRedux.getStore().dispatch);
}

routerActions.$inject = ['$ngRedux'];
module.exports = exports['default'];