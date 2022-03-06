import { setCurrentUser } from "./user/user.actions";
import { updateCollections } from "./shop/shop.action";
import { toggleCartHidden, addItem, clearItem, removeItem } from "./cart/cart.action";
import  {UserActionTypes}  from './user/user.types';
import {ShopActionTypes} from './shop/shop.types';
import {CartActionTypes} from './cart/cart.action.types';


describe("make sure current user action works", () => {
   it("should create a current user action ", () => {
     const user = "thankgod"
     const expectedAction = {
       type: UserActionTypes.SET_CURRENT_USER,
       payload: user
     }
     expect(setCurrentUser(user)).toEqual(expectedAction)
   })
});
