import { shallow } from "enzyme"
import React from 'react'
import '@testing-library/jest-dom';

import {GifExpertApp} from '../GifExpertApp';


describe('Prueba en <GitExpertApp />', () =>{

    let wrapper = shallow(<GifExpertApp /> );
    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    });


    test('debe mostrar un <GitExpertApp />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categories />', () => {
        const categories = ['Batman', 'One Punch'];
        wrapper = shallow(<GifExpertApp dafaultCategories = {categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
})