import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItem}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" >
                {
                cartItem.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
 cartItem: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
