import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    //const categories = ['PrimerElemento','SegundoElemento','TercerElemento'];//se utiliza si fuera una lista que no cambiara
    const [categories, setCategories] = useState(['Batman']);
    
 /*   const handleAdd = () =>{
        //setCategories([...categories,'OtroElemento']);
                //los tres puntos se utilizan para extraer lo que esta en la variable
                //estas quedaran primero, si se desea agregar al principio
                //solo invertimos el orden

        //otra forma
        setCategories(cats => [...categories,'OtroElemento']);

    }
*/
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }    
            </ol>
        </>//ol - Lista ordenada
    );
}