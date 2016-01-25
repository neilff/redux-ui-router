import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngRedux from 'ng-redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ngReduxRouter from '../src';

import {
  router,
  stateGo,
  stateReload,
  stateTransitionTo
}
from '../src';

const routerActions = {
  stateGo,
  stateReload,
  stateTransitionTo
};

export default angular
  .module('demoApp', [
    uiRouter,
    ngRedux,
    ngReduxRouter
  ])
  .config(($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/app');

    $stateProvider
      .state('app', {
        url: '/app',
        views: {
          main: {
            template: `
              <pre>{{ globalState | json }}</pre>
                <div class="mainView">
                <h1>Main View</h1>

                <ul>
                  <li>
                    <a ui-sref="app">Main View</a>
                    <ul>
                      <li><a ui-sref="app.child1">Child View 1</a></li>
                      <li><a ui-sref="app.child2">Child View 2</a></li>
                      <li><a ui-sref="app.child3">Child View 3</a></li>
                      <li><a ui-sref="app.child4">Child View 4 (prohibited)</a></li>
                    </ul>
                  </li>
                </ul>
                <div ui-view="child"></div>
              </div>
            `,
            controller: ($scope, $ngRedux) => {
              $scope.globalState = {};

              $ngRedux.connect(state => {
                return {
                  globalState: state
                };
              })($scope)
            }
          }
        }
      })
      .state('app.child1', {
        url: '/child1?hello?optional',
        views: {
          child: {
            controller: ($scope, $ngRedux) => {
              let disconnect = $ngRedux.connect((state) => state, routerActions)($scope);

              $scope.$on('$destroy', disconnect)
            },
            template: `
              <div class="child-view">
                <h2>Child View 1</h2>
                <button ng-click="stateGo('app.child2')">stateGo View 2</button>
                <button ng-click="stateTransitionTo('app.child2')">stateTransitionTo View 2</button>
              </div>
            `
          }
        }
      })
      .state('app.child2', {
        url: '/child2',
        views: {
          child: {
            controller: ($scope, $ngRedux) => {
              let disconnect = $ngRedux.connect((state) => state, routerActions)($scope);

              $scope.$on('$destroy', disconnect)
            },
            template: `
              <div class="child-view">
                <h2>Child View 2</h2>
                <button ng-click="stateGo('app.child1')">$state.go View 1</button>
                <button ng-click="stateReload('app.child1')">$state.reload</button>
                <button ng-click="stateGo('app.child1',{hello: 'world', optional: true})">$state.go to View 1 with Params</button>
              </div>
            `
          }
        }
      })
      .state('app.child3', {
        url: '/child3?id',
        params: {
          hello: 'world'
        },
        reloadOnSearch: false,
        views: {
          child: {
            controller: ($scope, $ngRedux) => {
              let disconnect = $ngRedux.connect((state) => state, routerActions)($scope);

              $scope.$on('$destroy', disconnect)
            },
            template: `
              <div class="child-view">
                <h2>Child View 3</h2>
                <button ng-click="stateGo('app.child3', {id: '1'})">$state.go View 3, ID: 1</button>
                <button ng-click="stateGo('app.child3', {id: '2'})">$state.go View 3, ID: 2</button>
                <button ng-click="stateGo('app.child3', {id: '3'})">$state.go View 3, ID: 3</button>
              </div>
            `
          }
        }
      })
      .state('app.child4', {
        url: '/child4',
        prohibited: true,
        views: {
          child: {
            template: `
            <div class="child-view">
              <h2>Child View 4</h2>
              <div>This state is prohibited. You should've been redirected to the root.</div>
            </div>
          `
          }
        }
      })
  })
  .config(($ngReduxProvider) => {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });

    const reducers = combineReducers({
      router
    });

    $ngReduxProvider.createStoreWith(reducers, ['ngUiRouterMiddleware', logger, thunk]);
  })
  .run(($rootScope, $state, $ngRedux, $urlRouter) => {

    // If save something to the store, dispatch will force state change update
    console.log('will do dispatch');
    $ngRedux.dispatch({type: 'SOME_ACTION'});
    console.log('did dispatch');

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.prohibited) {
        evt.preventDefault();
        console.log('prohibited state change cancelled');
        $state.go('app');
      }
    });

    console.log('$stateChangeStart callback is ready');
    console.log('enable $urlRouter listening');

    $urlRouter.sync();
    $urlRouter.listen();
  })
  .name;
