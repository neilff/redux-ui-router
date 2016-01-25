// Event Actions
import onStateChangeStart from './state-change-start';
import onStateChangeSuccess from './state-change-success';
import onStateChangeError from './state-change-error';
import onStateNotFound from './state-not-found';

import { bindActionCreators } from 'redux';

export default function stateChangeActions() {
  this.$get = ($ngRedux) => {
    const actionCreator = {
      onStateChangeStart,
      onStateChangeSuccess,
      onStateChangeError,
      onStateNotFound,
    };

    return bindActionCreators(actionCreator, $ngRedux.dispatch);
  };

  this.$get.$inject = ['$ngRedux'];
}
