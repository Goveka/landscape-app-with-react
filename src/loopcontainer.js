import React from 'react';
import Container from './container';


function loopContainer({data, setData}){
    return(
        data.map(natureImages =>{
            return <Container natureImages={natureImages} setData={setData} />
           
        })
    )
}


export default loopContainer