import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';

const Authority = ({ onNext }) => {
    const { title, text, button } = copy.authority;

    return (
        <StepLayout>
            {/* Certificate Image */}
            <div className="mb-6 flex justify-center">
                <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '2px solid #fecaca',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    width: '100%',
                    maxWidth: '400px'
                }}>
                    <img
                        src="/authority-cert.jpg"
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            maxHeight: '300px',
                            display: 'block'
                        }}
                        width="400"
                        height="300"
                    />
                </div>
            </div>

            <h2 style={{
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: '#111827',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                {title}
            </h2>

            <div className="text-left mb-8 space-y-4">
                {text.map((paragraph, index) => (
                    <p key={index} style={{
                        color: '#6b7280',
                        lineHeight: 1.7,
                        fontSize: '0.925rem'
                    }}>{paragraph}</p>
                ))}
            </div>

            <button className="btn btn-primary w-full" style={{
                fontSize: '1.1rem',
                padding: '0.875rem 1.5rem'
            }} onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default Authority;
