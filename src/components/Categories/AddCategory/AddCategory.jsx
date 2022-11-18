import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    
    const [inputValue, setInputValue] = useState('');
    
    const onInpustChange = ({target}) => {
        setInputValue(target.value);
    }
    
    const onSubmit = () => {

        // console.log('Hola desde submit')

        event.preventDefault();

        if (inputValue.trim().length <=1) {
            return;
        }
        
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={onSubmit} aria-label="form">
                <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInpustChange}/>
            </form>
        </>
    )
}

AddCategory.protoType={
    onNewCategory: PropTypes.func.isRequired,
}