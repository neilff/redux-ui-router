import 'chai';
import routerActions from '../router-actions';

let $ngReduxMock = {
  getStore: () => {
    return {
      dispatch: () => {}
    };
  }
};

describe('routerActions', () => {
  it('should bind the action creators', () => {
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
