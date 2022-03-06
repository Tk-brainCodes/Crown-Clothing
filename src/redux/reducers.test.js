import  {UserActionTypes}  from './user/user.types';
import {ShopActionTypes} from './shop/shop.types';
import {CartActionTypes} from './cart/cart.action.types';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
// import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import SHOP_DATA from './shop/shop.data';
// import { addItemToCart, removeItemsFromCart } from "./cart/cart.utils";



describe('set current user', () => {
    const INITIAL_STATE = {
        currentUser: null
    }
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE)
    })
    it('should handle UserActionTypes.SET_CURRENT_USER', () => {
        expect(userReducer(INITIAL_STATE, {
            type: UserActionTypes.SET_CURRENT_USER,
            payload: 'user'
        })).toEqual({
            currentUser: 'user'
        })
    })
});

describe('return shop data', () => {
    const INITIAL_STATE = {
        collections: SHOP_DATA
    }
    it("should dispaly shop data collections", () => {
        expect(shopReducer(INITIAL_STATE, {
            type: ShopActionTypes.UPDATE_COLLECTIONS,
            payload: SHOP_DATA
        })).toEqual(INITIAL_STATE);
    })
});

describe("make sure it toggles", () => {
    const INITIAL_STATE = {
        hidden: true
    }
   it("it should add items to cart", () => {
       expect(cartReducer(INITIAL_STATE, {
           type: CartActionTypes.TOGGLE_CART_HIDDEN,
           payload: INITIAL_STATE.hidden
       })).toEqual({
           hidden: false
       });
   })
})

// describe("add items to cart", () => {
//     const INITIAL_STATE = {
//         cartItem: []
//     }
//     it("should add the items", () => {
//         expect(cartReducer(INITIAL_STATE, {
//             type: CartActionTypes.ADD_ITEM,
//             payload: INITIAL_STATE.cartItem.length
//         })).toBeGreaterThan(1)
//     })
// })