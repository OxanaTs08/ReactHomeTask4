import { useState } from "react";
import styles from '../../styles/Quiz.module.css'

function Answer({generateQuiz, updateScore, num1, num2}) {
    const [userAnswer, setUserAnswer] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [result, setResult] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault()
        if (userAnswer.trim() !== "") {
            checkAnswer();
        }
        else {
            setErrorMessage('Empty value not allowed')
            }
    }

    function checkAnswer() {
        const correctAnswer = num1 + num2
        if (parseInt(userAnswer) === correctAnswer) {
            updateScore(true)
            setResult(`${userAnswer}`)
            generateQuiz()
          } else {
            updateScore(false);
            setResult(`${userAnswer}`)
          }
          setUserAnswer('')
    }

    return(
        <form className={styles.cardAnswer} onSubmit={handleFormSubmit} >
        <h2>Substitute: {num1} + {num2}</h2>
        <label htmlFor="">Your Answer: {result} </label>
          <input className={styles.select} type="text" 
                 value={userAnswer} 
                 onChange={(event) => setUserAnswer(event.target.value)} />
        <button className={styles.btn}>Submit</button>
        {errorMessage && <p>{errorMessage}</p>}
    </form>
    )
}
export default Answer;