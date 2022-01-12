export const addItemToCart = (cartItem, cartItemToAdd) => {
  const existingCartItem = cartItem.find(
    cartItems => cartItems.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItem.map(cartItems =>
      cartItems.id === cartItemToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    )
  }

  return [...cartItem, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemsFromCart = (cartItem, cartItemToRemove) => {
   const existingCartItem = cartItem.find(cartItems => cartItems.id === cartItemToRemove.id);
   const cartQuantity = existingCartItem.quantity;
   if(cartQuantity === 1){
     return cartItem.filter( cartItems => cartItems.id !== cartItemToRemove.id);
   }
   return cartItem.map(cartItems => cartItems.id === cartItemToRemove.id ? {...cartItems, quantity: cartItems.quantity - 1} : cartItems )
}