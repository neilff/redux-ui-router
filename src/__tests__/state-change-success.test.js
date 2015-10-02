import 'chai';
import stateChangeSuccess from '../state-change-success';

describe('stateChangeSuccess', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeSuccess();
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeSuccess');
  });
});
