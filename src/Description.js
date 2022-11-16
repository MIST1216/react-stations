// DO NOT DELETE

import * as React from "react";
import { useState } from 'react';
import { DogImage } from "./DogImage";

export const Description = () => {
    const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/setter-irish/n02100877_172.jpg');
    return(
        <div className='container'>
            <p className="text">犬の画像を表示するサイトです。</p>
            <dev>
                <DogImage url = {dogUrl} />
                <button onClick={() => 
                fetch("https://dog.ceo/api/breeds/image/random")
                .then(res => {return res.json();})
                .then(newimage => {setDogUrl(newimage.message);})
                }>
                更新</button>
            </dev>
        </div>
    )
}