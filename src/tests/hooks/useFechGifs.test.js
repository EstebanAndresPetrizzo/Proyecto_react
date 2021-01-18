import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks'

import {useFechGifs} from '../../hooks/useFechGifs';

describe('Pruebas en el hook useFechGifs', () => {
    test('debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook ( () => useFechGifs('Batman'));
        const {data , loading} = result.current;
        //const {data,loading} = useFechGifs ('Batman');
        //console.log(data, loading);

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        //expect(loading).toBe(true);
        expect(loading).toBeTruthy();//igual que la linea de arriba

    });

    test('debe retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook ( () => useFechGifs('Batman'));
        await waitForNextUpdate();
        const {data , loading} = result.current;

        
        expect(data.length).toEqual(5);
        expect(loading).toBeFalsy();
    })
    


})