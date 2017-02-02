'use strict';

require('chai');

var _stateTransitionTo = require('../state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateTransitionTo', function () {
  it('should create an action containing the state to transition to', function () {
    var action = (0, _stateTransitionTo2.default)('example', { test: 'hello' }, { option: 'world' });
    expect(action.payload.to).to.equal('example');
    expect(action.payload.params.test).to.equal('hello');
    expect(action.payload.options.option).to.equal('world');
    expect(action.type).to.equal('@@reduxUiRouter/transitionTo');
  });

  it('should create an action when to params are undefined', function () {
    var action = (0, _stateTransitionTo2.default)('example', undefined, undefined);
    expect(action.payload.to).to.equal('example');
    expect(action.payload.params).to.equal(undefined);
    expect(action.payload.options).to.equal(undefined);
    expect(action.type).to.equal('@@reduxUiRouter/transitionTo');
  });
});