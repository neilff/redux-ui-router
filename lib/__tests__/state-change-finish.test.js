'use strict';

require('chai');

var _stateChangeFinish = require('../state-change-finish');

var _stateChangeFinish2 = _interopRequireDefault(_stateChangeFinish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateChangeFinish', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeFinish2.default)('toState', 'toParams', 'fromState', 'fromParams');
    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.type).to.equal('@@reduxUiRouter/onFinish');
  });
});