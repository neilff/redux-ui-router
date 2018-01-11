'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerActions = exports.stateTransitionTo = exports.stateReload = exports.stateGo = exports.routerStateReducerFactory = exports.router = undefined;

var _routerStateReducer = require('./reducers/router-state-reducer');

Object.defineProperty(exports, 'router', {
  enumerable: true,
  get: function get() {
    return _routerStateReducer.router;
  }
});
Object.defineProperty(exports, 'routerStateReducerFactory', {
  enumerable: true,
  get: function get() {
    return _routerStateReducer.routerStateReducerFactory;
  }
});

var _stateGo = require('./actions/state-go');

Object.defineProperty(exports, 'stateGo', {
  enumerable: true,
  get: function get() {
    return _stateGo.stateGo;
  }
});

var _stateReload = require('./actions/state-reload');

Object.defineProperty(exports, 'stateReload', {
  enumerable: true,
  get: function get() {
    return _stateReload.stateReload;
  }
});

var _stateTransitionTo = require('./actions/state-transition-to');

Object.defineProperty(exports, 'stateTransitionTo', {
  enumerable: true,
  get: function get() {
    return _stateTransitionTo.stateTransitionTo;
  }
});

var _actionTypes = require('./constants/action-types');

Object.defineProperty(exports, 'routerActions', {
  enumerable: true,
  get: function get() {
    return _actionTypes.actions;
  }
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularjs = require('@uirouter/angularjs');

var _angularjs2 = _interopRequireDefault(_angularjs);

var _routerMiddleware = require('./middleware/router-middleware');

var _routerMiddleware2 = _interopRequireDefault(_routerMiddleware);

var _routerListener = require('./router-listener');

var _routerListener2 = _interopRequireDefault(_routerListener);

var _stateChangeActions = require('./state-change-actions');

var _stateChangeActions2 = _interopRequireDefault(_stateChangeActions);

var _stateActivationActions = require('./state-activation-actions');

var _stateActivationActions2 = _interopRequireDefault(_stateActivationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('ng-ui-router-middleware', [_angularjs2.default]).provider('ngUiStateChangeActions', _stateChangeActions2.default).factory('ngUiRouterMiddleware', _routerMiddleware2.default).factory('ngUiStateActivationActions', _stateActivationActions2.default).run(_routerListener2.default).name;