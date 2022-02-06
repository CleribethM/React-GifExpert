import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useState, useEffect, Fragment } from 'react';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/GetGifs';
//import { useState, useEffect } from 'react/cjs/react.production.min';
//useEffect hace que se pueda ejecutar cierto codigo de manera condicional 


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

  
  return (
      <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
                { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className='card-grid'>
       
            {
                images.map(img =>(
                    <GifGridItem 
                       key= {img.id}
                        { ...img } 
                    />
                ))
            }
        </div>
    </>
  )
};
  
/*CUSTOM HOOKS ES UNA FORMA DE EXTRAER LOGICA DE UN COMPONENTE DE TAL MANERA QUE PUEDA SER SENCILLO USARLA NUEVAMENTE 

PARA CREAR UN CUSTOM HOOLS se recomienda en la carpeta src debemos crear un nuevo directorio llamado hooks y 
 se usa como estandar en los archivos de esa carpeta la palabra 'use' antes del nombre del archivo eje useFetchGifs.js */