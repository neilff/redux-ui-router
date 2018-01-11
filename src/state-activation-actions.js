// Transition Actions
import stateGo from './actions/state-go';
import stateReload from './actions/state-reload';
import stateTransitionTo from './actions/state-transition-to';

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
