import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({}) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //Formas de agregar categorias

    //     //Agregar a lo ultimo
    //     //setCategories( [...categories, 'Pepe Argento']);

    //     //Agregar a lo primero
    //     //setCategories( ['Pepe Argento', ...categories]);
        
    //     //Otra forma de agregar
    //     setCategories( cats => [...cats, 'Pepe Argento']);

    // }

    return (
        
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAdd }>AGREGAR</button> */}
            
            
            <ol>
                {
                    categories.map( category => 
                    (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    ); 
}


export default GifExpertApp;