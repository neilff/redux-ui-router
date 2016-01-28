import { STATE_CHANGE_SUCCESS } from './action-types';

const INITIAL_STATE = {
  currentState: {},
  currentParams: {},
  prevState: {},
  prevParams: {},
};

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function routerStateReducer(state = INITIAL_STATE, action) {
  if (action.type !== STATE_CHANGE_SUCCESS) {
    return state;
  }
  delete action.payload.evt;
  return action.payload;
}
