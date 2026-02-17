import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        name: "Pedro Ramirez",
        location: "Monterrey, Nuevo León",
        text: "¡Nombre, cállate! Pensé que era puro cuento, pero el certificado sí es oficial. Ya lo puse en el taller y los clientes hasta me tratan con más respeto. ¡Jálense, sí conviene!",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        evidence: "/mechanic-evidence-1.jpg"
    },
    {
        name: "Jose Luiz Garcia",
        location: "Ciudad de México, CDMX",
        text: "La neta, banda, por el precio está regalado. Solo con los manuales de regalo ya desquitas la inversión. El examen no está difícil si le sabes a la mecánica. 100% recomendado.",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        evidence: "/mechanic-evidence-2.jpg"
    },
    {
        name: "Mateo Ramirez",
        location: "Guadalajara, Jalisco",
        text: "Tengo 20 años en la chamba y nunca había tenido un papel que dijera que soy mecánico. Ahora con este certificado validado, cobro mejor mis reparaciones. Muy profesional todo.",
        photo: "/don-pedro-profile.jpg",
        evidence: "/mechanic-evidence-3.jpg"
    },
    {
        name: "Javier Hernandez",
        location: "Puebla, Puebla",
        text: "¡Está bien padre! Me llegó el PDF al toque después del pago. Lo imprimí en papel diploma y se ve de lujo en la pared. Ya varios compas del taller lo van a sacar también.",
        photo: "https://randomuser.me/api/portraits/men/86.jpg",
        evidence: "/mechanic-evidence-4.jpg"
    }
];

const Testimonials = () => {
    return (
        <div style={{ width: '100%', padding: '1.25rem 0' }}>
            <h3 style={{
                textAlign: 'center',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
                fontFamily: 'Outfit, Inter, sans-serif'
            }}>
                Lo que dice la raza <span style={{ color: '#dc2626' }}>Certificada</span> 🇲🇽
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {testimonials.map((t, index) => (
                    <div key={index} style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = '#fecaca';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = '#e5e7eb';
                            e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.03)';
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div style={{ flex: 1 }}>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    color: '#111827',
                                    lineHeight: 1.2,
                                    marginBottom: '4px'
                                }}>{t.name}</h4>
                                <p style={{
                                    fontSize: '0.7rem',
                                    color: '#9ca3af',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '6px'
                                }}>{t.location}</p>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill="#fbbf24"
                                            color="#fbbf24"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Comment */}
                        <div>
                            <p style={{
                                fontSize: '0.9rem',
                                lineHeight: 1.65,
                                color: '#6b7280',
                                fontStyle: 'italic',
                                marginBottom: 0
                            }}>
                                "{t.text}"
                            </p>
                        </div>

                        {/* Evidence */}
                        <div style={{
                            width: '100%',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid #f0f0f0',
                            marginTop: '4px'
                        }}>
                            <img
                                src={t.evidence}
                                alt={`Certificado de ${t.name}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>

                        {/* Verified Badge */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#16a34a',
                            marginTop: 'auto',
                            paddingTop: '12px',
                            borderTop: '1px solid #f3f4f6'
                        }}>
                            <CheckCircle2 size={14} color="#16a34a" strokeWidth={3} />
                            <span style={{ letterSpacing: '0.05em' }}>COMPRA VERIFICADA</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Proof Counter */}
            <div style={{
                marginTop: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#dc2626',
                background: 'rgba(220, 38, 38, 0.04)',
                border: '1px solid rgba(220, 38, 38, 0.12)',
                padding: '10px 20px',
                borderRadius: '9999px',
                width: 'fit-content',
                margin: '1.75rem auto 0'
            }}>
                <span style={{ fontSize: '1.1rem' }}>🇲🇽</span>
                <span>+2,847 mecánicos certificados en todo México</span>
            </div>
        </div>
    );
};

export default Testimonials;
