import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Prueba en <GifGridItem />', () => {
  
    let wrapper = shallow(<GifGridItem />);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem />);
    });

    test('Debe mostrar <GifGridItem /> correctamente', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener animate__zoomIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__zoomIn')).toBe(true);
    });
    
});