// DO NOT DELETE

import React, { useState, useEffect } from 'react';

export const DogListContainer = () => {
    const [breeds,setBreeds] = useState(0);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(state => {setBreeds(state.message);})
    },[])
    return(
        <div>
            
        </div>
    )
}