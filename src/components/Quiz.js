import { useState, useCallback } from "react";

import QUESTIONS from '../question';
import Question from "./Question";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length; 
    const quizIsComplite = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    },
       []
    );

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplite) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Complited!</h2>
        </div>
    }

    
    return (
        <div id="quiz">
           <Question 
           key={activeQuestionIndex}
           index={activeQuestionIndex}
           onSelectAnswer={handleSelectAnswer} 
           onSkipAnswer={handleSkipAnswer}
            />
           </div>
    );
}
