import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import routerState from './router-state-reducer';
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import routerMiddleware from './router-middleware';
import uiRouterListener from './router-listener';
import stateChangeActions from './state-change-actions';
import stateActivationActions from './state-activation-actions';

export default angular
  .module('ng-ui-router-middleware', [uiRouter])
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .factory('ngUiStateActivationActions', stateActivationActions)
  .run(uiRouterListener).name;

export const router = routerState;

export { stateGo, stateReload, stateTransitionTo };
