import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import Loading from './Loading';

// Lazy load components
const SocialProof = lazy(() => import('./SocialProof'));
const AreaSelection = lazy(() => import('./AreaSelection'));
const Authority = lazy(() => import('./Authority'));
const QuizQuestion = lazy(() => import('./QuizQuestion'));
const Result = lazy(() => import('./Result'));
const Offer = lazy(() => import('./Offer'));
const Payment = lazy(() => import('./Payment'));
const Certificate = lazy(() => import('./Certificate'));

const QuizFlow = ({ step, onNext, setArea, handleAnswer, currentQuestionData, totalQuestions }) => {
    return (
        <LazyMotion features={domAnimation}>
            <Suspense fallback={<div className="flex items-center justify-center h-40"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0284c7]"></div></div>}>
                {step === 2 && <SocialProof onNext={onNext} />}
                {step === 3 && <AreaSelection onNext={onNext} setArea={setArea} />}
                {step === 4 && <Authority onNext={onNext} />}

                {step >= 5 && step < 14 && (
                    <QuizQuestion
                        questionData={currentQuestionData}
                        onAnswer={handleAnswer}
                        currentQuestionIndex={step - 5}
                        totalQuestions={totalQuestions}
                    />
                )}

                {step === 14 && <Loading onComplete={onNext} />}
                {step === 15 && <Result onNext={onNext} />}
                {step === 16 && <Offer onNext={onNext} />}
                {step === 17 && <Payment onPayment={onNext} />}
                {step === 18 && <Certificate />}
            </Suspense>
        </LazyMotion>
    );
};

export default QuizFlow;
