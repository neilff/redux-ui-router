#redux-ui-router

[![Circle CI](https://circleci.com/gh/neilff/ng-redux-ui-router.svg?style=svg)](https://circleci.com/gh/neilff/ng-redux-ui-router)

> ngRedux bindings for Angular UI Router - Keep your router state inside your ngRedux store.

- Maintains router state inside your store
- Use actions to transition your UI instead of `$state`
- Use your store state to access route params instead of `$stateParams`

## Getting Started

### Installation
```bash
$ npm install redux-ui-router
````

## Table of Contents

- [Reducer](#reducer)
- [Actions](#actions)
- [Middleware](#middleware)
- [Listener](#listener)
- [Example](#example)

## <a name="reducer">Reducer</a>

ngRedux UI Router includes a reducer which is responsible for managing the current route parameters inside your store.

### Usage:

Include this reducer by importing it from `redux-ui-router`:

```
import {combineReducers} from 'redux';
import {router} from 'redux-ui-router';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myReducer,
  router
});

export default rootReducer;
```

This will provide you the ability to tap into the current route parameters from `state.router`. Typically route parameters would come from `$stateParams`, instead you will now use `state.router` to grab these parameters. This makes it easier when you derive new data from your store, or when you perform an action that requires a state parameter.

**Note:** This pattern will require you to enforce it yourself, there is nothing preventing you from using `$stateParams`.

In a controller or selector, we can now access the state of the router:

```
class SomeController {
  constructor($ngRedux,$scope) {
    let disconnect = $ngRedux.connect(state => ({router: state.router}))(this);
    ...
  }
}
```

**Note:** As of v0.4.0, Immutable.js is no longer used. To access router properties, use `router.currentParams[myParam]` instead of `router.getIn(['currentParams', 'myParam'])`.

## <a name="actions">Actions</a>

ngRedux UI Router includes several actions which mimic functionality that Angular UI Router provides. These actions should be used instead of interacting directly with `$state`. These actions can be imported directly from `redux-ui-router`.

### Usage:

#### stateGo(to, params, options)

This action create will trigger a $state.go in the UiRouter Middleware. Accepts a payload which matches the UI Router $state.go function.

[Documentation Reference](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options)

#### stateReload(to, params, options)

This action create will trigger a $state.reload in the UiRouter Middleware. Accepts a payload which matches the UI Router $state.reload function.

[Documentation Reference](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#statereload)

#### stateTransitionTo(to, params, options)

This action create will trigger a $state.transitionTo in the UiRouter Middleware. Accepts a payload which matches the UI Router $state.transitionTo function.

[Documentation Reference](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#statetransitiontoto-toparams--options)

## <a name="middleware">Middleware</a>

ngRedux UI Router includes a middleware for performing `$state` interactions based on the above actions being fired. Whenever one of the above actions is fired, the corresponding `$state` function is called. For example, firing the `stateGo` action will cause the middleware to perform a `$state.go` function under the hood, and then inform the system that upon resolving the transition, that the action was fired.

### Usage:

The middleware should be used when creating your ngRedux store, this should be done as follows:

```
  $ngReduxProvider.createStoreWith(reducers, [
    'myOtherMiddleware',
    'ngUiRouterMiddleware',
    thunk,
    logger
  ]);
```

For additional information, refer to the [ngRedux documentation](https://github.com/wbuchwalter/ng-redux#api).

## <a name="listener">Listener</a>

ngReudx UI Router provides a listener which taps into Angular UI Router's `$stateChangeStart`, `$locationChangeSuccess`, `$stateChangeError`, and `$stateNotFound` events. The listener is responsible for firing actions whenever one of these events occur. This allows us to track the state of the router whenever it is interacted with.

### Usage:

This listener is in the run block of the ngReduxUiRouter module. Including it in your app module will automatically set this up to begin listening to UI Router events.

```
// Import Angular
import angular from 'angular';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

// Import Angular Components
import components from './components';

// Import Configuration
import configNgReduxProvider from './config/ng-redux';

export default angular
  .module('myApp', [
    ngRedux,
    ngReduxUiRouter,
    components
  ])
  .config(configNgReduxProvider)
  .name;

```

## <a name="example">Example</a>

For a more complete example, take a look at [the example here](https://github.com/neilff/redux-ui-router/tree/master/example).

To run the example:

```
git clone https://github.com/neilff/redux-ui-router/
npm install
cd example
npm install
npm run start
```
