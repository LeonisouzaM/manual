import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
// ShieldCheck is no longer used, but I can keep it or remove it. I'll remove it since I'm using the image now.

const Authority = ({ onNext }) => {
    const { title, text, button } = copy.authority;

    return (
        <StepLayout>
            {/* Certificate Image - Placeholder for user content */}
            <div className="mb-6 flex justify-center">
                <img
                    src="/authority-cert.jpg"
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    style={{ maxHeight: '300px' }}
                    width="400"
                    height="300"
                />
            </div>

            <h2 className="text-center font-bold text-2xl mb-6 text-text-highlight uppercase tracking-wide">
                {title}
            </h2>

            <div className="text-left mb-8 space-y-4 text-text-muted leading-relaxed">
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <button className="btn w-full btn-primary font-bold text-lg py-3" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default Authority;
