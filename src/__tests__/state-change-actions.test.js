import 'chai';
import stateChangeActions from '../state-change-actions';

describe('routerActions', () => {
  it('should bind the action creators', () => {
    let $ngReduxMock = {
      dispatch: () => {}
    };

    let actions = new stateChangeActions().$get($ngReduxMock);

    expect(actions.onStateChangeStart).to.be.a('function');
    expect(actions.onStateChangeSuccess).to.be.a('function');
    expect(actions.onStateChangeError).to.be.a('function');
    expect(actions.onStateNotFound).to.be.a('function');

  });
});
