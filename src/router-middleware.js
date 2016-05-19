import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO,
  STATE_CHANGE_SUCCESS,
} from './action-types';

export default function routerMiddleware($state) {
  return () => next => action => {
    const { payload } = action;

    switch (action.type) {
    case STATE_GO:
      return $state.go(payload.to, payload.params, payload.options)
          .then(next(action));

    case STATE_RELOAD:
      return $state.reload(payload)
          .then(next(action));

    case STATE_TRANSITION_TO:
      return $state.transitionTo(payload.to, payload.params, payload.options)
      .then(next(action));

    case STATE_CHANGE_SUCCESS:
      return next({
        type: STATE_CHANGE_SUCCESS,
        payload: {
          currentState: action.payload.toState,
          currentParams: action.payload.toParams,
          href: $state.href,
          prevState: action.payload.fromState,
          prevParams: action.payload.fromParams,
        },
      });

    default:
      return next(action);
    }
  };
}

routerMiddleware.$inject = ['$state'];
