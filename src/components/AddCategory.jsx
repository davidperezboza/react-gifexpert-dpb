import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={onSubmit} aria-label="form">
             <input type="text" placeholder="Buscar gifs" value={inputValues}
            onChange={onInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
