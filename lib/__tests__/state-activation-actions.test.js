'use strict';

require('chai');

var _stateActivationActions = require('../state-activation-actions');

var _stateActivationActions2 = _interopRequireDefault(_stateActivationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('routerActivationActions', function () {
  it('should bind the action creators', function () {
    var $ngReduxMock = {
      dispatch: function dispatch() {}
    };

    var actions = (0, _stateActivationActions2.default)($ngReduxMock);

    expect(actions.stateGo).to.be.a('function');
    expect(actions.stateReload).to.be.a('function');
    expect(actions.stateTransitionTo).to.be.a('function');
  });
});