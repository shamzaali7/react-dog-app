import React from 'react';

function RandomDogs(props){
    console.log(props.input)
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input value={props.input} onChange={props.handleChange}></input>
                <button>Random Image</button>
            </form>
            {props.input != " " && <img src={props.breedResponse}></img>}
        </div>
    )
}

export default RandomDogs;