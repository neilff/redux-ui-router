// Event Actions
import onStateChangeStart from './state-change-start';
import onStateChangeSuccess from './state-change-success';
import onStateChangeError from './state-change-error';
import onStateNotFound from './state-not-found';

import * as redux from 'redux';

export default function stateChangeActions() {

  this.$get = function ($ngRedux) {

    let actionCreator = {
      onStateChangeStart,
      onStateChangeSuccess,
      onStateChangeError,
      onStateNotFound
    };

    return redux.bindActionCreators(actionCreator, $ngRedux.dispatch);
  };

  this.$get.$inject = ['$ngRedux'];

}
