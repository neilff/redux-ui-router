import { STATE_CHANGE_SUCCESS } from './action-types';

const INITIAL_STATE = {
  event: null,
  toState: null,
  toParams: null,
  fromState: null,
  fromParams: null
};

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { toState, toParams, fromState, fromParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function routerStateReducer(state = INITIAL_STATE, action) {
  return action.type === STATE_CHANGE_SUCCESS
    ? action.payload
    : state;
}
