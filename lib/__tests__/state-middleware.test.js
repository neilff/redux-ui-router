'use strict';

require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

require('sinon-as-promised');

var _routerMiddleware = require('../router-middleware');

var _routerMiddleware2 = _interopRequireDefault(_routerMiddleware);

var _actionTypes = require('../action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $state = void 0;
var nextSpy = void 0;

describe('routerMiddleware', function () {
  beforeEach(function () {
    $state = {
      go: function go() {},
      reload: function reload() {},
      transitionTo: function transitionTo() {}
    };

    $state.go = _sinon2.default.stub().resolves('foo');
    $state.reload = _sinon2.default.stub().resolves('foo');
    $state.transitionTo = _sinon2.default.stub().resolves('foo');

    nextSpy = _sinon2.default.stub().returns('foo');
  });

  it('should call the next action if the router middleware doesn\'t care about it', function () {
    var middleware = (0, _routerMiddleware2.default)($state)({})(nextSpy);

    var returnValue = middleware({
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect(returnValue).to.equal('foo');
    expect($state.go.called).to.equal(false);
    expect($state.reload.called).to.equal(false);
    expect($state.transitionTo.called).to.equal(false);
  });

  it('should call $state.go if the STATE_GO action is sent', function () {
    var store = {
      dispatch: function dispatch() {},
      getState: function getState() {}
    };

    var middleware = (0, _routerMiddleware2.default)($state)(store)(function () {
      return console.log;
    });

    var result = middleware({
      type: _actionTypes.STATE_GO,
      payload: {}
    });

    result.then(function () {
      expect(nextSpy.called).to.equal(true);
      expect($state.go.called).to.equal(true);
      expect($state.reload.called).to.equal(false);
      expect($state.transitionTo.called).to.equal(false);
    });
  });

  it('should call $state.reload if the STATE_GO action is sent', function () {
    var middleware = (0, _routerMiddleware2.default)($state)({})(nextSpy);

    middleware({
      type: _actionTypes.STATE_RELOAD,
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect($state.reload.called).to.equal(true);
    expect($state.go.called).to.equal(false);
    expect($state.transitionTo.called).to.equal(false);
  });

  it('should call $state.transitionTo if the STATE_GO action is sent', function () {
    var middleware = (0, _routerMiddleware2.default)($state)({})(nextSpy);

    middleware({
      type: _actionTypes.STATE_TRANSITION_TO,
      payload: {}
    });

    expect(nextSpy.called).to.equal(true);
    expect($state.transitionTo.called).to.equal(true);
    expect($state.go.called).to.equal(false);
    expect($state.reload.called).to.equal(false);
  });
});