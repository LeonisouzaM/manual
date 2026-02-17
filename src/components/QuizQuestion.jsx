import React, { useState } from 'react';
import StepLayout from './StepLayout';

const QuizQuestion = ({ questionData, onAnswer, currentQuestionIndex, totalQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option, index) => {
        setSelectedOption(index);
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
                {/* Question counter badge */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 16px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(220, 38, 38, 0.06)',
                        border: '1px solid rgba(220, 38, 38, 0.15)',
                        color: '#dc2626',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        Pregunta {currentQuestionIndex + 1}/{totalQuestions}
                    </span>
                </div>

                <h3 style={{
                    marginBottom: '2rem',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    lineHeight: 1.4,
                    color: '#111827',
                    textAlign: 'center'
                }}>{questionData.question}</h3>

                <div className="space-y-3">
                    {questionData.options.map((option, index) => (
                        <button
                            key={index}
                            className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option, index)}
                            disabled={selectedOption !== null}
                        >
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px',
                                height: '28px',
                                borderRadius: '8px',
                                backgroundColor: selectedOption === index ? 'rgba(255,255,255,0.2)' : 'rgba(220, 38, 38, 0.06)',
                                border: selectedOption === index ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(220, 38, 38, 0.15)',
                                color: selectedOption === index ? '#fff' : '#dc2626',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                marginRight: '12px',
                                flexShrink: 0,
                                transition: 'all 0.2s ease'
                            }}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            {option.text}
                        </button>
                    ))}
                </div>
            </StepLayout>
        </>
    );
};

export default QuizQuestion;
