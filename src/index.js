import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import routerMiddleware from './middleware/router-middleware'
import uiRouterListener from './router-listener'
import stateChangeActions from './state-change-actions'
import stateActivationActions from './state-activation-actions'

export default angular
  .module('ng-ui-router-middleware', [uiRouter])
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .factory('ngUiStateActivationActions', stateActivationActions)
  .run(uiRouterListener)
  .name

export { router } from './reducers/router-state-reducer'
export { routerStateReducerFactory } from './reducers/router-state-reducer'
export { stateGo } from './actions/state-go'
export { stateReload } from './actions/state-reload'
export { stateTransitionTo } from './actions/state-transition-to'
export { actions as routerActions } from './constants/action-types'
