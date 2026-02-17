import React, { useEffect, useState, useRef } from 'react';
import StepLayout from './StepLayout';
import { copy } from '../data/quizData';
import { CheckCircle2, XCircle, ShieldCheck, Award, Clock, Users, Flame, Eye, TrendingUp, HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Zap } from 'lucide-react';
import Testimonials from './Testimonials';

const Offer = ({ onNext }) => {
    const { title, text, benefits, button, sectionHeader } = copy.offer;

    // Live viewer count
    const [viewers, setViewers] = useState(Math.floor(Math.random() * 20) + 28);
    useEffect(() => {
        const interval = setInterval(() => {
            setViewers(prev => {
                const change = Math.random() > 0.5 ? 1 : -1;
                return Math.max(18, Math.min(58, prev + change));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    // Spots remaining (decreases over time)
    const [spots, setSpots] = useState(() => {
        const saved = sessionStorage.getItem('offer_spots');
        return saved ? parseInt(saved) : 14;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setSpots(prev => {
                const next = prev > 3 && Math.random() > 0.6 ? prev - 1 : prev;
                sessionStorage.setItem('offer_spots', String(next));
                return next;
            });
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    // Sticky CTA bar
    const [showSticky, setShowSticky] = useState(false);
    const ctaRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowSticky(!entry.isIntersecting);
            },
            { threshold: 0 }
        );
        if (ctaRef.current) observer.observe(ctaRef.current);
        return () => observer.disconnect();
    }, []);



    // FAQ state
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = [
        { q: "¿Este certificado tiene validez oficial?", a: "El certificado es un reconocimiento profesional autenticado con código de verificación digital. Está diseñado para fortalecer tu imagen profesional y generar confianza en tus clientes. No sustituye certificaciones gubernamentales." },
        { q: "¿Cómo recibo mi certificado?", a: "Inmediatamente después del pago, recibirás tu certificado en formato PDF listo para imprimir. También lo recibirás por WhatsApp y e-mail para mayor comodidad." },
        { q: "¿Puedo solicitar un reembolso?", a: "¡Sí! Tienes 30 días de garantía total. Si por cualquier motivo no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas, sin complicaciones." },
        { q: "¿Cuánto tiempo dura el certificado?", a: "Tu certificado es permanente. Una vez emitido, es válido de por vida y puede ser verificado en cualquier momento a través de tu código único." },
        { q: "¿Tengo que pagar mensualidades?", a: "No, el pago es único. Con un solo pago obtienes tu certificado de por vida, acceso a las actualizaciones y soporte prioritario, sin renovaciones ni costos ocultos." },
        { q: "¿Sirve para conseguir empleo?", a: "Sí, es una excelente herramienta curricular. Demuestra tu iniciativa de validación profesional y confirma que posees los conocimientos técnicos fundamentales evaluados en nuestro estándar." },
        { q: "¿Qué pasa si pierdo el archivo?", a: "No te preocupes. Tu certificado queda respaldado en nuestra base de datos segura. Si pierdes el archivo PDF, puedes contactar a soporte y te enviaremos una copia en cualquier momento sin costo adicional." }
    ];

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
            {/* Live viewers banner */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(220, 38, 38, 0.04)',
                border: '1px solid rgba(220, 38, 38, 0.12)',
                borderRadius: '9999px',
                padding: '8px 18px',
                marginBottom: '1.5rem',
                width: 'fit-content',
                margin: '0 auto 1.5rem'
            }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#dc2626',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite'
                }} />
                <Eye size={14} style={{ color: '#dc2626' }} />
                <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#374151'
                }}>
                    <span style={{ color: '#dc2626' }}>{viewers} personas</span> viendo esta página ahora
                </span>
            </div>



            {/* Scarcity - limited spots */}
            <div style={{
                background: '#fff',
                border: '1px solid #fecaca',
                borderRadius: '12px',
                padding: '0.875rem 1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <AlertTriangle size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                    <p style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#111827',
                        margin: '0 0 6px'
                    }}>
                        Solo quedan <span style={{ color: '#dc2626' }}>{spots} lugares</span> con este precio
                    </p>
                    <div style={{
                        width: '100%',
                        height: '6px',
                        background: '#fee2e2',
                        borderRadius: '999px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: `${(spots / 14) * 100}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #dc2626, #f59e0b)',
                            borderRadius: '999px',
                            transition: 'width 1s ease'
                        }} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <h2 style={{
                textAlign: 'center',
                marginBottom: '1rem',
                lineHeight: 1.25,
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                fontWeight: 800,
                padding: '0 0.5rem',
                color: '#dc2626'
            }}>
                {title}
            </h2>

            {/* Subtitle */}
            <p style={{
                marginBottom: '2rem',
                textAlign: 'center',
                color: '#6b7280',
                padding: '0 1rem',
                lineHeight: 1.6,
                fontSize: '0.925rem'
            }}>
                {text}
            </p>

            {/* VSL Video */}
            <div style={{
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '0.5625',
                margin: '0 auto 2.5rem',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid #fecaca',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
            }}>
                <wistia-player media-id="jhnp0kvf2f" aspect="0.5625" player-color="#dc2626"></wistia-player>
            </div>

            {/* Recent purchase notification */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                marginBottom: '2rem'
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <TrendingUp size={16} color="#fff" />
                </div>
                <div>
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111827', marginBottom: '2px' }}>
                        🔥 47 mecánicos emitieron su certificado hoy
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#6b7280', margin: 0 }}>
                        Última emisión hace 3 minutos — Monterrey, NL
                    </p>
                </div>
            </div>

            {/* Benefits */}
            <div style={{ marginBottom: '3rem', padding: '0 0.25rem' }}>
                <h4 style={{
                    textAlign: 'center',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '1.5rem',
                    fontSize: '1.15rem'
                }}>
                    {sectionHeader}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            background: 'rgba(220, 38, 38, 0.03)',
                            padding: '1rem 1.125rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(220, 38, 38, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.25)';
                                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.05)';
                                e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.1)';
                                e.currentTarget.style.background = 'rgba(220, 38, 38, 0.03)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <div style={{ flexShrink: 0 }}>
                                <CheckCircle2 size={22} style={{ color: '#dc2626' }} strokeWidth={2.5} />
                            </div>
                            <span style={{
                                color: '#111827',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                lineHeight: 1.4
                            }}>{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price anchor + CTA mid-page */}
            <div ref={ctaRef} style={{
                textAlign: 'center',
                marginBottom: '3rem',
                background: 'linear-gradient(135deg, rgba(220,38,38,0.03), rgba(220,38,38,0.06))',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
                marginBottom: '3rem',
                border: '1px solid rgba(220,38,38,0.12)'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#dc2626',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    marginBottom: '1rem',
                    letterSpacing: '0.05em'
                }}>
                    <Flame size={12} />
                    OFERTA ESPECIAL
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '0.25rem', textDecoration: 'line-through' }}>
                    Precio regular: MX$ 497.00
                </p>
                <h3 style={{
                    color: '#16a34a',
                    fontWeight: 900,
                    fontSize: 'clamp(2rem, 6vw, 2.75rem)',
                    marginBottom: '0.25rem',
                    fontFamily: 'Outfit, Inter, sans-serif',
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                }}>
                    MX$ 185,60
                </h3>
                <p style={{ color: '#16a34a', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                    Ahorras MX$ 311.40 (63% de descuento)
                </p>
                <button
                    className="btn btn-primary w-full"
                    style={{
                        fontSize: '1.05rem',
                        padding: '1.1rem 1.5rem',
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        maxWidth: '360px'
                    }}
                    onClick={onNext}
                >
                    {button}
                </button>
                <p style={{
                    fontSize: '0.7rem',
                    color: '#9ca3af',
                    marginTop: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                }}>
                    <ShieldCheck size={12} style={{ color: '#16a34a' }} />
                    Garantía de 30 días · Pago 100% seguro
                </p>
            </div>

            {/* Comparison Section */}
            <div style={{
                background: '#f8f9fa',
                borderRadius: '20px',
                padding: '2.5rem 1.25rem',
                marginBottom: '3rem',
                border: '1px solid #e5e7eb'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h4 style={{
                        color: '#111827',
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        marginBottom: '0.75rem'
                    }}>
                        La diferencia es clara:
                    </h4>
                    <div style={{
                        width: '50px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                        margin: '0 auto',
                        borderRadius: '999px'
                    }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* With Certificate */}
                    <div style={{
                        background: '#ffffff',
                        border: '1.5px solid rgba(220, 38, 38, 0.25)',
                        borderRadius: '14px',
                        padding: '1.75rem',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <Award size={36} style={{ color: '#16a34a' }} />
                            </div>
                            <div style={{
                                background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                                color: '#fff',
                                fontWeight: 700,
                                padding: '4px 14px',
                                borderRadius: '999px',
                                fontSize: '11px',
                                marginBottom: '1.25rem',
                                letterSpacing: '0.05em',
                                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)'
                            }}>
                                RECOMENDADO
                            </div>
                            <h5 style={{
                                color: '#111827',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                letterSpacing: '0.08em',
                                marginBottom: '1.25rem'
                            }}>Mecánico Certificado</h5>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', textAlign: 'left' }}>
                                {['Mayor credibilidad instantánea', 'Confianza para cobrar lo justo', 'Imagen profesional y seria'].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: i < 2 ? '14px' : 0
                                    }}>
                                        <CheckCircle2 size={20} style={{ color: '#16a34a', flexShrink: 0 }} strokeWidth={2.5} />
                                        <span style={{
                                            color: '#374151',
                                            fontWeight: 700,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.4
                                        }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Without Certificate */}
                    <div style={{
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '14px',
                        padding: '1.75rem'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div style={{
                                marginBottom: '1rem',
                                padding: '10px',
                                background: '#fef2f2',
                                borderRadius: '50%'
                            }}>
                                <XCircle size={24} style={{ color: '#dc2626' }} />
                            </div>
                            <h5 style={{
                                color: '#6b7280',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                letterSpacing: '0.08em',
                                marginBottom: '1.25rem'
                            }}>Mecánico sin certificación</h5>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', textAlign: 'left' }}>
                                {['Mensaje de autoridad débil', 'Dificultad para justificar precios', 'Menor confianza del cliente'].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: i < 2 ? '14px' : 0
                                    }}>
                                        <XCircle size={16} style={{ color: '#dc2626', flexShrink: 0 }} />
                                        <span style={{
                                            color: '#9ca3af',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            lineHeight: 1.4
                                        }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Guarantee */}
            <div style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '3rem',
                maxWidth: '420px',
                margin: '0 auto 3rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
            }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4L6 10V18C6 27.94 12.04 37.28 20 40C27.96 37.28 34 27.94 34 18V10L20 4Z" fill="#93c5fd" opacity="0.3" />
                        <path d="M20 4L6 10V18C6 27.94 12.04 37.28 20 40C27.96 37.28 34 27.94 34 18V10L20 4Z" fill="none" stroke="#3b82f6" strokeWidth="2" />
                        <path d="M14 20L18 24L26 16" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </div>
                <div>
                    <h5 style={{
                        color: '#111827',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        marginBottom: '4px',
                        lineHeight: 1.3
                    }}>Garantía de Satisfacción de 30 Días</h5>
                    <p style={{
                        color: '#6b7280',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        margin: 0
                    }}>
                        Si no estás completamente satisfecho con tu certificación, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
                    </p>
                </div>
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                <h4 style={{
                    textAlign: 'center',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <HelpCircle size={22} style={{ color: '#dc2626' }} />
                    Preguntas frecuentes
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            border: '1px solid',
                            borderColor: openFaq === index ? 'rgba(220,38,38,0.2)' : '#e5e7eb',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                        }}>
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '1rem 1.125rem',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    border: 'none',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: openFaq === index ? '#dc2626' : '#111827',
                                    lineHeight: 1.4,
                                    paddingRight: '1rem',
                                    transition: 'color 0.2s ease'
                                }}>{faq.q}</span>
                                {openFaq === index
                                    ? <ChevronUp size={18} style={{ flexShrink: 0, color: '#dc2626' }} />
                                    : <ChevronDown size={18} style={{ flexShrink: 0, color: '#9ca3af' }} />
                                }
                            </button>
                            {openFaq === index && (
                                <div style={{
                                    padding: '0 1.125rem 1rem',
                                    color: '#6b7280',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.7
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div style={{
                background: 'linear-gradient(135deg, #111827, #1f2937)',
                borderRadius: '20px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem'
            }}>
                <p style={{
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                }}>
                    ¿Listo para destacar como profesional?
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                    Únete a los +2,847 mecánicos ya certificados
                </p>
                <button
                    className="btn btn-primary w-full"
                    style={{
                        fontSize: '1.1rem',
                        padding: '1.25rem 1.5rem',
                        fontWeight: 800,
                        letterSpacing: '0.05em'
                    }}
                    onClick={onNext}
                >
                    {button}
                </button>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.25rem',
                    marginTop: '1rem',
                    fontSize: '0.65rem',
                    color: '#6b7280'
                }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ShieldCheck size={11} style={{ color: '#16a34a' }} /> Garantía 30 días
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={11} /> Entrega inmediata
                    </span>
                </div>
            </div>

            {/* Sticky CTA bar */}
            {
                showSticky && (
                    <div style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'rgba(255,255,255,0.97)',
                        backdropFilter: 'blur(12px)',
                        borderTop: '1px solid #e5e7eb',
                        padding: '0.75rem 1rem',
                        zIndex: 999,
                        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
                        animation: 'slideUp 0.3s ease'
                    }}>
                        <style>{`
                        @keyframes slideUp {
                            from { transform: translateY(100%); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }
                    `}</style>
                        <div style={{
                            maxWidth: '500px',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    marginBottom: '2px'
                                }}>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        color: '#dc2626',
                                        fontFamily: 'Outfit, sans-serif'
                                    }}>
                                        OFERTA ESPECIAL
                                    </span>
                                </div>
                                <span style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 900,
                                    color: '#16a34a',
                                    fontFamily: 'Outfit, sans-serif'
                                }}>
                                    MX$ 185,60
                                </span>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{
                                    padding: '0.875rem 1.5rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 800,
                                    whiteSpace: 'nowrap',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}
                                onClick={onNext}
                            >
                                <Zap size={16} />
                                OBTENER AHORA
                            </button>
                        </div>
                    </div>
                )
            }
        </StepLayout >
    );
};

export default Offer;
