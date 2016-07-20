import 'chai';
import stateTransitionTo from '../state-transition-to';

describe('stateTransitionTo', () => {
  it('should create an action containing the state to transition to', () => {
    let action = stateTransitionTo('example', { test: 'hello' }, { option: 'world' });
    expect(action.payload.to).to.equal('example');
    expect(action.payload.toParams.test).to.equal('hello');
    expect(action.payload.options.option).to.equal('world');
    expect(action.type).to.equal('@@reduxUiRouter/transitionTo');
  });

  it('should create an action when to params are undefined', () => {
    let action = stateTransitionTo('example', undefined, undefined);
    expect(action.payload.to).to.equal('example');
    expect(action.payload.toParams).to.equal(undefined);
    expect(action.payload.options).to.equal(undefined);
    expect(action.type).to.equal('@@reduxUiRouter/transitionTo');
  });
});
