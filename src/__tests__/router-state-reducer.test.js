import 'chai';
import routerStateReducer from '../router-state-reducer';

describe('routerStateReducer', () => {
  it('should return the initial state', () => {
    let action = {
      type: 'null',
      payload: {}
    };

    let state = routerStateReducer(undefined, action);
    expect(state.toJS().currentState).to.deep.equal({});
    expect(state.toJS().currentParams).to.deep.equal({});
    expect(state.toJS().prevState).to.deep.equal({});
    expect(state.toJS().prevParams).to.deep.equal({});
  });

  it('should set the provided state if the $stateChangeSuccess type is used', () => {
    let action = {
      type: '@@reduxUiRouter/$stateChangeSuccess',
      payload: {
        currentState: 'currentState',
        currentParams: 'currentParams',
        prevState: 'prevState',
        prevParams: 'prevParams'
      }
    };

    let state = routerStateReducer(undefined, action);
    expect(state.toJS().currentState).to.equal('currentState');
    expect(state.toJS().currentParams).to.equal('currentParams');
    expect(state.toJS().prevState).to.equal('prevState');
    expect(state.toJS().prevParams).to.equal('prevParams');
  });
});
