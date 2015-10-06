import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO,
  STATE_CHANGE_SUCCESS
} from './action-types';

export default function routerMiddleware($state) {
  return ({ getState }) => next => action => {
    let { payload } = action;

    switch (action.type) {
      case STATE_GO:
        return $state.go(payload.to, payload.params, payload.options)
          .then(() => {
            if ($state.current.reloadOnSearch === false) {
              next({
                type: STATE_CHANGE_SUCCESS,
                payload: {
                  currentState: $state.current,
                  currentParams: $state.params,
                  prevState: getState().router.get('currentState'),
                  prevParams: getState().router.get('currentParams')
                }
              });
            }

            next(action);
          });

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
            currentState: payload.toState,
            currentParams: payload.toParams,
            prevState: payload.fromState,
            prevParams: payload.fromParams
          }
        });

      default:
        next(action);
    }
  };
}

routerMiddleware.$inject = ['$state'];
