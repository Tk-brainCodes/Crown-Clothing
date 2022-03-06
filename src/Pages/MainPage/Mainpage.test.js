import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage.component'


let wrapper;
beforeEach(() => {
    const mockUser = {
        currentUser: "thankGod"
    }
    wrapper = shallow(<MainPage {...mockUser}/>);
})

it("renders Mainpage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
})