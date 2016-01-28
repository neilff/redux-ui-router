import 'chai';
import stateChangeError from '../state-change-error';

describe('stateChangeError', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeError('evt', 'toState', 'toParams', 'fromState', 'fromParams', 'err');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.err).to.equal('err');
    expect(action.payload.evt).to.equal('evt');
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeError');
  });
});
