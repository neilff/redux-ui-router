'use strict';

require('chai');

var _stateChangeSuccess = require('../state-change-success');

var _stateChangeSuccess2 = _interopRequireDefault(_stateChangeSuccess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateChangeSuccess', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeSuccess2.default)('toState', 'toParams', 'fromState', 'fromParams');
    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.type).to.equal('@@reduxUiRouter/onSuccess');
  });
});