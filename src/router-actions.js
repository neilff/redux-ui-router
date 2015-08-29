// Event Actions
import onStateChangeStart from './state-change-start';
import onStateChangeSuccess from './state-change-success';
import onStateChangeError from './state-change-error';
import onStateNotFound from './state-not-found';

// Method Actions
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import * as redux from 'redux';

export default function routerActions($ngRedux) {
  let actionCreator = {
    onStateChangeStart,
    onStateChangeSuccess,
    onStateChangeError,
    onStateNotFound,
    stateGo,
    stateReload,
    stateTransitionTo
  };

  return redux.bindActionCreators(actionCreator, $ngRedux.getStore().dispatch);
}

routerActions.$inject = ['$ngRedux'];
