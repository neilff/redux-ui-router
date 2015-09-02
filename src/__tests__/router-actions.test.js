import 'chai';
import routerActions from '../router-actions';

describe('routerActions', () => {
  it('should bind the action creators', () => {
    let $ngReduxMock = {
      dispatch: () => {}
    };

    let actions = routerActions($ngReduxMock);

    expect(actions.onStateChangeStart).to.be.a('function');
    expect(actions.onStateChangeSuccess).to.be.a('function');
    expect(actions.onStateChangeError).to.be.a('function');
    expect(actions.onStateNotFound).to.be.a('function');
    expect(actions.stateGo).to.be.a('function');
    expect(actions.stateReload).to.be.a('function');
    expect(actions.stateTransitionTo).to.be.a('function');
  });
});
