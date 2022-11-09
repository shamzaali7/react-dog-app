import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import DogList from './Components/DogList'
import RandomDogs from './Components/RandomDogs';



function App() {
  const [breeds, setBreeds] = useState(null);
  const [shown, setShown] = useState(false);
  const [breed, setBreed] = useState();

  useEffect (() => {
      axios.get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
          setBreeds(res.data);
      });
  }, [])

  useEffect (() => {
    axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then(res => {
      
    });
  }, [])

  function handleClick(){
    if (shown == false){
    setShown(true)
    }else{
      setShown(false)
    }
  }

  function handleChange(e){
    setBreed(e.target.value)
  }

  if(!breeds){
    return <div>Loading...</div>
  };

  return (
    <div>
      
      <RandomDogs breed={breed} handleChange={handleChange}/>
      <DogList breeds={breeds} handleClick={handleClick} shown={shown}/>

    </div>
  )
};

export default App;
