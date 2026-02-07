import React, { useState } from 'react';
import StepLayout from './StepLayout';
import { motion } from 'framer-motion';

const QuizQuestion = ({ questionData, onAnswer, currentQuestionIndex, totalQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option, index) => {
        setSelectedOption(index);
        // Add small delay to show selection
        setTimeout(() => {
            onAnswer(option);
            setSelectedOption(null);
        }, 400);
    };

    const progress = ((currentQuestionIndex) / totalQuestions) * 100;

    return (
        <>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <StepLayout>
                <span className="text-sm text-text-muted mb-4 block text-center uppercase tracking-widest">
                    Pregunta {currentQuestionIndex + 1}/{totalQuestions}
                </span>
                <h3 className="mb-8 font-bold text-xl">{questionData.question}</h3>
                <div className="space-y-3">
                    {questionData.options.map((option, index) => (
                        <button
                            key={index}
                            className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option, index)}
                            disabled={selectedOption !== null}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </StepLayout>
        </>
    );
};

export default QuizQuestion;
