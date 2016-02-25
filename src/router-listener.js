/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} $stateParams Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($rootScope, $urlRouter, $stateParams, ngUiStateChangeActions) {
  $rootScope.$on('$stateChangeStart', ngUiStateChangeActions.onStateChangeStart);

  $rootScope.$on('$stateChangeSuccess', () => {
    ngUiStateChangeActions.onStateChangeSuccess();
  });

  const unsubcribeStateChangeListener = $rootScope.$on('$locationChangeSuccess', () => {
    ngUiStateChangeActions.onStateChangeSuccess();
    unsubcribeStateChangeListener();
  });

  $rootScope.$on('$stateChangeError', ngUiStateChangeActions.onStateChangeError);
  $rootScope.$on('$stateNotFound', ngUiStateChangeActions.onStateNotFound);
}

RouterListener.$inject = [
  '$rootScope',
  '$urlRouter',
  '$stateParams',
  'ngUiStateChangeActions',
];
