import React, { useState } from 'react';
import PropTypes from 'prop-types';



//poniendo el setcategories de esta forma, vamos a poder comunicar a los componentes!!
export const AddCategory = ({setCategories}) => {

   const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e )=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Submit hecho');

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            //para wue no pueda mandar el mismo posteo
            setInputValue('');
        }
        //las categorias nosotros no la tenemos cargada en el setcategorie por lo que pasamos a hacer lo siguiente
        //para poder tener acceso a las mismas a traves de una funcion en la cual utilizamos un call back y agregamos 
        //el a;adidor que es el '...' Y PASAMOS AHI EL NUEVO INPUTVALUE
        //setCategories(cats => [...cats, inputValue]);
    }
  return(
  <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={inputValue}
      onChange={ handleInputChange}
      />
  </form>
  )
};

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}