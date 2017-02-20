import 'chai';
import stateActivationActions from '../state-activation-actions';

describe('routerActivationActions', () => {
  it('should bind the action creators', () => {
    let $ngReduxMock = {
      dispatch: () => {}
    };

    let actions = stateActivationActions($ngReduxMock);

    expect(actions.stateGo).to.be.a('function');
    expect(actions.stateReload).to.be.a('function');
    expect(actions.stateTransitionTo).to.be.a('function');

  });
});
