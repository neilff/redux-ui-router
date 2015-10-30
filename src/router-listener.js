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

  $rootScope.$on('$locationChangeSuccess', (evt) => {
    evt.preventDefault();
    $urlRouter.sync();
    ngUiStateChangeActions.onStateChangeSuccess();
  });

  let unsubcribeStateChangeListener = $rootScope.$on('$stateChangeSuccess', () => {
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
  'ngUiStateChangeActions'
];
