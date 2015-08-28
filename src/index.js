import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routerState from './router-state-reducer';

import routerMiddleware from './router-middleware';
import routerActions from './router-actions';
import uiRouterListener from './router-listener';

export const router = routerState;

export default angular
  .module('ng-ui-router-middleware', [
    uiRouter
  ])
  .factory('ngUiRouterActions', routerActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name;

