import React, {useState, useEffect} from 'react';
import Breeds from './Breeds';


function DogList(props){
    return(
        <div>
        <button onClick={props.handleClick}>Breeds</button>
        {props.shown && <Breeds breeds={props.breeds}/>}
        </div>
    )
}

export default DogList