import React from 'react';

function Breeds(props){
    const keys = Object.keys(props.breeds.message)
    return(
      <ul>
          {keys.map((element, index) => {
              return(
                  <li key={index}>
                      {element}
                  </li>
              )
          })}
      </ul>
    )
}

export default Breeds;