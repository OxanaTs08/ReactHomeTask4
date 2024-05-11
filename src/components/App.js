import CitySelector from "./cities/CitySelector";
import CityCard from "./cities/CityCard";
import { useState } from "react";
import '../index.css'
import MathQuiz from "./quiz/MathQuiz";


function App() {
  
  const [city, setCity] = useState();

  function chosenCity(newCity) {
    setCity(newCity)
  }

  return (
    <div className="App">
      <div className="formCities">
     <CitySelector chosenCity={chosenCity}/>
     {city? <CityCard city={city} /> : <img className="cardImage" src='https://img.freepik.com/premium-photo/world-map-with-pointer-marks-generative-ai_220873-22388.jpg'></img>}
     </div>
     <MathQuiz />
    </div>
  );
}

export default App;

