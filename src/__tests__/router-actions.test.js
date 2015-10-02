import 'chai';

import stateGo from '../state-go';
import stateReload from '../state-reload';
import stateTransitionTo from '../state-transition-to';

describe('routerActions', () => {
  it('export the action creators', () => {
    expect(stateGo).to.be.a('function');
    expect(stateReload).to.be.a('function');
    expect(stateTransitionTo).to.be.a('function');
  });
});
