'use strict';

require('chai');

var _stateGo = require('../state-go');

var _stateGo2 = _interopRequireDefault(_stateGo);

var _stateReload = require('../state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

var _stateTransitionTo = require('../state-transition-to');

var _stateTransitionTo2 = _interopRequireDefault(_stateTransitionTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('routerActions', function () {
  it('export the action creators', function () {
    expect(_stateGo2.default).to.be.a('function');
    expect(_stateReload2.default).to.be.a('function');
    expect(_stateTransitionTo2.default).to.be.a('function');
  });
});