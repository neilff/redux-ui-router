// Transition Actions
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import { bindActionCreators } from 'redux';

export default function stateChangeActions($ngRedux) {
  const actionCreator = {
    stateGo,
    stateReload,
    stateTransitionTo,
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

stateChangeActions.$inject = ['$ngRedux'];
