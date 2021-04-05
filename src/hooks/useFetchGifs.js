import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGif';

const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //Solo se ejecuta esta funcion cuando el componente es renderizado por primera vez
    useEffect( () => {
        getGifs( category )
            .then( ( images ) => {
                setState({
                    data: images,
                    loading: false,
                });
            })
            .catch( ( err ) => console.warn( err ))
    }, [ category ])

    return state; // { data: [], loading: true }
}

export default useFetchGifs;