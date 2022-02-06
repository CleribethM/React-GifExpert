import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    //const categories=['Cleri es bella', 'Cleri es genial', 'Cleri es unica']

   // const [categories, setCategories] = useState(['Cleri es bella', 'Cleri es genial', 'Cleri es unica']);
   const [categories, setCategories] = useState(['Cleri es bella']);
    /*const handleAdd = () =>{
        setCategories([...categories, 'Cleri se tiene que esforzar mas'])
    }*/
    // en la parte del addcategory es donde comunicamos los componentes 
    return (

    <Fragment>

    <h2>GifExpertApp</h2>
    
    <AddCategory setCategories={setCategories}/>
    <hr />
    
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
     
    </Fragment>
  
  )
};
