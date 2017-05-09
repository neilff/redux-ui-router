import 'chai';

import stateGo from '../actions/state-go';
import stateReload from '../actions/state-reload';
import stateTransitionTo from '../actions/state-transition-to';

describe('routerActions', () => {
  it('export the action creators', () => {
    expect(stateGo).to.be.a('function');
    expect(stateReload).to.be.a('function');
    expect(stateTransitionTo).to.be.a('function');
  });
});
