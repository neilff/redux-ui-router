import 'chai';
import stateReload from '../state-reload';

describe('stateReload', () => {
  it('should create an action containing the state to reload', () => {
    let action = stateReload('example');
    expect(action.payload).to.equal('example');
    expect(action.type).to.equal('@@reduxUiRouter/stateReload');
  });
});
