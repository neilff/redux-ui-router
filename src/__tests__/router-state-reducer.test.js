import chai from 'chai';
import routerStateReducer from '../router-state-reducer';

describe('routerStateReducer', () => {
  it('should return the initial state', () => {
    let action = {
      type: 'null',
      payload: {}
    };

    let state = routerStateReducer(undefined, action);
    expect(state.currentState).to.deep.equal({});
    expect(state.currentParams).to.deep.equal({});
    expect(state.prevState).to.deep.equal({});
    expect(state.prevParams).to.deep.equal({});
  });

  it('should set the provided state if the $stateChangeSuccess type is used', () => {
    let action = {
      type: '@@reduxUiRouter/$stateChangeSuccess',
      payload: {
        evt: 'evt',
        currentState: 'currentState',
        currentParams: 'currentParams',
        prevState: 'prevState',
        prevParams: 'prevParams'
      }
    };

    let state = routerStateReducer(undefined, action);
    chai.should().not.exist(state.evt);
    expect(state.currentState).to.equal('currentState');
    expect(state.currentParams).to.equal('currentParams');
    expect(state.prevState).to.equal('prevState');
    expect(state.prevParams).to.equal('prevParams');
  });
});
