//the root reducer represents all the reducers based on what has been created

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer
})
