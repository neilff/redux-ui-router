/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @param {object} accountSelectActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($rootScope, ngUiStateChangeActions) {

  $rootScope.$on('$stateChangeStart', ngUiStateChangeActions.onStateChangeStart);
  $rootScope.$on('$stateChangeSuccess', ngUiStateChangeActions.onStateChangeSuccess);

  $rootScope.$on('$stateChangeError', ngUiStateChangeActions.onStateChangeError);
  $rootScope.$on('$stateNotFound', ngUiStateChangeActions.onStateNotFound);
}

RouterListener.$inject = ['$rootScope', 'ngUiStateChangeActions'];

