import { useState } from "react";

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
        <form onSubmit={onSubmit}>
            <input type="text" value={inputValue} placeholder="Buscar GIFs" onChange={handleChange}/>
        </form>
    )
}