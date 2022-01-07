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
