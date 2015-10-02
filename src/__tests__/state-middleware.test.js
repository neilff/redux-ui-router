import 'chai';
import sinon from 'sinon';
import 'sinon-as-promised';
import routerMiddleware from '../router-middleware';

import {
  STATE_GO,
  STATE_RELOAD,
  STATE_TRANSITION_TO
} from '../action-types';

let $state;
let nextSpy;

describe('routerMiddleware', () => {
  beforeEach(() => {
    $state = {
      go: () => {},
      reload: () => {},
      transitionTo: () => {}
    };

    $state.go = sinon.stub().resolves('foo');
    $state.reload = sinon.stub().resolves('foo');
    $state.transitionTo = sinon.stub().resolves('foo');

    nextSpy = sinon.stub();
  });

  it('should call the next action if the router middleware doesn\'t care about it', () => {
    let middleware = routerMiddleware($state)({})(nextSpy);

    middleware({
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect($state.go.called).to.equal(false);
    expect($state.reload.called).to.equal(false);
    expect($state.transitionTo.called).to.equal(false);
  });

  it('should call $state.go if the STATE_GO action is sent', () => {
    let store = {
      dispatch: () => {},
      getState: () => {}
    };

    let middleware = routerMiddleware($state)(store)(() => console.log);

    let result = middleware({
      type: STATE_GO,
      payload: {}
    });

    result.then(() => {
      expect(nextSpy.called).to.equal(true);
      expect($state.go.called).to.equal(true);
      expect($state.reload.called).to.equal(false);
      expect($state.transitionTo.called).to.equal(false);
    });
  });

  it('should call $state.reload if the STATE_GO action is sent', () => {
    let middleware = routerMiddleware($state)({})(nextSpy);

    middleware({
      type: STATE_RELOAD,
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect($state.reload.called).to.equal(true);
    expect($state.go.called).to.equal(false);
    expect($state.transitionTo.called).to.equal(false);
  });

  it('should call $state.transitionTo if the STATE_GO action is sent', () => {
    let middleware = routerMiddleware($state)({})(nextSpy);

    middleware({
      type: STATE_TRANSITION_TO,
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect($state.transitionTo.called).to.equal(true);
    expect($state.go.called).to.equal(false);
    expect($state.reload.called).to.equal(false);
  });
});
