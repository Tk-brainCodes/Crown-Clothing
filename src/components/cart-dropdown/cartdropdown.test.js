import {shallow} from 'enzyme';
import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import CartDropdown from './cart-dropdown.component';

it("expect to render CartComponent", () => {
    const CartMock = [{
        cartItem: [{
          name: 'jacket',
          price: 50,
          quantity: 1
        }],
        history: "/checkout",
        dispatch: dispatchEvent
    }]
    expect(shallow(<CartDropdown props={CartMock}/>)).toMatchSnapshot();
})