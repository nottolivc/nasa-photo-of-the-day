import React, { useState } from 'react';
import styled from 'styled-components';

const CustomImg = styled.img`
padding: 20px;
border-radius: 8px;
&:hover {
  opacity: 0.8;
}
`

function PhotoCard(props) {

    console.log(props);
    return (
        <div>
        
        <h1>NASA Photo of the Day</h1>
        
            <h2>{props.title}</h2>

            <img src={props.url} alt="NASA Photo of the Day" />

            <p>{props.explanation}</p>
            <p>{props.date}</p>
        
        <h1>NASA Photo of the Day</h1>
        
        <div>
        <h2>{props.title}</h2>

        <img src={props.url} alt="NASA Photo of the Day" />

        <p>{props.explanation}</p>
        <p>{props.date}</p>
        </div>
    </div>  
    ); 
}

export default PhotoCard;