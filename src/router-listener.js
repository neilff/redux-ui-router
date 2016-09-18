/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener($transitions, ngUiStateChangeActions) {
  const prevNext = t => [t.to(), t.params('to'), t.from(), t.params('from')];

  const prevNextReduxState = t => ([getStateObject(t.to()),
                                            t.params('to'),
                                            getStateObject(t.from()),
                                            t.params('from')]);

  $transitions.onStart({}, $transition$ => ngUiStateChangeActions.onStateChangeStart(...prevNext($transition$)));
  $transitions.onError({}, $transition$ => ngUiStateChangeActions.onStateChangeError(...prevNext($transition$), $transition$.error()));
  $transitions.onSuccess({}, $transition$ => ngUiStateChangeActions.onStateChangeSuccess(...prevNextReduxState($transition$)));
}

function getStateObject(state) {
  if(!state){ return {}; }
  let { name, params, url } = state;
  return {
    name,
    params,
    url
  }
}

RouterListener.$inject = [
  '$transitions',
  'ngUiStateChangeActions',
];
