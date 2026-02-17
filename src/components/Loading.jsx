import React, { useEffect, useState } from 'react';
import StepLayout from './StepLayout';

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Verificando respuestas...');

    useEffect(() => {
        const startTime = Date.now();
        const duration = 3000;

        const statusTexts = [
            { at: 0, text: 'Verificando respuestas...' },
            { at: 25, text: 'Analizando competencias...' },
            { at: 50, text: 'Calculando puntuación...' },
            { at: 75, text: 'Generando resultado...' },
            { at: 95, text: 'Casi listo...' },
        ];

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            const currentStatus = statusTexts.filter(s => newProgress >= s.at).pop();
            if (currentStatus) setStatusText(currentStatus.text);

            if (elapsed >= duration) {
                clearInterval(interval);
            }
        }, 50);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 200);

        return () => {
            clearInterval(interval);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <StepLayout>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem 1rem',
                textAlign: 'center'
            }}>
                {/* Circular progress */}
                <div style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    marginBottom: '2rem'
                }}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                        <circle
                            cx="40" cy="40" r="34"
                            fill="none"
                            stroke="url(#loadingGrad)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={`${progress * 2.13} 213.6`}
                            style={{
                                transform: 'rotate(-90deg)',
                                transformOrigin: 'center',
                                transition: 'stroke-dasharray 0.1s ease-out'
                            }}
                        />
                        <defs>
                            <linearGradient id="loadingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: '#dc2626',
                            fontFamily: 'Outfit, Inter, sans-serif'
                        }}>{Math.round(progress)}%</span>
                    </div>
                </div>

                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#111827'
                }}>
                    {statusText}
                </h2>
                <p style={{
                    color: '#9ca3af',
                    fontSize: '0.875rem',
                    marginBottom: '1.5rem'
                }}>
                    Esto puede llevar unos segundos.
                </p>

                {/* Progress bar */}
                <div style={{
                    width: '100%',
                    maxWidth: '280px',
                    height: '6px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                        transition: 'width 0.05s linear',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(220, 38, 38, 0.3)'
                    }}></div>
                </div>
            </div>
        </StepLayout>
    );
};

export default Loading;
