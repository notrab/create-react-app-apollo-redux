import { combineReducers } from 'redux'
import client from '../apollo'
import common from './common'

const reducers = combineReducers({
  apollo: client.reducer(),
  common
})

export default reducers
