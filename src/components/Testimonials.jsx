import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        name: "Juan Carlos \"El Güero\"",
        location: "Monterrey, Nuevo León",
        text: "¡Nombre, cállate! Pensé que era puro cuento, pero el certificado sí es oficial. Ya lo puse en el taller y los clientes hasta me tratan con más respeto. ¡Jálense, sí conviene!",
        photo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Luis \"Chuy\" González",
        location: "Ciudad de México, CDMX",
        text: "La neta, banda, por el precio está regalado. Solo con los manuales de regalo ya desquitas la inversión. El examen no está difícil si le sabes a la mecánica. 100% recomendado.",
        photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Don Pedro Ramírez",
        location: "Guadalajara, Jalisco",
        text: "Tengo 20 años en la chamba y nunca había tenido un papel que dijera que soy mecánico. Ahora con este certificado validado, cobro mejor mis reparaciones. Muy profesional todo.",
        photo: "https://randomuser.me/api/portraits/men/64.jpg"
    },
    {
        name: "Mateo de la Cruz",
        location: "Puebla, Puebla",
        text: "¡Está bien padre! Me llegó el PDF al toque después del pago. Lo imprimí en papel diploma y se ve de lujo en la pared. Ya varios compas del taller lo van a sacar también.",
        photo: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const Testimonials = () => {
    const cardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '20px'
    };

    const nameStyle = {
        fontSize: '16px',
        fontWeight: '700',
        color: '#111827',
        lineHeight: '1.2'
    };

    const locationStyle = {
        fontSize: '13px',
        color: '#6b7280',
        marginTop: '4px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    const textStyle = {
        fontSize: '15px',
        lineHeight: '1.6',
        color: '#374151',
        fontStyle: 'italic'
    };

    const badgeStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        fontWeight: '700',
        color: '#15803d',
        marginTop: 'auto',
        paddingTop: '16px',
        borderTop: '1px solid #f3f4f6'
    };

    return (
        <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '20px 0' }}>
            <h3 style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '24px',
                lineHeight: '1.3'
            }}>
                Lo que dice la raza <span style={{ color: '#0284c7' }}>Certificada</span> 🇲🇽
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {testimonials.map((t, index) => (
                    <div key={index} style={cardStyle}>
                        {/* Header: Photo + Info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={t.photo}
                                    alt={t.name}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '3px solid #f3f4f6'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    backgroundColor: '#22c55e',
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    border: '2px solid white'
                                }}></div>
                            </div>

                            <div style={{ flex: 1 }}>
                                <h4 style={nameStyle}>{t.name}</h4>
                                <p style={locationStyle}>{t.location}</p>
                                <div style={{ display: 'flex', gap: '2px', marginTop: '6px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill="#fbbf24"
                                            color="#fbbf24"
                                            strokeWidth={0}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Comment Body */}
                        <div style={{ position: 'relative' }}>
                            <p style={textStyle}>
                                "{t.text}"
                            </p>
                        </div>

                        {/* Verified Footer */}
                        <div style={badgeStyle}>
                            <CheckCircle2 size={16} color="#16a34a" strokeWidth={3} />
                            <span>COMPRA VERIFICADA</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Proof Footer - Blue Theme */}
            <div style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#0284c7', // Full Blue text
                fontSize: '14px',
                fontWeight: '700',
                backgroundColor: '#f0f9ff', // Light blue bg
                border: '1px solid #bae6fd', // Blue border
                padding: '10px 20px',
                borderRadius: '9999px',
                width: 'fit-content',
                margin: '32px auto 0'
            }}>
                <span style={{ fontSize: '18px' }}>🇲🇽</span>
                <span>+2,847 mecánicos certificados en todo México</span>
            </div>
        </div>
    );
};

export default Testimonials;
