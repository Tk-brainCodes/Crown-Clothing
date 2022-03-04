import {shallow} from 'enzyme';
import React from 'react';
import CartItem from './cart-item.component';

it("expects to render CartItem", () => {
    const mockItems = [
        {
            imageUrl: 'https://jacket.png',
            name: 'black jacket',
            price: 50,
            quantity: 1
        }
    ]
    expect(shallow(<CartItem item={mockItems}/>)).toMatchSnapshot();
})