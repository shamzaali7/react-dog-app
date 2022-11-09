import React from 'react';

function RandomDogs(props){
    return(
        <div>
            <input onChange={props.handleChange}></input>
            <button>Random Image</button>
        </div>
    )
}

export default RandomDogs;