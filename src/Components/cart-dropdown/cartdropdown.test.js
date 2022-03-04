import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CartDropdown from './cart-dropdown.component'

it("expect to render CartComponent", (done) => {
    expect.assertions(1)
    expect(shallow(<CartDropdown/>).length).toEqual(1)
    done();
})