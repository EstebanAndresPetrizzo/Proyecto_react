import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleinputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();//Evita que se refresque la pagina
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
        }
    }
    return (
        <form onSubmit= {handleSubmit}>
            <p>{inputValue}</p>
            <input type="text"
            value={inputValue}
            onChange={handleinputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
