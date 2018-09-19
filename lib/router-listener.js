'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouterListener;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
function RouterListener($transitions, ngUiStateChangeActions) {
  var prevNext = function prevNext(t) {
    return [t.to(), t.params('to'), t.from(), t.params('from'), t.options()];
  };

  var prevNextReduxState = function prevNextReduxState(t) {
    return [getStateObject(t.to()), t.params('to'), getStateObject(t.from()), t.params('from')];
  };

  $transitions.onStart({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeStart.apply(ngUiStateChangeActions, _toConsumableArray(prevNext($transition$)));
  });
  $transitions.onError({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeError.apply(ngUiStateChangeActions, _toConsumableArray(prevNext($transition$)).concat([$transition$.error()]));
  });
  $transitions.onFinish({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeFinish.apply(ngUiStateChangeActions, _toConsumableArray(prevNextReduxState($transition$)));
  });
  $transitions.onSuccess({}, function ($transition$) {
    return ngUiStateChangeActions.onStateChangeSuccess.apply(ngUiStateChangeActions, _toConsumableArray(prevNext($transition$)));
  });
}

function getStateObject(state) {
  if (!state) {
    return {};
  }
  var name = state.name,
      params = state.params,
      url = state.url;

  return {
    name: name,
    params: params,
    url: url
  };
}

RouterListener.$inject = ['$transitions', 'ngUiStateChangeActions'];