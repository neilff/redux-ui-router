// Transition Actions
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import { bindActionCreators } from 'redux';

export default function stateActivationActions($ngRedux) {
  const actionCreator = {
    stateGo,
    stateReload,
    stateTransitionTo,
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

stateActivationActions.$inject = ['$ngRedux'];
