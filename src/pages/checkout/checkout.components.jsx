import React, { useContext } from "react";
import { CartContext } from "../../provider/cart.provider";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const Checkout = ({ total }) => {
  const { cartItems, getCartTotal } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocks">
          <span>Product</span>
        </div>
        <div className="header-blocks">
          <span>Descripttion</span>
        </div>
        <div className="header-blocks">
          <span>Quantity</span>
        </div>
        <div className="header-blocks">
          <span>Price</span>
        </div>
        <div className="header-blocks">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${getCartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default Checkout;
