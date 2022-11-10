import React from 'react';

function RandomDogs(props){
    return(
        <div>
            <form onSubmit={(e) => {e.preventDefault();
                                    props.setBreed(props.input.toLowerCase());
                                    props.fetchBreed();
                                    }}>
                <input value={props.input} onChange={props.handleChange}></input>
                <button>Random Image</button>
            </form>
            {props.breedResponse && <img src={props.breedResponse}></img>}
        </div>
    )
}

export default RandomDogs;