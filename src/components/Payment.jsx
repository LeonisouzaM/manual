import React, { useEffect } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle2, ShieldCheck, Lock, FileText, Smartphone } from 'lucide-react';

const Payment = ({ onPayment }) => {
    const { text, subText, features, button, price, priceNote, priceDescription, cardTitle, footerText } = copy.payment;

    const handleCheckout = () => {
        if (window.fbq) {
            window.fbq('track', 'InitiateCheckout');
        }
        setTimeout(() => {
            window.location.href = 'https://pay.hotmart.com/W104315897A';
        }, 500);
    };

    return (
        <StepLayout>
            {/* Header Text */}
            <div className="text-center mb-6 px-2">
                <h2 className="text-text-main font-bold text-xl md:text-2xl leading-tight mb-2">
                    {text}
                </h2>
                <p className="text-text-muted text-sm md:text-base">
                    {subText}
                </p>
            </div>

            {/* Benefits List */}
            <div className="w-full mb-6 px-1">
                <h3 className="text-center font-bold text-text-highlight mb-4 text-base md:text-lg">
                    {cardTitle}
                </h3>
                <ul className="space-y-3 pl-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-text-main">
                            <span className="text-success mt-0.5 flex-shrink-0">
                                <CheckCircle2 size={18} className="stroke-[2.5px]" />
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Presentation */}
            <div className="text-center mb-3 bg-[#f0fdf4] p-6 rounded-xl border border-[#dcfce7] shadow-sm">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-text-muted text-xs uppercase tracking-widest font-bold mb-1">{priceNote}</span>
                    <h3 style={{ color: '#16a34a' }} className="font-black text-5xl md:text-6xl mb-2 tracking-tight">
                        {price}
                    </h3>
                    <p className="text-text-muted text-xs md:text-sm max-w-[260px] leading-relaxed mx-auto">
                        {priceDescription}
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-6 mb-8">
                <button
                    className="btn w-full btn-success py-5 text-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all uppercase tracking-wide"
                    onClick={handleCheckout}
                >
                    {button}
                </button>

                {/* Security Footer */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center text-xs text-text-muted opacity-70">
                    <div className="flex items-center gap-1.5 font-medium">
                        <Lock size={12} className="text-[#16a34a]" />
                        <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                        <FileText size={12} />
                        <span>Entrega inmediata</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                        <Smartphone size={12} />
                        <span>Soporte activo</span>
                    </div>
                </div>
            </div>

            {/* Guarantee Section */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-[#F9FAFB] px-4 py-1.5 rounded-full border border-gray-100">
                    <ShieldCheck size={14} className="text-[#16a34a]" />
                    <span className="text-[11px] font-semibold text-gray-500">Garantía total de 7 días</span>
                </div>
            </div>

            {/* Operational Tax Footer Text */}
            <p className="text-[10px] text-text-muted text-center px-4 leading-relaxed opacity-60">
                {footerText}
            </p>


        </StepLayout>
    );
};

export default Payment;
