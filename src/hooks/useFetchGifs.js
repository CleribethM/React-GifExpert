import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect( () => {
        //aca es donde voy a traer las imagenes
        // los efectos no pueden ser async porque esperan algo sincrono 
        //seria false porque ya terminarian de cargar 
        getGifs( category )

            .then( imgs => {

                //console.log(imgs);

                setState({
                    data: imgs, 
                    loading: false
                })
           
        })
        
    }, [ category ])
/*
   setTimeout(() => {
       
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        })
        }, 3000 );*/
 
        return state
}
//return state;//state es la data y loading o sea el objeto 
