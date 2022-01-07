import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItem, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" >
                { 
                  cartItem.length  ?
                  cartItem.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                   : <span className='empty-message'>your cart is empty</span>
                }
            </div>
           <CustomButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}
            >
            GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
 cartItem: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
