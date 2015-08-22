import { STATE_CHANGE_SUCCESS } from './action-types';
import { Map, fromJS } from 'immutable';

const INITIAL_STATE = Map({
  currentState: null,
  currentParams: null,
  prevState: null,
  prevParams: null
});

/**
 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function routerStateReducer(state = INITIAL_STATE, action) {
  return action.type === STATE_CHANGE_SUCCESS
    ? state.mergeDeep(fromJS(action.payload))
    : state;
}
