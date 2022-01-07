import {createSelector} from 'reselect';

const selectCart = state => state.cart; //main cart state

export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItem //cartItem [] state
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], //perform calc on the cart.cartItem[quantity]
    cartItem => cartItem.reduce((accumulatorQuantity, cartItems) => accumulatorQuantity + cartItems.quantity,0));