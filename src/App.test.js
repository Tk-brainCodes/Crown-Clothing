import {shallow, mount, render} from 'enzyme';
import React from 'react';
import App from './App';

it("expects to render App Component", (done) => {
    expect.assertions(1);
    expect(shallow(<App/>).toEqual(1));
    done();
})
