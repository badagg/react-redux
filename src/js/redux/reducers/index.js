import { combineReducers } from 'redux'
import coordinate from './coordinate'
import listData from './listData'

const reducer = combineReducers({
  coordinate,
  listData,
})

export default reducer