// Exports the constants used for triggering transitions using Angular UI Router
//
// STATE_GO: Action for triggering a $state.go
// STATE_RELOAD: Action for triggering a $state.reload
// STATE_TRANSITION_TO: Action for triggering a $state.transitionTo
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var STATE_GO = '@@reduxUiRouter/stateGo';
exports.STATE_GO = STATE_GO;
var STATE_RELOAD = '@@reduxUiRouter/stateReload';
exports.STATE_RELOAD = STATE_RELOAD;
var STATE_TRANSITION_TO = '@@reduxUiRouter/transitionTo';

exports.STATE_TRANSITION_TO = STATE_TRANSITION_TO;
// UI Router Events
var STATE_CHANGE_START = '@@reduxUiRouter/$stateChangeStart';
exports.STATE_CHANGE_START = STATE_CHANGE_START;
var STATE_CHANGE_SUCCESS = '@@reduxUiRouter/$stateChangeSuccess';
exports.STATE_CHANGE_SUCCESS = STATE_CHANGE_SUCCESS;
var STATE_CHANGE_ERROR = '@@reduxUiRouter/$stateChangeError';
exports.STATE_CHANGE_ERROR = STATE_CHANGE_ERROR;
var STATE_NOT_FOUND = '@@reduxUiRouter/$stateNotFound';
exports.STATE_NOT_FOUND = STATE_NOT_FOUND;
var VIEW_CONTENT_LOADING = '@@reduxUiRouter/$viewContentLoading';
exports.VIEW_CONTENT_LOADING = VIEW_CONTENT_LOADING;
var VIEW_CONTENT_LOADED = '@@reduxUiRouter/$viewContentLoaded';
exports.VIEW_CONTENT_LOADED = VIEW_CONTENT_LOADED;