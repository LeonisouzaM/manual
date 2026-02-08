import React, { memo } from 'react';
import SimpleStepLayout from './SimpleStepLayout';
import { copy } from '../data/quizData';
import { Wrench } from 'lucide-react';

const Welcome = memo(({ onNext }) => {
    const { title, text, button } = copy.welcome;

    return (
        <SimpleStepLayout>
            <div className="logo-area">
                <div className="icon-box">
                    <Wrench size={32} />
                </div>
            </div>
            <h1 className="text-center mb-6 text-primary">{title}</h1>
            <div className="text-left mb-8 space-y-4">
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <button className="btn w-full" onClick={onNext}>
                {button}
            </button>
        </SimpleStepLayout>
    );
});

export default Welcome;
