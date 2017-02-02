'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateTransitionTo = exports.stateReload = exports.stateGo = exports.router = undefined;

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _routerStateReducer = require('./reducers/router-state-reducer');

var _routerStateReducer2 = _interopRequireDefault(_routerStateReducer);

var _stateGo = require('./actions/state-go');

var _stateGo2 = _interopRequireDefault(_stateGo);

var _stateReload = require('./actions/state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

var _stateTransitionTo = require('./actions/state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

var _routerMiddleware = require('./middleware/router-middleware');

var _routerMiddleware2 = _interopRequireDefault(_routerMiddleware);

var _routerListener = require('./router-listener');

var _routerListener2 = _interopRequireDefault(_routerListener);

var _stateChangeActions = require('./state-change-actions');

var _stateChangeActions2 = _interopRequireDefault(_stateChangeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// actions
exports.default = _angular2.default.module('ng-ui-router-middleware', [_angularUiRouter2.default]).provider('ngUiStateChangeActions', _stateChangeActions2.default).factory('ngUiRouterMiddleware', _routerMiddleware2.default).run(_routerListener2.default).name;
// reducers

var router = exports.router = _routerStateReducer2.default;

exports.stateGo = _stateGo2.default;
exports.stateReload = _stateReload2.default;
exports.stateTransitionTo = _stateTransitionTo2.default;