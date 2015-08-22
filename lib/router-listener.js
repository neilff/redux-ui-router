/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} ngUiRouterActions Dependency
 * @param {object} accountSelectActions Dependency
 * @return {undefined} undefined
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = RouterListener;

function RouterListener($rootScope, ngUiRouterActions) {
  $rootScope.$on('$stateChangeStart', ngUiRouterActions.onStateChangeStart);
  $rootScope.$on('$stateChangeSuccess', ngUiRouterActions.onStateChangeSuccess);
}

RouterListener.$inject = ['$rootScope', 'ngUiRouterActions'];
module.exports = exports['default'];