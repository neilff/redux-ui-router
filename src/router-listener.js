function _getStateObject (state) {
  if (!state) return {}

  const { name, params, url, data = {} } = state

  return { name, params, url, data }
}

/**
 * Listens for events emitted from Angular UI Router and fires redux events
 *
 * @param {object} $transitions Dependency
 * @param {object} ngUiStateChangeActions Dependency
 * @return {undefined} undefined
 */
export default function RouterListener ($transitions, ngUiStateChangeActions) {
  const prevNext = t => [
    t.to(),
    t.params('to'),
    t.from(),
    t.params('from'),
    t.options()
  ]
  const prevNextReduxState = t => ([
    _getStateObject(t.to()),
    t.params('to'),
    _getStateObject(t.from()),
    t.params('from')
  ])

  $transitions.onStart({}, $transition$ => {
    return ngUiStateChangeActions
      .onStateChangeStart(...prevNext($transition$))
  })


  $transitions.onError({}, $transition$ => {
    return ngUiStateChangeActions
      .onStateChangeError(...prevNext($transition$), $transition$.error())
  })

  $transitions.onFinish({}, $transition$ => {
    return ngUiStateChangeActions
      .onStateChangeFinish(...prevNextReduxState($transition$))
  })

  $transitions.onSuccess({}, $transition$ => {
    return ngUiStateChangeActions
      .onStateChangeSuccess(...prevNext($transition$))
  })
}



RouterListener.$inject = [
  '$transitions',
  'ngUiStateChangeActions'
]
