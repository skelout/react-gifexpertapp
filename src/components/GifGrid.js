// ACORDARSE DEL TRUCO: rafc + TAB
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// IMPORTANTÍSIMO Y COMO INTRODUCCION AL USE EFFECT
// SI NO LO UTILIZARA EN ESTE EJEMPLO, VER QUE EN LA DECLARACIÓN DEL COMPONENTE ESTOY HACIENDO LA LLAMADA A GETGIFS
// POR LO TANTO, CADA VEZ QUE PULSE UN BOTON CUALQUIERA DENTRO DEL COMPONENTE, ESTE SE TENDRÁ QUE ACTUALIZAR.
// AL ACTUALIZAR, SE EJECUTA DE NUEVO TODO LO QUE HAY EN EL COMPONENTE, INCLUYENDO EL getGifs(); Y POR LO TANTO
// VUELVE A HACER LA LLAMADA, A TRAERSE LOS GIFS, ETC. MUY INEFICIENTE.
export const GifGrid = ({categoria}) => {

    // // AL UTILIZAR ESTO, YA SOLO EJECUTA GETGIFS LA PRIMERA VEZ QUE RENDERIZA
    const {data: images, loading} = useFetchGifs(categoria);
    // useEffect(() => {
    //     // ASI
    //     // getGifs(categoria)
    //     // .then(imgs => setImages(imgs));
    //     // O ASI
    //     getGifs( categoria )
    //     .then( setImages );
    // }, [ categoria ]); 

    return (
        <>
        <h3 className='animate__animated animate__flipInY'> {categoria} </h3>
        {/* Se puede hacer con ternario */}
        {/* {loading ? <p>Loading</p> : null} */}
        {/* Pero mas elegante asi */}
        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>
            {
                images.map(img => (
                    <GifGridItem 
                        key = {img.id}
                        // img={img} />
                        // OTRA FORMA
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}
