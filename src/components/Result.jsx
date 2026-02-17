import React, { useEffect, useState } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import confetti from 'canvas-confetti';

const Result = ({ onNext }) => {
    const { button } = copy.result;

    const [score, setScore] = useState(0);
    const targetScore = 92;
    const circumference = 440;

    useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;

        let startTimestamp = null;
        const animDuration = 1500;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / animDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setScore(Math.floor(easeProgress * targetScore));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#dc2626', '#ef4444', '#f87171']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#dc2626', '#ef4444', '#f87171']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <StepLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Score Card */}
                <div style={{
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                }}>
                    <h3 style={{
                        color: '#dc2626',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.25rem'
                    }}>TU PUNTUACIÓN:</h3>
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '0.8rem',
                        marginBottom: '1.25rem'
                    }}>Nivel excelente</p>

                    {/* Circular progress */}
                    <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                        <svg width="160" height="160" style={{ transform: 'rotate(-90deg)' }}>
                            <circle cx="80" cy="80" r="70" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                            <circle
                                cx="80" cy="80" r="70"
                                fill="none"
                                stroke="url(#scoreGrad)"
                                strokeWidth="10"
                                strokeDasharray="440"
                                strokeDashoffset={circumference - (score / 100) * circumference}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                            />
                            <defs>
                                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#dc2626" />
                                    <stop offset="100%" stopColor="#ef4444" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{
                                fontSize: '2.75rem',
                                fontWeight: 900,
                                color: '#111827',
                                fontFamily: 'Outfit, Inter, sans-serif',
                                letterSpacing: '-0.05em'
                            }}>{score}%</span>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Status */}
                    <div style={{
                        background: 'rgba(220, 38, 38, 0.04)',
                        border: '1px solid rgba(220, 38, 38, 0.15)',
                        borderRadius: '12px',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{
                            fontWeight: 700,
                            color: '#111827',
                            fontSize: '0.95rem'
                        }}>Resultado: <span style={{
                            color: '#16a34a',
                            fontWeight: 900
                        }}>APROBADO</span></span>
                    </div>

                    {/* Locked Certificate */}
                    <div style={{
                        border: '2px solid #fecaca',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        flex: 1,
                        minHeight: '220px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
                    }}>
                        <img
                            src="/certificate-locked.jpg"
                            alt="Certificado Bloqueado"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                            width="300"
                            height="220"
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div style={{
                textAlign: 'center',
                marginBottom: '2rem',
                padding: '0 0.5rem'
            }}>
                <p style={{
                    color: '#374151',
                    fontSize: '1rem',
                    lineHeight: 1.7
                }}>
                    Tu desempeño fue <span style={{
                        color: '#dc2626',
                        fontWeight: 700
                    }}>superior al promedio</span> de los profesionales evaluados.
                    Demostraste dominio de las principales áreas de la mecánica y estás apto para emitir tu <span style={{
                        color: '#dc2626',
                        fontWeight: 700
                    }}>Certificado Profesional.</span>
                </p>
            </div>

            <button className="btn btn-primary w-full" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default Result;
