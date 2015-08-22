import 'chai';
import stateNotFound from '../state-not-found';

describe('stateNotFound', () => {
  it('should create an action with the provided params', () => {
    let action = stateNotFound('evt', 'unfoundState', 'fromState', 'fromParams');

    expect(action.payload.evt).to.equal('evt');
    expect(action.payload.unfoundState).to.equal('unfoundState');
    expect(action.payload.fromState).to.equal('fromState');
    expect(action.payload.fromParams).to.equal('fromParams');
    expect(action.type).to.equal('@@reduxUiRouter/$stateNotFound');
  });
});
