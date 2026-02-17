
import React, { useState, Suspense, lazy } from 'react';
import Welcome from './components/Welcome';

const QuizFlow = lazy(() => import('./components/QuizFlow'));

import { questions } from './data/quizData';

function App() {
    const [step, setStep] = useState(1);
    const [area, setArea] = useState('');
    const [answers, setAnswers] = useState({});

    const nextStep = () => setStep(s => s + 1);

    const handleAnswer = (option) => {
        const currentQuestionId = questions[step - 5].id;
        setAnswers(prev => ({ ...prev, [currentQuestionId]: option }));

        if (step - 5 === questions.length - 1) {
            nextStep();
        } else {
            nextStep();
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
                    alt="El Código del Mecánico Profesional"
                    className="app-logo"
                    width="240"
                    height="50"
                />
            </header>
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                {step === 1 ? (
                    <Welcome onNext={nextStep} />
                ) : (
                    <Suspense fallback={
                        <div className="flex items-center justify-center h-40">
                            <div className="loading-spinner animate-spin"></div>
                        </div>
                    }>
                        <QuizFlow
                            step={step}
                            onNext={nextStep}
                            setArea={setArea}
                            handleAnswer={handleAnswer}
                            currentQuestionData={currentQuestionData}
                            totalQuestions={questions.length}
                        />
                    </Suspense>
                )}
            </main>

            <footer style={{
                padding: '1.5rem 1rem',
                textAlign: 'center',
                borderTop: '1px solid #f0f0f0',
                background: '#f8f9fa'
            }}>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                    © {new Date().getFullYear()} El Código del Mecánico Profesional. Todos los derechos reservados.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    opacity: 0.5,
                    fontSize: '0.7rem',
                    color: '#9ca3af'
                }}>
                    <span>Términos</span>
                    <span>Privacidad</span>
                    <span>Soporte</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
