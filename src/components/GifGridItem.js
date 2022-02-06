import React from 'react';

export const GifGridItem = ( {id, title, url } ) => {
    //console.log( id, title, url  );
    return (
        <div className= 'card animate__animated animate__bounce'>
            <img src={ url } alt ={ title } />
            <p>{ title }</p>
        </div>
  )};
/*OTRA OPCION DE HACER LO MISMO PERO CON DESESTRUCTURACION
export const GifGridItem = ( { id, title, url } ) => {
    console.log( {id, title, url} );
  return (
    <div>
        { img.title}
        </div>
        )};

*/