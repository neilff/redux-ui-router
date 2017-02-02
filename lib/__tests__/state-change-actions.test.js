'use strict';

require('chai');

var _stateChangeActions = require('../state-change-actions');

var _stateChangeActions2 = _interopRequireDefault(_stateChangeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('routerActions', function () {
  it('should bind the action creators', function () {
    var $ngReduxMock = {
      dispatch: function dispatch() {}
    };

    var actions = new _stateChangeActions2.default().$get($ngReduxMock);

    expect(actions.onStateChangeStart).to.be.a('function');
    expect(actions.onStateChangeSuccess).to.be.a('function');
    expect(actions.onStateChangeError).to.be.a('function');
  });
});