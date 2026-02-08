
import React, { useState, Suspense, lazy } from 'react';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import Loading from './components/Loading'; // Keep Loading eager for smooth transitions

// Lazy load other components
const SocialProof = lazy(() => import('./components/SocialProof'));
const AreaSelection = lazy(() => import('./components/AreaSelection'));
const Authority = lazy(() => import('./components/Authority'));
const QuizQuestion = lazy(() => import('./components/QuizQuestion'));
const Result = lazy(() => import('./components/Result'));
const Offer = lazy(() => import('./components/Offer'));
const Payment = lazy(() => import('./components/Payment'));
const Certificate = lazy(() => import('./components/Certificate'));

import { questions } from './data/quizData';

function App() {
    const [step, setStep] = useState(1);
    const [area, setArea] = useState('');
    const [answers, setAnswers] = useState({});

    const nextStep = () => setStep(s => s + 1);

    const handleAnswer = (option) => {
        // Save answer
        const currentQuestionId = questions[step - 5].id;
        setAnswers(prev => ({ ...prev, [currentQuestionId]: option }));

        // Check if it's the last question
        if (step - 5 === questions.length - 1) {
            nextStep(); // Go to loading
        } else {
            nextStep(); // Go to next question
        }
    };

    const currentQuestionData = step >= 5 && step < 5 + questions.length
        ? questions[step - 5]
        : null;

    return (
        <div className="flex flex-col min-h-screen">
            <header className="app-header">
                <img
                    src="/logo.svg"
                    alt="Manual del Mecánico"
                    className="app-logo"
                    width="150"
                    height="40"
                />
            </header>
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <LazyMotion features={domAnimation}>
                    {step === 1 && <Welcome onNext={nextStep} />}

                    <Suspense fallback={<div className="flex items-center justify-center h-40"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0284c7]"></div></div>}>
                        {step === 2 && <SocialProof onNext={nextStep} />}
                        {step === 3 && <AreaSelection onNext={nextStep} setArea={setArea} />}
                        {step === 4 && <Authority onNext={nextStep} />}

                        {step >= 5 && step < 14 && (
                            <QuizQuestion
                                questionData={currentQuestionData}
                                onAnswer={handleAnswer}
                                currentQuestionIndex={step - 5}
                                totalQuestions={questions.length}
                            />
                        )}

                        {step === 14 && <Loading onComplete={nextStep} />}
                        {step === 15 && <Result onNext={nextStep} />}
                        {step === 16 && <Offer onNext={nextStep} />}
                        {step === 17 && <Payment onPayment={nextStep} />}
                        {step === 18 && <Certificate />}
                    </Suspense>
                </LazyMotion>
            </main>

            <footer className="p-4 text-center text-xs text-text-muted">
                <p>© {new Date().getFullYear()} Manual del Mecánico. Todos los derechos reservados.</p>
                <div className="flex justify-center gap-4 mt-2 opacity-50">
                    <span>Términos</span>
                    <span>Privacidad</span>
                    <span>Soporte</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
