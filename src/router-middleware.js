import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO
} from './action-types';

export default function routerMiddleware($state) {
  return () => next => action => {
    if (action.type === STATE_GO) {
      let {
        payload: {
          to: to,
          params: params,
          options: options
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
          options: options
        }
      } = action;

      return $state.transitionTo(to, params, options);
    } else {
      next(action);
    }
  };
}

routerMiddleware.$inject = ['$state'];
