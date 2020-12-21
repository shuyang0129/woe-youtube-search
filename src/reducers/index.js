import { combineReducers } from 'redux'

import { pageInfoReducer as pageInfo } from './pageInfoReducer'

const rootReducer = combineReducers({
  pageInfo,
})

export default pageInfo
