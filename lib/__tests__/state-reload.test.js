'use strict';

require('chai');

var _stateReload = require('../state-reload');

var _stateReload2 = _interopRequireDefault(_stateReload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stateReload', function () {
  it('should create an action containing the state to reload', function () {
    var action = (0, _stateReload2.default)('example');
    expect(action.payload).to.equal('example');
    expect(action.type).to.equal('@@reduxUiRouter/stateReload');
  });
});