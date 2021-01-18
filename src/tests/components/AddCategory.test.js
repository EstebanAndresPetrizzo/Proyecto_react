import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    //const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow (<AddCategory setCategories = {setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'batman';

        input.simulate('change',{ target: {value} });
        
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'batman';
        wrapper.find('input').simulate('change',{ target: {value} });;
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();//se hata llamado
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//se haya llamado con una funcion
        expect(wrapper.find('input').text().trim()).toBe('');

    });
    
    

});