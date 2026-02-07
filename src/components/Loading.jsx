import React, { useEffect, useState } from 'react';
import StepLayout from './StepLayout';
import { Loader2 } from 'lucide-react';

const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Deterministic progress for UI
        const startTime = Date.now();
        const duration = 5000;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            if (elapsed >= duration) {
                clearInterval(interval);
            }
        }, 50);

        // Guaranteed completion trigger
        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 200); // 5s + 200ms buffer

        return () => {
            clearInterval(interval);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <StepLayout>
            <div className="flex flex-col items-center justify-center py-16 text-center">
                {/* Custom Spinner */}
                <div className="loading-spinner animate-spin"></div>

                <h2 className="text-xl md:text-2xl font-bold mb-2 text-text-main">
                    Analizando sus respuestas...
                </h2>
                <p className="text-text-muted text-sm md:text-base mb-6">
                    Esto puede llevar unos segundos.
                </p>

                {/* Progress Bar */}
                <div style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: '12px',
                    backgroundColor: 'var(--bg-card-hover)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginTop: '10px',
                    border: '1px solid var(--border-light)'
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: 'var(--primary)',
                        transition: 'width 0.05s linear',
                        boxShadow: '0 0 10px var(--primary-glow)'
                    }}></div>
                </div>

                <p className="mt-3 font-bold text-primary">
                    {Math.round(progress)}%
                </p>
            </div>
        </StepLayout>
    );
};

export default Loading;
