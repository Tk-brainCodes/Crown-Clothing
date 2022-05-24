import { CartActionTypes } from "./cart.action.types";
import { addItemToCart, removeItemsFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (cartItems) => cartItems.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemsFromCart(state.cartItem, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItem: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
