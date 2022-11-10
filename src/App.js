import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';
import DogList from './Components/DogList'
import RandomDogs from './Components/RandomDogs';



function App() {
  const [breeds, setBreeds] = useState(null);
  const [shown, setShown] = useState(false);
  const [breed, setBreed] = useState("akita");
  const [input, setInput] = useState("");
  const [breedResponse, setBreedResponse] = useState()
  const [currentView, setCurentView] = useState()

  useEffect (() => {
      axios.get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
          setBreeds(res.data);
      });
  }, [])

  async function fetchBreed(){
    const dogBreed = await axios.get(`https://dog.ceo/api/breed/${input.toLowerCase()}/images/random`)
    setBreedResponse(dogBreed.data.message)
 
  }
  console.log(breedResponse)

  function handleClick(){
    if (shown == false){
    setShown(true)
    }else{
      setShown(false)
    }
  }

  function handleChange(e){
    setInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    let newInput = input.toLowerCase();
    setBreed(newInput);
    fetchBreed();
  }
  if(!breeds){
    return <div>Loading...</div>
  };

  


  return (
    <div>
      
      <RandomDogs breedResponse={breedResponse} input={input} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <DogList breeds={breeds} handleClick={handleClick} shown={shown}/>

    </div>
  )
};

export default App;
