import React from 'react';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-item" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;
