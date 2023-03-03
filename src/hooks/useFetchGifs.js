import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

// SE PONE use... PARA SABER QUE ES UN CUSTOM HOOK
export const useFetchGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(categoria)
            .then(imgs=>{
                setState({
                    data: imgs,
                    loading: false,
                });
            });
    }, [categoria]);

    return state; // {data: [], loading: true};
}