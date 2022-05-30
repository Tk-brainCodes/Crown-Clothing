import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../provider/cart.provider";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttons/custom-buttons.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
