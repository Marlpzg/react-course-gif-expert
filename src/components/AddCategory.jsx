import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 0) {
            onAddCategory(inputValue.trim())
            setInputValue('')
        }
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input type="text" value={inputValue} placeholder="Buscar GIFs" onChange={handleChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}