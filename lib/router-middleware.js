'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routerMiddleware;

var _actionTypes = require('./action-types');

function routerMiddleware($state) {
  return function () {
    return function (next) {
      return function (action) {
        var payload = action.payload;


        switch (action.type) {
          case _actionTypes.STATE_GO:
            return $state.go(payload.to, payload.params, payload.options).then(next(action));

          case _actionTypes.STATE_RELOAD:
            return $state.reload(payload).then(next(action));

          case _actionTypes.STATE_TRANSITION_TO:
            return $state.transitionTo(payload.to, payload.params, payload.options).then(next(action));

          case _actionTypes.STATE_CHANGE_FINISH:
            return next({
              type: _actionTypes.STATE_CHANGE_FINISH,
              payload: {
                currentState: action.payload.toState,
                currentParams: action.payload.toParams,
                href: $state.href,
                prevState: action.payload.fromState,
                prevParams: action.payload.fromParams
              }
            });

          default:
            return next(action);
        }
      };
    };
  };
}

routerMiddleware.$inject = ['$state'];