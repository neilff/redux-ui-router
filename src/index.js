import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routerState from './router-state-reducer';

import routerMiddleware from './router-middleware';
import routerActions from './router-actions';
import uiRouterListener from './router-listener';
import stateChangeActions from './state-change-actions';
export const router = routerState;
export { actions } from './router-actions';

export default angular
  .module('ng-ui-router-middleware', [
    uiRouter
  ])
  .provider('ngUiRouterActions', routerActions)
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name;

