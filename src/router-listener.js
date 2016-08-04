/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($transitions, $urlRouter, ngUiStateChangeActions) {
  const onError = ($transition$) => {
    return ngUiStateChangeActions.onStateChangeError(
      $transition$.to(),
      $transition$.to().params,
      $transition$.from(),
      $transition$.from().params,
      $transition$.error()
    );
  };

  const onStart = ($transition$) => {
    return ngUiStateChangeActions.onStateChangeStart(
      $transition$.to(),
      $transition$.to().params,
      $transition$.from(),
      $transition$.from().params
    );
  };


  $transitions.onStart({}, onStart);
  $transitions.onSuccess({}, () => ngUiStateChangeActions.onStateChangeSuccess());
  $transitions.onError({}, onError);
}

RouterListener.$inject = [
  '$transitions',
  '$urlRouter',
  'ngUiStateChangeActions',
];
