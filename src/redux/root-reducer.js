//the root reducer represents all the reducers based on what has been created

import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
})
