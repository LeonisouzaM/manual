import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle } from 'lucide-react';

const SocialProof = ({ onNext }) => {
    const { text, button } = copy.socialProof;

    return (
        <StepLayout>
            {/* Mechanic Image */}
            <div className="mb-8 flex justify-center">
                <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid #fecaca',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    maxWidth: '280px',
                    width: '100%'
                }}>
                    <img
                        src="/mechanic-cert.jpg"
                        alt="Mecánico certificado"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '220px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                        width="280"
                        height="220"
                    />
                </div>
            </div>

            <div className="text-left mb-8 space-y-4">
                {text.map((paragraph, index) => (
                    <p key={index} style={{
                        display: 'flex',
                        gap: '12px',
                        color: '#374151',
                        lineHeight: 1.6,
                        fontSize: '0.925rem'
                    }}>
                        <span style={{
                            color: '#dc2626',
                            marginTop: '3px',
                            flexShrink: 0
                        }}>
                            <CheckCircle size={18} />
                        </span>
                        <span>{paragraph}</span>
                    </p>
                ))}
            </div>
            <button className="btn btn-primary w-full" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default SocialProof;
