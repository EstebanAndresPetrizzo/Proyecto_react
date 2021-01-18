import { shallow } from "enzyme"
import React from 'react'
import '@testing-library/jest-dom';

import {GifGrid} from '../../components/GifGrid'
import { useFechGifs } from "../../hooks/useFechGifs";
jest.mock("../../hooks/useFechGifs");


describe('Prueba sobre <GifGrid />', () =>{
    const category = "Batman";
//    const wrapper = shallow(<GifGrid category = {category}/>); 

 /*   beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifGrid category = {category}/>);
    });
   */ 
    test('debe mostrar un <GifGrid /> correctamente', () => {
        useFechGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category = {category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id:'ABC',
            title:'algo',
            url:'https://localhost/algo/algo.jpg'
        },
        {
            id:'1234',
            title:'algo',
            url:'https://localhost/algo/algo.jpg'
        }]
        useFechGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category = {category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
        
})