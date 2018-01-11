'use strict';

require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _routerListener = require('../router-listener');

var _routerListener2 = _interopRequireDefault(_routerListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('routerListener', function () {
  var routerListener = void 0;
  var $transitions = {
    onStart: _sinon2.default.stub(),
    onError: _sinon2.default.stub(),
    onFinish: _sinon2.default.stub(),
    onSuccess: _sinon2.default.stub()
  };
  var ngUiStateChangeActions = {
    onStateChangeStart: _sinon2.default.stub(),
    onStateChangeError: _sinon2.default.stub(),
    onStateChangeFinish: _sinon2.default.stub(),
    onStateChangeSuccess: _sinon2.default.stub()
  };

  beforeEach(function () {
    routerListener = (0, _routerListener2.default)($transitions, ngUiStateChangeActions);
  });

  describe('Bootstrap time', function () {
    it('must subscribe listeners', function () {
      expect($transitions.onStart.calledWith({}, _sinon2.default.match.func)).to.equal(true);
      expect($transitions.onError.calledWith({}, _sinon2.default.match.func)).to.equal(true);
      expect($transitions.onFinish.calledWith({}, _sinon2.default.match.func)).to.equal(true);
      expect($transitions.onSuccess.calledWith({}, _sinon2.default.match.func)).to.equal(true);
    });
  });

  describe('listeners', function () {
    var $transition$ = void 0;
    before(function () {
      var paramsStub = _sinon2.default.stub();
      paramsStub.withArgs('to').returns('toParams');
      paramsStub.withArgs('from').returns('fromParams');
      $transition$ = {
        to: _sinon2.default.stub().returns('to'),
        params: paramsStub,
        from: _sinon2.default.stub().returns('from'),
        options: _sinon2.default.stub().returns('options')
      };
    });

    describe('onStart', function () {
      it('must call onStateChangeStart with the transition parameters', function () {
        $transitions.onStart.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeStart.calledWith('to', 'toParams', 'from', 'fromParams', 'options')).to.equal(true);
      });
    });

    describe('onError', function () {
      it('must call onStateChangeError with the transition parameters and the transition Error', function () {
        $transition$.error = _sinon2.default.stub().returns('transitionError');
        $transitions.onError.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeError.calledWith('to', 'toParams', 'from', 'fromParams', 'options', 'transitionError')).to.equal(true);
      });
    });

    describe('onFinish', function () {
      it('must call onStateChangeFinish', function () {
        $transitions.onFinish.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeFinish.called).to.equal(true);
      });
    });

    describe('onSuccess', function () {
      it('must call onStateChangeSuccess', function () {
        $transitions.onSuccess.yield($transition$);
        expect(ngUiStateChangeActions.onStateChangeSuccess.called).to.equal(true);
      });
    });
  });
});