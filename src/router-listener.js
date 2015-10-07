/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} $urlRouter Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @param {object} accountSelectActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($rootScope, $urlRouter, ngUiStateChangeActions) {

  $rootScope.$on('$stateChangeStart', ngUiStateChangeActions.onStateChangeStart);

  $rootScope.$on('$locationChangeSuccess', (evt) => {
    evt.preventDefault();
    $urlRouter.sync();
    ngUiStateChangeActions.onStateChangeSuccess();
  });

  $rootScope.$on('$stateChangeError', ngUiStateChangeActions.onStateChangeError);
  $rootScope.$on('$stateNotFound', ngUiStateChangeActions.onStateNotFound);
}

RouterListener.$inject = [
  '$rootScope',
  '$urlRouter',
  'ngUiStateChangeActions'
];

