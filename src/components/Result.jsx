import React, { useEffect, useState } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

const Result = ({ onNext }) => {
    const { button } = copy.result;

    const [score, setScore] = useState(0);
    const targetScore = 92;
    const circumference = 440; // 2 * PI * 70 approx

    useEffect(() => {
        // Confetti logic
        const duration = 3000;
        const end = Date.now() + duration;

        // Progress Bar Animation
        let startTimestamp = null;
        const animDuration = 1500; // 1.5 seconds for fast load

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / animDuration, 1);

            // Ease out quart
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
                colors: ['#16a34a', '#10b981']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#16a34a', '#10b981']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
        frame();
    }, []);

    // Track Lead Event (Quiz Completed)
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <StepLayout>
            {/* Grid Layout for Score and Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                {/* Left Column: Score */}
                <div className="border border-border-light rounded-2xl p-6 flex flex-col items-center justify-center bg-white shadow-sm">
                    <h3 className="text-[#3b82f6] font-bold text-sm uppercase tracking-wide mb-1">TU PUNTUACIÓN:</h3>
                    <p className="text-text-muted text-sm mb-6">Nivel excelente</p>

                    {/* Circular Progress Bar SVG */}
                    <div className="relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                className="stroke-gray-100 fill-none"
                                strokeWidth="10"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                className="stroke-[#3b82f6] fill-none"
                                strokeWidth="10"
                                strokeDasharray="440"
                                strokeDashoffset={circumference - (score / 100) * circumference}
                                strokeLinecap="round"
                                style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center pt-1">
                            <span className="text-5xl font-black text-[#1e293b] leading-none tracking-tighter">{score}%</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Status & Certificate Lock */}
                <div className="flex flex-col gap-4">
                    {/* Status Box */}
                    <div className="border border-border-light rounded-xl p-4 flex items-center justify-center bg-white shadow-sm">
                        <span className="font-bold text-text-main">Resultado: <span className="text-success font-black">APROBADO</span></span>
                    </div>

                    {/* Locked Certificate Box */}
                    <div className="border border-[#16a34a] rounded-xl flex items-center justify-center relative overflow-hidden h-full min-h-[220px] bg-white p-0">
                        <img
                            src="/certificate-locked.jpg"
                            alt="Certificado Bloqueado"
                            className="w-full h-full object-cover rounded-xl"
                            width="300"
                            height="220"
                        />
                    </div>
                </div>
            </div>

            {/* Description Text */}
            <div className="text-center mb-8 px-2">
                <p className="text-text-main text-lg leading-relaxed">
                    Tu desempeño fue <span className="text-[#16a34a] font-bold">superior al promedio</span> de los profesionales evaluados.
                    Demostraste dominio de las principales áreas de la mecánica y estás apto para emitir tu <span className="text-[#16a34a] font-bold">Certificado Profesional.</span>
                </p>
            </div>

            <button className="btn w-full btn-primary bg-[#16a34a] hover:bg-[#15803d]" onClick={onNext}>
                {button}
            </button>
        </StepLayout>
    );
};

export default Result;
