'use strict';

require('chai');

var _stateChangeStart = require('../state-change-start');

var _stateChangeStart2 = _interopRequireDefault(_stateChangeStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateChangeStart', function () {
  it('should create an action with the provided params', function () {
    var action = (0, _stateChangeStart2.default)('toState', 'toParams', 'fromState', 'fromParams', 'options');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.options).to.equal('options');
    expect(action.type).to.equal('@@reduxUiRouter/onStart');
  });
});