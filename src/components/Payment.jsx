import React from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Payment = ({ onPayment }) => {
    const { text, features, button, price, cardTitle, footerText } = copy.payment;

    return (
        <StepLayout>
            {/* Header Text + Price Inline/Block */}
            <div className="text-center mb-8 px-2">
                <h2 className="text-text-main font-bold text-xl md:text-2xl leading-tight">
                    {text} <span className="text-success font-extrabold">{price}.</span>
                </h2>
            </div>

            {/* Information Card - White Background */}
            <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm mb-6 text-left w-full">
                <h3 className="text-center font-bold text-text-highlight mb-6 text-lg">
                    {cardTitle}
                </h3>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-text-main">
                            <span className="text-text-main mt-0.5 flex-shrink-0">
                                <CheckCircle2 size={20} className="stroke-[2px]" />
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Operational Tax Footer Text */}
            <p className="text-xs text-text-muted text-center mb-8 px-4 leading-relaxed">
                {footerText}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 mb-6">
                <button
                    className="btn w-full btn-success py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open('https://pay.hotmart.com/placeholder', '_blank')}
                >
                    {button}
                </button>
            </div>

            {/* Simulation Link (Hidden in production usually, kept for flow) */}
            <div className="text-center">
                <button
                    className="text-xs text-text-muted underline hover:text-primary"
                    onClick={onPayment}
                >
                    (Simular Pago Exitoso: Ver Certificado)
                </button>
            </div>

            {/* Security Footer */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-muted opacity-75">
                <ShieldCheck size={14} />
                <span>Pago 100% Seguro y Encriptado</span>
            </div>
        </StepLayout>
    );
};

export default Payment;
