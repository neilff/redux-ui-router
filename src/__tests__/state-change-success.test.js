import 'chai';
import stateChangeSuccess from '../state-change-success';

describe('stateChangeSuccess', () => {
  it('should create an action with the provided params', () => {
    let action = stateChangeSuccess('evt', 'currentState', 'currentParams', 'prevState', 'prevParams');

    expect(action.payload.currentState).to.equal('currentState');
    expect(action.payload.currentParams).to.equal('currentParams');
    expect(action.payload.prevState).to.equal('prevState');
    expect(action.payload.prevParams).to.equal('prevParams');
    expect(action.type).to.equal('@@reduxUiRouter/$stateChangeSuccess');
  });
});
