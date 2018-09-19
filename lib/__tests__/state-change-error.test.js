'use strict';

require('chai');

var _stateChangeError = require('../state-change-error');

var _stateChangeError2 = _interopRequireDefault(_stateChangeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateChangeError', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeError2.default)('toState', 'toParams', 'fromState', 'fromParams', 'err');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.err).to.equal('err');
    expect(action.type).to.equal('@@reduxUiRouter/onError');
  });
});