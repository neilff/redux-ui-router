- Wondering if `toState` and `toParams` doesn't make sense in the context of the router state?
  - `toParams` implies that the router is still going to a state
  - Possibly rename to `currentParams` and `currentState`
  - `fromState` and `fromParams` would become `prevState` and `prevParams`

