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
            <h2 className="text-center mb-8">{question}</h2>
            <div className="space-y-3">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="quiz-option text-center justify-center font-bold"
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
