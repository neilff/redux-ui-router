import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO
} from './action-types';

export default function routerMiddleware($state) {
  return () => next => action => {
    let { payload } = action;

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

      default:
        next(action);
    }
  };
}

routerMiddleware.$inject = ['$state'];
