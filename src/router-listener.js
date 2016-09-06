/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($transitions, $urlRouter, ngUiStateChangeActions) {
  const prevNext = (t) => [t.to(), t.to().params, t.from(), t.from().params];

  $transitions.onStart({}, ($transition$) => ngUiStateChangeActions.onStateChangeStart(...prevNext($transition$)));
  $transitions.onError({}, ($transition$) => ngUiStateChangeActions.onStateChangeError(...prevNext($transition$), $transition$.error()));
  $transitions.onSuccess({}, () => ngUiStateChangeActions.onStateChangeSuccess());
}

RouterListener.$inject = [
  '$transitions',
  '$urlRouter',
  'ngUiStateChangeActions',
];
