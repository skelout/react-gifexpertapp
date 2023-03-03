// TRUCAZO PARA UN COMPONENTE RECIÉN CREADO
// rafc y tab
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setValue] = useState('');
    // Detalle: Si useState lo dejo vacío, el estado inicial es undefined y cuando modifico la caja,
    // entonces le cambia de tipo, lo cual lanza un error. Si se que va a ser texto, mejor inicializarlo
    // como texto vacío para que no sea undefined inicialmente y sea un string.
    const handleInputChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        //Para prevenir el comportamiento por defecto del form. (Que no recargue la paginas)
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue,...cats]);
            setValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value= {inputValue}
                onChange={handleInputChange}
            />
            <button>Enviar</button>
        </form>
    )
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}
