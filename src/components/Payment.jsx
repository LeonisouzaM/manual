import React, { useState, useEffect } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle2, ShieldCheck, Lock, FileText, Smartphone, Clock, Users, Zap, CreditCard } from 'lucide-react';

const Payment = ({ onPayment }) => {
    const { text, subText, features, button, price, priceNote, priceDescription, cardTitle, footerText } = copy.payment;

    // Countdown timer (15 minutes)
    const [timeLeft, setTimeLeft] = useState(() => {
        const saved = sessionStorage.getItem('checkout_timer');
        if (saved) {
            const remaining = parseInt(saved) - Date.now();
            return remaining > 0 ? Math.floor(remaining / 1000) : 900;
        }
        sessionStorage.setItem('checkout_timer', String(Date.now() + 900000));
        return 900;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

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
            {/* Urgency timer */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: timeLeft < 300 ? '#fef2f2' : 'rgba(220, 38, 38, 0.04)',
                border: `1px solid ${timeLeft < 300 ? '#fecaca' : 'rgba(220, 38, 38, 0.12)'}`,
                borderRadius: '12px',
                padding: '10px 16px',
                marginBottom: '1.5rem',
                transition: 'all 0.3s ease'
            }}>
                <Clock size={16} style={{ color: '#dc2626' }} />
                <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#374151'
                }}>
                    Precio especial expira en <span style={{
                        color: '#dc2626',
                        fontFamily: 'Outfit, monospace',
                        fontSize: '0.9rem'
                    }}>{formatTime(timeLeft)}</span>
                </span>
            </div>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
                <h2 style={{
                    color: '#111827',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    lineHeight: 1.3,
                    marginBottom: '0.5rem'
                }}>
                    {text}
                </h2>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                    {subText}
                </p>
            </div>

            {/* Benefits */}
            <div style={{ width: '100%', marginBottom: '1.5rem' }}>
                <h3 style={{
                    textAlign: 'center',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '1rem',
                    fontSize: '1rem'
                }}>
                    {cardTitle}
                </h3>
                <ul style={{ listStyle: 'none', padding: '0 0.25rem', margin: 0 }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontSize: '0.875rem',
                            color: '#374151',
                            marginBottom: '0.75rem'
                        }}>
                            <span style={{
                                color: '#dc2626',
                                marginTop: '2px',
                                flexShrink: 0
                            }}>
                                <CheckCircle2 size={16} strokeWidth={2.5} />
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Card */}
            <div style={{
                textAlign: 'center',
                marginBottom: '1rem',
                background: 'rgba(22, 163, 74, 0.03)',
                padding: '1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(22, 163, 74, 0.15)'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{
                        color: '#9ca3af',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        marginBottom: '0.25rem'
                    }}>{priceNote}</span>
                    <span style={{
                        color: '#9ca3af',
                        fontSize: '0.85rem',
                        textDecoration: 'line-through',
                        marginBottom: '0.25rem'
                    }}>MX$ 497.00</span>
                    <h3 style={{
                        color: '#16a34a',
                        fontWeight: 900,
                        fontSize: '2.75rem',
                        marginBottom: '0.25rem',
                        letterSpacing: '-0.03em',
                        fontFamily: 'Outfit, Inter, sans-serif',
                        lineHeight: 1
                    }}>
                        {price}
                    </h3>
                    <span style={{
                        display: 'inline-block',
                        background: '#dcfce7',
                        color: '#16a34a',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        marginBottom: '0.5rem'
                    }}>
                        AHORRAS 63%
                    </span>
                    <p style={{
                        color: '#4b5563',
                        fontSize: '0.75rem',
                        maxWidth: '260px',
                        lineHeight: 1.5,
                        margin: '0 auto'
                    }}>
                        {priceDescription}
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <button
                    className="btn btn-primary w-full"
                    style={{
                        padding: '1.25rem 1.5rem',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                    onClick={handleCheckout}
                >
                    <Zap size={20} />
                    {button}
                </button>

                {/* Instant delivery badge */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: '#16a34a',
                    fontWeight: 600
                }}>
                    <Zap size={13} />
                    Acceso inmediato después del pago
                </div>

                {/* Security badges */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#374151'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                        <Lock size={11} style={{ color: '#dc2626' }} />
                        <span>Pago 100% seguro</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                        <CreditCard size={11} style={{ color: '#4f46e5' }} />
                        <span>Tarjeta, OXXO, SPEI</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                        <Smartphone size={11} style={{ color: '#16a34a' }} />
                        <span>Soporte por WhatsApp</span>
                    </div>
                </div>

                {/* Payment methods */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '0.75rem 0',
                    borderTop: '1px solid #f3f4f6',
                    borderBottom: '1px solid #f3f4f6'
                }}>
                    {[
                        { name: 'Visa', color: '#1a1f71', bg: '#eff3ff', border: '#bfdbfe' },
                        { name: 'Mastercard', color: '#ea580c', bg: '#fff7ed', border: '#fed7aa' },
                        { name: 'OXXO', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
                        { name: 'SPEI', color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' }
                    ].map((method) => (
                        <span key={method.name} style={{
                            fontSize: '0.65rem',
                            fontWeight: 800,
                            color: method.color,
                            background: method.bg,
                            padding: '6px 10px',
                            borderRadius: '6px',
                            border: `1px solid ${method.border}`,
                            letterSpacing: '0.02em'
                        }}>
                            {method.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Guarantee */}
            <div style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '1.25rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4L6 10V18C6 27.94 12.04 37.28 20 40C27.96 37.28 34 27.94 34 18V10L20 4Z" fill="#93c5fd" opacity="0.3" />
                        <path d="M20 4L6 10V18C6 27.94 12.04 37.28 20 40C27.96 37.28 34 27.94 34 18V10L20 4Z" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <path d="M14 20L18 24L26 16" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>
                <div>
                    <h5 style={{
                        color: '#111827',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        marginBottom: '3px',
                        lineHeight: 1.3
                    }}>Garantía de Satisfacción de 30 Días</h5>
                    <p style={{
                        color: '#6b7280',
                        fontSize: '0.75rem',
                        lineHeight: 1.6,
                        margin: 0
                    }}>
                        Si no estás completamente satisfecho con tu certificación, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
                    </p>
                </div>
            </div>

            {/* Social proof */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginBottom: '1.25rem',
                fontSize: '0.75rem',
                color: '#6b7280'
            }}>
                <Users size={14} style={{ color: '#dc2626' }} />
                <span>
                    <strong style={{ color: '#111827' }}>+2,847</strong> mecánicos ya certificados
                </span>
            </div>

            {/* Footer */}
            <p style={{
                fontSize: '0.6rem',
                color: '#d1d5db',
                textAlign: 'center',
                padding: '0 1rem',
                lineHeight: 1.5,
                opacity: 0.6
            }}>
                {footerText}
            </p>
        </StepLayout>
    );
};

export default Payment;
