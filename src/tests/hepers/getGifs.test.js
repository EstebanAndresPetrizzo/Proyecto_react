import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fecth', () =>{
    test('debe tener 5 elementos', async() => {
        
        const gifs = await getGifs('Batman');
        expect (gifs.length).toBe(5);

    });
    
    test('debe retornar un arreglo vacio', async() => {
        
        const gifs = await getGifs('');
        expect (gifs).toStrictEqual([]);

    });
});