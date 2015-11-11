
declare module "redux-ui-router" {

	/**
	 * The specific action format used within redux-ui-router
	 */
    export interface ReduxUIRouterAction {
        type: string;
        payload: any;
    }

	/**
	 * The shape of the state tree used to manage the state of redux-ui-router
	 */
    export interface ReduxUIRouterState {
        currentState: Object;
        currentParams: Object;
        prevState: Object;
        prevParams: Object;
    }

	/**
	 * The middleware function to provide to Redux's combineReducers()
	 * function.
	 */
    export function router(state: ReduxUIRouterState, action: ReduxUIRouterAction): ReduxUIRouterState;

    /**
	 * The name of the provided angular module that can be injected into
	 * the application's top-level module.
	 */
    export var ngReduxUiRouter: string;

	/**
	* This action create will trigger a $state.go in the UiRouter Middleware.
	* Accepts a payload which matches the UI Router $state.go function.
	*
	* http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
	*
	* @param  {String} to - State name
	* @param  {Object} params - (optional) Parameters to send with state
	* @param  {Object} options - (optional) Options object
	* @return {Object} Action object
	*/
    export function stateGo(to: string, params?: Object, options?: Object): ReduxUIRouterAction;

	/**
	* This action create will trigger a $state.reload in the UiRouter Middleware.
	* Accepts a payload which matches the UI Router $state.reload function.
	*
	* http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
	*
	* @param  {String} state - (optional) Root of the resolves to be re-resolved
	* @return {Object} Action object
	*/
    export function stateReload(state: any): ReduxUIRouterAction;

	/**
	* This action create will trigger a $state.transitionTo in the UiRouter Middleware.
	* Accepts a payload which matches the UI Router $state.transitionTo function.
	*
	* http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
	*
	* @param  {String} to - State name
	* @param  {Object} toParams - (optional) Parameters to send with state
	* @param  {Object} options - (optional) Options object
	* @return {Object} Action object
	*/
    export function stateTransitionTo(to: string, params?: Object, options?: Object): ReduxUIRouterAction;

	/**
	 * The default export is the name of the provided angular module
	 */
    export default ngReduxUiRouter;
}

