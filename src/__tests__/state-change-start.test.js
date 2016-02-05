import 'chai';
import stateChangeStart from '../state-change-start';

describe('stateChangeStart', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeStart('evt', 'toState', 'toParams', 'fromState', 'fromParams');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.evt).to.equal('evt');
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeStart');
  });
});
