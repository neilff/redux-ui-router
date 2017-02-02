'use strict';

require('chai');

var _routerStateReducer = require('../router-state-reducer');

var _routerStateReducer2 = _interopRequireDefault(_routerStateReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('routerStateReducer', function () {
  it('should return the initial state', function () {
    var action = {
      type: 'null',
      payload: {}
    };

    var state = (0, _routerStateReducer2.default)(undefined, action);
    expect(state.currentState).to.deep.equal({});
    expect(state.currentParams).to.deep.equal({});
    expect(state.prevState).to.deep.equal({});
    expect(state.prevParams).to.deep.equal({});
  });

  it('should set the provided state if the $stateChangeSuccess type is used', function () {
    var action = {
      type: '@@reduxUiRouter/onSuccess',
      payload: {
        currentState: 'currentState',
        currentParams: 'currentParams',
        prevState: 'prevState',
        prevParams: 'prevParams'
      }
    };

    var state = (0, _routerStateReducer2.default)(undefined, action);
    expect(state.currentState).to.equal('currentState');
    expect(state.currentParams).to.equal('currentParams');
    expect(state.prevState).to.equal('prevState');
    expect(state.prevParams).to.equal('prevParams');
  });
});