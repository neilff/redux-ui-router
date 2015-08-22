import 'chai';
import stateGo from '../state-go';

describe('stateGo', () => {
  it('should create an action containing the state to go to', () => {
    let action = stateGo('example', { test: 'hello' }, { option: 'world' });
    expect(action.payload.to).to.equal('example');
    expect(action.payload.params.test).to.equal('hello');
    expect(action.payload.options.option).to.equal('world');
    expect(action.type).to.equal('@@reduxUiRouter/stateGo');
  });

  it('should create an action when to params are undefined', () => {
    let action = stateGo('example', undefined, undefined);
    expect(action.payload.to).to.equal('example');
    expect(action.payload.params).to.equal(undefined);
    expect(action.payload.options).to.equal(undefined);
    expect(action.type).to.equal('@@reduxUiRouter/stateGo');
  });
});
