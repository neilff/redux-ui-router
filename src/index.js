import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routerState from './router-state-reducer';

import routerMiddleware from './router-middleware';
import actions from './router-actions';
import uiRouterListener from './router-listener';
import stateChangeActions from './state-change-actions';

export default angular
  .module('ng-ui-router-middleware', [
    uiRouter
  ])
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name;

export const routerActions = actions;
export const router = routerState;
