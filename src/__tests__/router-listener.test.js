import 'chai';
import sinon from 'sinon';

import RouterListener from '../router-listener';

describe('routerListener', () => {
  let routerListener;
  let $transitions = {
    onStart: sinon.stub(),
    onError: sinon.stub(),
    onSuccess: sinon.stub()
  };
  let ngUiStateChangeActions = {
    onStateChangeStart: sinon.stub(),
    onStateChangeError: sinon.stub(),
    onStateChangeSuccess: sinon.stub()
  };

  beforeEach(() => {
    routerListener = RouterListener($transitions, ngUiStateChangeActions);
  });

  describe('Bootstrap time', () => {
    it('must subscribe listeners', () => {
      expect($transitions.onStart.calledWith({}, sinon.match.func)).to.equal(true);
      expect($transitions.onError.calledWith({}, sinon.match.func)).to.equal(true);
      expect($transitions.onSuccess.calledWith({}, sinon.match.func)).to.equal(true);
    });
  });

  describe('listeners', () => {
    let $transition$;
    before(() => {
      let paramsStub = sinon.stub();
      paramsStub.withArgs('to').returns('toParams');
      paramsStub.withArgs('from').returns('fromParams');
      $transition$ = {
        to: sinon.stub().returns('to'),
        params: paramsStub,
        from: sinon.stub().returns('from'),
        options: sinon.stub().returns('options')
      };
    });

    describe('onStart', () => {
      it('must call onStateChangeStart with the transition parameters', () => {
        $transitions.onStart.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeStart.calledWith('to', 'toParams', 'from', 'fromParams', 'options')).to.equal(true);
      });
    });

    describe('onError', () => {
      it('must call onStateChangeError with the transition parameters and the transition Error', () => {
        $transition$.error = sinon.stub().returns('transitionError');
        $transitions.onError.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeError.calledWith('to', 'toParams', 'from', 'fromParams', 'options', 'transitionError')).to.equal(true);
      });
    });

    describe('onSuccess', () => {
      it('must call onStateChangeSuccess', () => {
        $transitions.onSuccess.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeSuccess.called).to.equal(true);
      });
    });
  });
});
