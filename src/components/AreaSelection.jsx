import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { Settings } from 'lucide-react';

const AreaSelection = ({ onNext, setArea }) => {
    const { question, options } = copy.areaSelection;

    const handleSelect = (option) => {
        setArea(option);
        onNext();
    };

    return (
        <StepLayout>
            <div className="logo-area">
                <div className="icon-box">
                    <Settings size={32} />
                </div>
            </div>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '2rem',
                color: '#111827',
                fontSize: '1.375rem',
                lineHeight: 1.3
            }}>{question}</h2>
            <div className="space-y-3">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="quiz-option"
                        style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontWeight: 600,
                            display: 'flex'
                        }}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </StepLayout>
    );
};

export default AreaSelection;
