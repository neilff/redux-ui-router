// Event Actions
import onStateChangeStart from './actions/state-change-start'
import onStateChangeSuccess from './actions/state-change-success'
import onStateChangeError from './actions/state-change-error'

import { bindActionCreators } from 'redux'

export default function stateChangeActions () {
  this.$get = ($ngRedux) => {
    const actionCreator = {
      onStateChangeStart,
      onStateChangeSuccess,
      onStateChangeError
    }

    return bindActionCreators(actionCreator, $ngRedux.dispatch)
  }

  this.$get.$inject = ['$ngRedux']
}
