import React, { useEffect, createContext, useState } from "react";

import {
  addItemToCart,
  removeItemsFromCart,
  filterItemsFromCart,
  getCartItemsCount,
  getCartTotalItems,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  getCartTotal: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [getCartTotal, setCartTotal] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => {
    setCartItems(removeItemsFromCart(cartItems, item));
  };
  const clearItemFromCart = (item) =>
    setCartItems(filterItemsFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotalItems(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        toggleHidden,
        addItem,
        removeItem,
        clearItemFromCart,
        hidden,
        cartItems,
        cartItemsCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
