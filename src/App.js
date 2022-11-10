import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';
import DogList from './Components/DogList'
import RandomDogs from './Components/RandomDogs';



function App() {
  const [breeds, setBreeds] = useState(null);
  const [shown, setShown] = useState(false);
  const [breed, setBreed] = useState();
  const [input, setInput] = useState("");
  const [breedResponse, setBreedResponse] = useState()
  const [currentView, setCurrentView] = useState("breeds")

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

  if(!breeds){
    return <div>Loading...</div>
  };


  return (
    <div className="myWebsite">
      <h1>My Dog Website</h1>
      <h3 onClick={() => {setCurrentView("breeds")}}>Breeds(click Me)</h3>
      <h3 onClick={() => {setCurrentView("random")}}>Choose Dogs(click Me)</h3>
      {currentView == "random" && <RandomDogs setBreed={setBreed} fetchBreed={fetchBreed} breedResponse={breedResponse} input={input} handleChange={handleChange}/>}
      {currentView == "breeds" && <DogList breeds={breeds} handleClick={handleClick} shown={shown}/>}

    </div>
  )
};

export default App;
