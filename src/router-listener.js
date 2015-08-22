/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} ngUiRouterActions Dependency
 * @param {object} accountSelectActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($rootScope, ngUiRouterActions) {
  $rootScope.$on('$stateChangeStart', ngUiRouterActions.onStateChangeStart);
  $rootScope.$on('$stateChangeSuccess', ngUiRouterActions.onStateChangeSuccess);

  $rootScope.$on('$stateChangeError', ngUiRouterActions.onStateChangeError);
  $rootScope.$on('$stateNotFound', ngUiRouterActions.onStateNotFound);
}

RouterListener.$inject = ['$rootScope', 'ngUiRouterActions'];
