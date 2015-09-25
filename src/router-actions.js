// Method Actions
import stateGo from './state-go';
import stateReload from './state-reload';
import stateTransitionTo from './state-transition-to';

import * as redux from 'redux';

export default function routerActions() {

  let bindActionCreators = false;
  this.bindActionCreators = (val) => {
    bindActionCreators = val;
  };

  this.$get = function ($ngRedux) {
    let actionCreator = {
      stateGo,
      stateReload,
      stateTransitionTo
    };

    return bindActionCreators ? redux.bindActionCreators(actionCreator, $ngRedux.dispatch) : actionCreator;
  };

  this.$get.$inject = ['$ngRedux'];

}


