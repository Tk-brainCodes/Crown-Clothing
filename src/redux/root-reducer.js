//the root reducer represents all the reducers based on what has been created

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
key: 'root',
storage,
whitelist: ['cart'] //what we want to persist 
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer);
