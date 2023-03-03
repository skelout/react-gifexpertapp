import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () =>{ 
    // const categorias = ['One Punch', 'Samurai X', 'Apple', 'Dragon Ball']
    const [categorias, setCategorias] = useState(['Dragon Ball'])
    
    // EXPLICACION: NO PUEDO MODIFICAR A PELO CATEGORIAS POR SER CTE
    // POR TANTO, HAY QUE USAR EL SET DEL USESTATE SIEMPRE. AHORA BIEN
    // INCLUSO CON EL SET, TAMPOCO PUEDO MODIFICAR EL ELEMENTO CATEGORIAS
    // LA SOLUCION ES CLONARLO DE ALGUNA FORMA Y MODIFICAR Y RENDERIZAR DICHO CLON
    const handleAdd = () => {
        // OPCION 1
        // setCategorias([...categorias, 'Paco'])
        // OPCION 2
        // setCategorias(cats => [...cats, 'Paco']);
        // Notar que es una funcion lambda pero como solo tiene una linea de return, no 
        // le pone ni siquiera las llaves
    };

    return (
      <>
        <h2>GifExpertApp</h2>
        {/* Puedo mandarle una funcion o cualquier valor al componente AddCategory */}
        <AddCategory setCategorias={setCategorias}/>
        <hr />
        {/* <button onClick={ handleAdd }>Agregar</button> */}
        <ol>
            { 
            categorias.map( (category, i) =>
                // Ojo, que si le doy al botón varias veces, añade un elemento nuevo con
                // el mismo key que otro que ya lo tenia. No pasa nada, porque en una 
                // app real, la key vendría de BBDD y sería única para cada elemento
                <GifGrid
                  key={ category }
                  categoria = {category}/>
            ) 
            }
        </ol>
      </>
    )
  };