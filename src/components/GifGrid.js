import React/*, { useState, useEffect } */from 'react'
import PropTypes from 'prop-types'

import {useFechGifs} from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFechGifs(category)
/*
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category])//el segundo argumento son las dependencias, si se deja vacío [], entonces se ejecutara una sola vez
*/
    return (
        <>
            <h3 className="animate__animated animate__zoomIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}//envia cada una de la propiedades
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.protoType = {
    category: PropTypes.string.isRequired
}