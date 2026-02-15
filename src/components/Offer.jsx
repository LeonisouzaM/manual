import React, { useEffect } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle2, XCircle, ShieldCheck, ThumbsUp, Award, Clock } from 'lucide-react';
import Testimonials from './Testimonials';

const Offer = ({ onNext }) => {
    const { title, text, benefits, button, sectionHeader } = copy.offer;

    useEffect(() => {
        if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
            const script = document.createElement('script');
            script.src = "https://fast.wistia.com/player.js";
            script.async = true;
            document.body.appendChild(script);
        }

        if (!document.querySelector('script[src*="jhnp0kvf2f.js"]')) {
            const script = document.createElement('script');
            script.src = "https://fast.wistia.com/embed/jhnp0kvf2f.js";
            script.async = true;
            script.type = "module";
            document.body.appendChild(script);
        }
    }, []);

    return (
        <StepLayout>
            {/* Main Title */}
            <h2 className="text-center mb-4 leading-tight text-primary font-bold text-2xl md:text-3xl px-2">
                {title}
            </h2>

            {/* Subtitle */}
            <p className="mb-8 text-center text-text-muted px-4 leading-relaxed text-sm md:text-base">
                {text}
            </p>

            {/* VSL Video */}
            <div className="w-full max-w-[320px] md:max-w-[360px] mx-auto mb-10 rounded-xl overflow-hidden shadow-lg border-2 border-[#16a34a]">
                <wistia-player media-id="jhnp0kvf2f" aspect="0.5625"></wistia-player>
            </div>

            {/* Emotional Benefits Section */}
            <div className="mb-16 px-2">
                <h4 className="text-center font-bold text-text-highlight mb-8 text-xl">
                    {sectionHeader}
                </h4>
                <div className="flex flex-col gap-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-border-light shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0">
                                <CheckCircle2 size={24} style={{ color: '#16A34A' }} className="stroke-[3px]" />
                            </div>
                            <span className="text-text-main font-semibold text-base leading-tight">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Section (Before/After) */}
            <div style={{ backgroundColor: '#F8FAFC', paddingTop: '64px', paddingBottom: '64px' }} className="w-full -mx-4 mb-16 rounded-3xl px-4">
                <div className="text-center mb-16 relative">
                    <h4 style={{ color: '#111827', fontWeight: 700 }} className="text-2xl mb-2">
                        La diferencia es clara:
                    </h4>
                    <div style={{ width: '60px', height: '3px', backgroundColor: '#16A34A', margin: '12px auto 0 auto' }} className="rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 max-w-4xl mx-auto items-stretch">

                    {/* Right: With Cert (Superior/Recommended) - FIRST IN HTML FOR MOBILE */}
                    <div
                        style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #16A34A', borderRadius: '14px', boxShadow: '0 8px 20px rgba(0,0,0,0.05)', padding: '32px' }}
                        className="relative flex-1 flex flex-col justify-between items-center text-center transition-all duration-300 hover:scale-[1.02] order-1 md:order-2"
                    >
                        <div className="flex flex-col items-center w-full">
                            <div className="mb-2 p-1">
                                <Award size={40} style={{ color: '#16A34A' }} />
                            </div>

                            <div style={{ backgroundColor: '#16A34A', color: '#FFFFFF', fontWeight: 600, padding: '4px 12px', borderRadius: '999px', fontSize: '12px' }} className="mb-8 tracking-wide shadow-sm">
                                RECOMENDADO
                            </div>

                            <h5 style={{ color: '#16A34A' }} className="font-bold uppercase text-sm tracking-wider mb-8">Mecánico Certificado</h5>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="w-full text-left">
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <CheckCircle2 size={24} style={{ color: '#16A34A' }} className="stroke-[3px]" />
                                    </div>
                                    <span style={{ color: '#16A34A', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Mayor credibilidad instantánea</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <CheckCircle2 size={24} style={{ color: '#16A34A' }} className="stroke-[3px]" />
                                    </div>
                                    <span style={{ color: '#16A34A', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Confianza para cobrar lo justo</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <CheckCircle2 size={24} style={{ color: '#16A34A' }} className="stroke-[3px]" />
                                    </div>
                                    <span style={{ color: '#16A34A', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Imagen profesional y seria</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Left: Without Cert (Neutral/Inferior) */}
                    <div
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '14px', boxShadow: 'none', padding: '32px' }}
                        className="flex-1 flex flex-col justify-between items-center text-center transition-colors hover:bg-gray-50 order-2 md:order-1"
                    >
                        <div className="flex flex-col items-center w-full">
                            <div className="mb-6 p-3 bg-red-50 rounded-full">
                                <XCircle size={28} style={{ color: '#DC2626' }} />
                            </div>
                            <h5 style={{ color: '#374151' }} className="font-bold uppercase text-sm tracking-wider mb-8">Mecánico sin certificación</h5>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="w-full text-left">
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '26px', height: '26px' }}>
                                        <XCircle size={18} style={{ color: '#DC2626' }} />
                                    </div>
                                    <span style={{ color: '#374151', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: '500' }}>Mensaje de autoridad débil</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '26px', height: '26px' }}>
                                        <XCircle size={18} style={{ color: '#DC2626' }} />
                                    </div>
                                    <span style={{ color: '#374151', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: '500' }}>Dificultad para justificar precios</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0' }}>
                                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '26px', height: '26px' }}>
                                        <XCircle size={18} style={{ color: '#DC2626' }} />
                                    </div>
                                    <span style={{ color: '#374151', lineHeight: '1.4', margin: 0, fontSize: '14px', fontWeight: '500' }}>Menor confianza del cliente</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Guarantee Section */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '14px', padding: '20px', border: '1px solid #D1FAE5' }} className="mb-16 shadow-sm text-center max-w-lg mx-auto">
                <div style={{ borderColor: '#DCFCE7' }} className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border">
                    <ShieldCheck size={24} style={{ color: '#16A34A' }} />
                </div>
                <h5 style={{ color: '#065F46' }} className="font-bold text-lg mb-2">Garantía de satisfacción de 7 días</h5>
                <p style={{ color: '#374151' }} className="text-sm leading-relaxed">
                    Si no estás satisfecho con tu certificado, puedes solicitar reembolso total dentro de 7 días. <br /><strong>Sin preguntas.</strong>
                </p>
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Button */}
            <div className="mt-8 mb-6">
                <button
                    className="btn w-full btn-primary font-bold text-xl py-6 uppercase tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    onClick={onNext}
                >
                    {button}
                </button>
            </div>

            <p className="text-center text-sm text-text-muted opacity-80 mb-10 flex items-center justify-center gap-2">
                <Clock size={16} />
                <span>Oferta por tiempo limitado</span>
            </p>
        </StepLayout>
    );
};

export default Offer;
