import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '@/reducers'
import { PAGE_INFO } from '@constants/storage'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )
)

store.subscribe(() => {
  const state = store.getState()

  // Redux 每次更新的時候，都同步到storage中
  localStorage.setItem(PAGE_INFO, JSON.stringify(state))
})

export default store
