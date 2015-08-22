import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routerMiddleware from './router-middleware';
import routerActions from './router-actions';
import uiRouterListener from './router-listener';

export default angular
  .module('ng-ui-router-middleware', [
    uiRouter
  ])
  .factory('ngUiRouterActions', routerActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name;
