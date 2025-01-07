import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValues, setInputValues] = useState('');

    const onInputChange = ({target}) => {
        setInputValues(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValues.trim().length <= 1) return;
        onNewCategory(inputValues.trim());
        setInputValues('');
    }
    
    return (
        <form onSubmit={onSubmit}>
             <input type="text" placeholder="Buscar gifs" value={inputValues}
            onChange={onInputChange}/>
        </form>
    )
}
