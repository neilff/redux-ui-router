'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularUiRouter = require('angular-ui-router');

var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

var _routerMiddleware = require('./router-middleware');

var _routerMiddleware2 = _interopRequireDefault(_routerMiddleware);

var _routerActions = require('./router-actions');

var _routerActions2 = _interopRequireDefault(_routerActions);

var _routerListener = require('./router-listener');

var _routerListener2 = _interopRequireDefault(_routerListener);

exports['default'] = _angular2['default'].module('ng-ui-router-middleware', [_angularUiRouter2['default']]).factory('ngUiRouterActions', _routerActions2['default']).factory('ngUiRouterMiddleware', _routerMiddleware2['default']).run(_routerListener2['default']).name;
module.exports = exports['default'];