import 'chai';
import stateChangeSuccess from '../state-change-success';

describe('stateChangeSuccess', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeSuccess('toState', 'toParams', 'fromState', 'fromParams');
    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.type).to.equal('@@reduxUiRouter/onSuccess');
  });
});
