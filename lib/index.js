'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerMiddleware = exports.stateTransitionTo = exports.stateReload = exports.stateGo = exports.router = undefined;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = require('@uirouter/angularjs');

var _angularjs2 = _interopRequireDefault(_angularjs);

var _routerStateReducer = require('./router-state-reducer');

var _routerStateReducer2 = _interopRequireDefault(_routerStateReducer);

var _stateGo = require('./state-go');

var _stateGo2 = _interopRequireDefault(_stateGo);

var _stateReload = require('./state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

var _stateTransitionTo = require('./state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

var _routerMiddleware = require('./router-middleware');

var _routerMiddleware2 = _interopRequireDefault(_routerMiddleware);

var _routerListener = require('./router-listener');

var _routerListener2 = _interopRequireDefault(_routerListener);

var _stateChangeActions = require('./state-change-actions');

var _stateChangeActions2 = _interopRequireDefault(_stateChangeActions);

var _stateActivationActions = require('./state-activation-actions');

var _stateActivationActions2 = _interopRequireDefault(_stateActivationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('ng-ui-router-middleware', [_angularjs2.default]).provider('ngUiStateChangeActions', _stateChangeActions2.default).factory('ngUiRouterMiddleware', _routerMiddleware2.default).factory('ngUiStateActivationActions', _stateActivationActions2.default).run(_routerListener2.default).name;
var router = exports.router = _routerStateReducer2.default;

exports.stateGo = _stateGo2.default;
exports.stateReload = _stateReload2.default;
exports.stateTransitionTo = _stateTransitionTo2.default;
exports.routerMiddleware = _routerMiddleware2.default;