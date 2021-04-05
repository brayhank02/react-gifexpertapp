import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

//FC(Fincional Compounent)
const GifExperApp = () => {
    
    const [categories, setCategories] = useState(['Rick and Morty']);
    
    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr></hr>
            <ol>
                {
                    categories.map( ( category ) => (
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))         
                }
            </ol>
        </>
    );
};

export default GifExperApp;
