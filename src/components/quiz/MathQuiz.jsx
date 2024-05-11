import Answer from "./Answer";
import { useState } from "react";

function MathQuiz() {
    
    const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
    const [score, setScore] = useState(0)
    const [wrongResult, setwrongResult] = useState("");
    const [image, setImage] = useState(null);

    

    function generateQuiz() { 
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
        
    }

    function updateScore(isCorrect) {
        if (isCorrect) {
            setScore(score +1 )
            setImage('https://t4.ftcdn.net/jpg/03/80/89/21/360_F_380892154_Agxw6o2MpgccgwSKJRDB1lGTHC6BXx9Y.jpg')
            setwrongResult('')
        }
        else {
            setScore(score -1)
            setwrongResult('Wrong Answer. Try again')
            setImage(null)
        }
        

    }
   
    return(
        <div className="formCities">
            <h2>Your Score: {score}</h2>
            <Answer generateQuiz={generateQuiz} num1={num1} num2={num2} updateScore={updateScore}/>
            {wrongResult}
            {image &&<img className="cardImage" src={image} alt="" />}
        </div>
    )
}
export default MathQuiz;