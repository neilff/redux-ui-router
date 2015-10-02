import 'chai';
import routerActions from '../router-actions';

describe('routerActions', () => {
  it('export the action creators', () => {
    expect(routerActions.stateGo).to.be.a('function');
    expect(routerActions.stateReload).to.be.a('function');
    expect(routerActions.stateTransitionTo).to.be.a('function');
  });
});
