'use strict';

require('chai');

var _routerStateReducer = require('../reducers/router-state-reducer');

describe('routerStateReducer', function () {
  it('should return the initial state', function () {
    var action = {
      type: 'null',
      payload: {}
    };

    var state = (0, _routerStateReducer.router)(undefined, action);
    expect(state.currentState).to.deep.equal({ data: {} });
    expect(state.currentParams).to.deep.equal({});
    expect(state.prevState).to.deep.equal({});
    expect(state.prevParams).to.deep.equal({});
  });

  it('should set the provided state if the $stateChangeFinish type is used', function () {
    var action = {
      type: '@@reduxUiRouter/onFinish',
      payload: {
        currentState: 'currentState',
        currentParams: 'currentParams',
        prevState: 'prevState',
        prevParams: 'prevParams'
      }
    };

    var state = (0, _routerStateReducer.router)(undefined, action);
    expect(state.currentState).to.equal('currentState');
    expect(state.currentParams).to.equal('currentParams');
    expect(state.prevState).to.equal('prevState');
    expect(state.prevParams).to.equal('prevParams');
  });
});