/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($transitions, ngUiStateChangeActions) {
  const prevNext = (t) => [t.to(), t.params('to'), t.from(), t.params('from')];

  const prevNextReduxState = (t) => {
    const toState = t.to();
    let toStateName = '';
    if (toState.name) {
      toStateName = toState.name;
    }
    const fromState = t.from();
    let fromStateName = '';
    if (fromState.name) {
      fromStateName = fromState.name;
    }
    return [toStateName, t.params('to'), fromStateName, t.params('from')];
  };

  $transitions.onStart({}, ($transition$) => ngUiStateChangeActions.onStateChangeStart(...prevNext($transition$)));
  $transitions.onError({}, ($transition$) => ngUiStateChangeActions.onStateChangeError(...prevNext($transition$), $transition$.error()));
  $transitions.onSuccess({}, ($transition$) => ngUiStateChangeActions.onStateChangeSuccess(...prevNextReduxState($transition$)));
}

RouterListener.$inject = [
  '$transitions',
  'ngUiStateChangeActions',
];
