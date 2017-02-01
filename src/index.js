import angular from 'angular'
import uiRouter from 'angular-ui-router'
// reducers
import routerState from './reducers/router-state-reducer'
// actions
import stateGo from './actions/state-go'
import stateReload from './actions/state-reload'
import stateTransitionTo from './actions/state-transition-to'

import routerMiddleware from './middleware/router-middleware'
import uiRouterListener from './router-listener'
import stateChangeActions from './state-change-actions'

export default angular
  .module('ng-ui-router-middleware', [
    uiRouter
  ])
  .provider('ngUiStateChangeActions', stateChangeActions)
  .factory('ngUiRouterMiddleware', routerMiddleware)
  .run(uiRouterListener)
  .name

export const router = routerState

export {
  stateGo,
  stateReload,
  stateTransitionTo
}
