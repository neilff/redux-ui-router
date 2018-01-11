'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouterListener;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _getStateObject(state) {
  if (!state) return {};

  var name = state.name,
      params = state.params,
      url = state.url,
      _state$data = state.data,
      data = _state$data === undefined ? {} : _state$data;


  return { name: name, params: params, url: url, data: data };
}

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
    return [_getStateObject(t.to()), t.params('to'), _getStateObject(t.from()), t.params('from')];
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

RouterListener.$inject = ['$transitions', 'ngUiStateChangeActions'];