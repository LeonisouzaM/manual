import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { Users, CheckCircle } from 'lucide-react';

const SocialProof = ({ onNext }) => {
    const { text, button } = copy.socialProof;

    return (
        <StepLayout>
            {/* Mechanic Image replacing the Icon */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/mechanic-cert.png"
                    alt="Mecánico certificado"
                    className="rounded-lg shadow-lg object-cover"
                    style={{
                        width: '100%',
                        maxWidth: '280px', /* Smaller on mobile */
                        height: 'auto',
                        maxHeight: '220px'
                    }}
                />
            </div>

            <div className="text-left mb-8 space-y-4">
                {text.map((paragraph, index) => (
                    <p key={index} className="flex gap-3">
                        <span className="text-primary mt-1 flex-shrink-0"><CheckCircle size={18} /></span>
                        <span>{paragraph}</span>
                    </p>
                ))}
            </div>
            <button className="btn w-full" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default SocialProof;
