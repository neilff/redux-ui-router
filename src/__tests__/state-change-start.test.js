import 'chai';
import stateChangeStart from '../state-change-start';

describe('stateChangeStart', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeStart('toState', 'toParams', 'fromState', 'fromParams', 'options');

    expect(action.payload.toState).to.equal('toState');
    expect(action.payload.toParams).to.equal('toParams');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.payload.options).to.equal('options');
    expect(action.type).to.equal('@@reduxUiRouter/onStart');
  });
});
