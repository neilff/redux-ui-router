import 'chai';
import routerActions from '../router-actions';

describe('routerActions', () => {
  it('should bind the action creators', () => {
    let $ngReduxMock = {
      dispatch: () => {}
    };

    let actions = new routerActions($ngReduxMock).$get($ngReduxMock);

    expect(actions.stateGo).to.be.a('function');
    expect(actions.stateReload).to.be.a('function');
    expect(actions.stateTransitionTo).to.be.a('function');
  });
});
