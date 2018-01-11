import { STATE_CHANGE_FINISH } from '../constants/action-types'

const INITIAL_STATE = {
  currentState: {
  	data: {}
  },
  currentParams: {},
  prevState: {},
  prevParams: {}
}

/**
 * Factory for creating the root reducer with a configurable initial
 * state
 * @param {Object} initialState
 */
export function routerStateReducerFactory (initialState, reducer) {
	/**
	 * Reducer of STATE_CHANGE_SUCCESS actions. Returns a state object
	 * with { currentState, currentParams, prevState, prevParams }
	 *
	 * @param  {Object} state - Previous state
	 * @param  {Object} action - Action
	 * @return {Object} New state
	 */
	return (state = initialState, action) => {
	  if (action.type !== STATE_CHANGE_FINISH) {
	    return state
	  }
	  return action.payload
	}
}

export const router = routerStateReducerFactory(INITIAL_STATE)
