import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Components/checkout-item/checkout-item.components';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-blocks">
                    <span>Product</span>
                </div>
                <div className='header-blocks'>
                <span>Descripttion</span>
                </div>
                <div className='header-blocks'>
                <span>Quantity</span>
                </div>
                <div className='header-blocks'>
                <span>Price</span>
                </div>
                <div className='header-blocks'>
                <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                  *Please use the following test credit card for payments*
                 <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
