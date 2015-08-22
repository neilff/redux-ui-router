'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = routerMiddleware;

var _actionTypes = require('./action-types');

function routerMiddleware($state) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === _actionTypes.STATE_GO) {
          var _action$payload = action.payload;
          var to = _action$payload.to;
          var params = _action$payload.params;
          var options = _action$payload.options;

          return $state.go(to, params, options);
        } else if (action.type === _actionTypes.STATE_RELOAD) {
          var payload = action.payload;

          return $state.reload(payload);
        } else if (action.type === _actionTypes.STATE_TRANSITION_TO) {
          var _action$payload2 = action.payload;
          var to = _action$payload2.to;
          var params = _action$payload2.params;
          var options = _action$payload2.options;

          return $state.transitionTo(to, params, options);
        } else {
          next(action);
        }
      };
    };
  };
}

routerMiddleware.$inject = ['$state'];
module.exports = exports['default'];