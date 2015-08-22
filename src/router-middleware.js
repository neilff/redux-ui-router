import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO,
  STATE_CHANGE_START,
  STATE_CHANGE_SUCCESS,
  STATE_CHANGE_ERROR,
  STATE_NOT_FOUND,
  VIEW_CONTENT_LOADING,
  VIEW_CONTENT_LOADED,
} from './action-types';

export default function routerMiddleware($state) {
  return store => next => action => {
    if (action.type === STATE_GO) {
      let {
        payload: {
          to: to,
          params: params,
          options: options,
        }
      } = action;

      return $state.go(to, params, options);
    } else if (action.type === STATE_RELOAD) {
      let { payload } = action;

      return $state.reload(payload);
    } else if (action.type === STATE_TRANSITION_TO) {
      let {
        payload: {
          to: to,
          params: params,
          options: options,
        }
      } = action;

      return $state.transitionTo(to, params, options);
    } else {
      next(action);
    }
  };
}

routerMiddleware.$inject = ['$state'];
