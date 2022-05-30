export const addItemToCart = (cartItem, cartItemToAdd) => {
  const existingCartItem = cartItem.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItems) =>
      cartItems.id === cartItemToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItem, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItems) => cartItems.id === cartItemToRemove.id
  );
  const cartQuantity = existingCartItem.quantity;
  if (cartQuantity === 1) {
    return cartItem.filter((cartItems) => cartItems.id !== cartItemToRemove.id);
  }
  return cartItem.map((cartItems) =>
    cartItems.id === cartItemToRemove.id
      ? { ...cartItems, quantity: cartItems.quantity - 1 }
      : cartItems
  );
};

export const filterItemsFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity,
    0
  );

export const getCartTotalItems = (cartItems) =>
  cartItems.reduce(
    (accumulatorQuantity, cartItems) =>
      accumulatorQuantity + cartItems.price * cartItems.quantity,
    0
  );
