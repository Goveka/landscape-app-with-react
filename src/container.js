import React from 'react';


function container({natureImages, setData}){

    return(
        <>
        <div id="container" >
            <h1> {natureImages.id} : {natureImages.description}</h1>
            <a href={natureImages.imgSrc}>
            <img src={natureImages.imgSrc} alt="images"/>
            </a>
            <p> Author:{natureImages.author}</p>
        </div>
        </>
    )
}

export default container