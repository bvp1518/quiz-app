import { useState } from "react";

import QUESTIONS from '../question';
import QuestionTimer from "./QuestionTimer";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplite = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if(quizIsComplite){
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon"/>
           <h2>Quiz Complited!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
   
    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000}  onTimeout = {() => handleSelectAnswer(null)}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
