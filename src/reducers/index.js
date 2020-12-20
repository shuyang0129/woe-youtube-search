import { combineReducers } from 'redux'

import { countReducer } from './countReducer'
import { pageInfoReducer as pageInfo } from './pageInfoReducer'

const rootReducer = combineReducers({
  countReducer,
  pageInfo,
})

export default pageInfo
