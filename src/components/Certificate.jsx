import React, { useRef, useState, useEffect } from 'react';
import StepLayout from './StepLayout';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import { Download } from 'lucide-react';

const Certificate = () => {
    const [name, setName] = useState('');
    const [qrUrl, setQrUrl] = useState('');
    const [date] = useState(() => new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }));
    const [validationCode] = useState(() => Math.random().toString(36).substring(2, 10).toUpperCase());
    const certRef = useRef(null);

    useEffect(() => {
        QRCode.toDataURL(`https://codigodelmecanico.com/verify/${validationCode}`)
            .then(url => setQrUrl(url))
            .catch(err => console.error(err));
    }, [validationCode]);

    const generatePDF = () => {
        if (!name.trim()) return alert("Por favor ingresa tu nombre completo.");

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [800, 600]
        });

        doc.html(certRef.current, {
            callback: function (doc) {
                doc.save(`Certificado-${name.replace(/\s+/g, '-')}.pdf`);
            },
            x: 0,
            y: 0,
            width: 800,
            windowWidth: 800
        });
    };

    return (
        <StepLayout className="max-w-4xl">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }} className="no-print">
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(220, 38, 38, 0.06)',
                    border: '1px solid rgba(220, 38, 38, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                }}>
                    <span style={{ fontSize: '1.75rem' }}>🎉</span>
                </div>

                <h2 style={{
                    color: '#dc2626',
                    fontWeight: 800,
                    fontSize: '1.75rem',
                    marginBottom: '0.5rem'
                }}>¡Felicidades!</h2>
                <p style={{ color: '#6b7280', fontSize: '0.925rem', marginBottom: '1.25rem' }}>
                    Ingresa tu nombre completo como deseas que aparezca en el certificado.
                </p>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre Completo"
                    style={{
                        width: '100%',
                        maxWidth: '28rem',
                        padding: '0.875rem 1rem',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: '1.5px solid #e5e7eb',
                        color: '#111827',
                        fontSize: '1rem',
                        textAlign: 'center',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Inter, sans-serif'
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#dc2626';
                        e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.08)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                    }}
                />
            </div>

            {/* Certificate Preview */}
            <div className="overflow-x-auto" style={{ marginBottom: '2rem' }}>
                <div
                    ref={certRef}
                    style={{
                        width: '800px',
                        height: '600px',
                        minWidth: '800px',
                        background: '#fff',
                        color: '#000',
                        padding: '40px',
                        position: 'relative',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        margin: '0 auto',
                        borderRadius: '4px'
                    }}
                >
                    {/* Borders */}
                    <div style={{ position: 'absolute', inset: '16px', border: '4px solid #1f2937', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', inset: '24px', border: '1px solid #9ca3af', pointerEvents: 'none' }} />

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <h1 style={{
                            fontSize: '2.25rem',
                            fontFamily: 'Georgia, serif',
                            color: '#111827',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '8px'
                        }}>Certificado Profesional</h1>
                        <div style={{
                            width: '64px',
                            height: '4px',
                            background: '#ca8a04',
                            margin: '0 auto 24px'
                        }} />
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#4b5563',
                            fontFamily: 'Georgia, serif',
                            fontStyle: 'italic'
                        }}>Se otorga el presente reconocimiento a:</p>
                    </div>

                    {/* Name */}
                    <div style={{ textAlign: 'center', margin: '32px 0' }}>
                        <h2 style={{
                            fontSize: '2.75rem',
                            fontWeight: 700,
                            color: '#1e3a5f',
                            borderBottom: '2px solid #d1d5db',
                            display: 'inline-block',
                            padding: '0 32px 8px',
                            minWidth: '400px'
                        }}>
                            {name || "NOMBRE DEL ALUMNO"}
                        </h2>
                    </div>

                    {/* Description */}
                    <div style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto 48px' }}>
                        <p style={{
                            fontSize: '1.125rem',
                            color: '#374151',
                            lineHeight: 1.6
                        }}>
                            Por haber acreditado satisfactoriamente la evaluación técnica de <strong>El Código del Mecánico Profesional</strong>,
                            validando sus conocimientos en mecánica automotriz y mantenimiento preventivo.
                        </p>
                    </div>

                    {/* Footer */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        padding: '0 64px',
                        marginTop: '64px'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '160px', borderTop: '1px solid #1f2937', padding: '8px 0 4px' }}>
                                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#000' }}>Instructor Jefe</p>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>El Código del Mecánico Profesional</p>
                        </div>

                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {qrUrl && <img src={qrUrl} alt="QR Code" style={{ width: '80px', height: '80px', marginBottom: '8px' }} />}
                            <p style={{ fontSize: '10px', color: '#9ca3af' }}>Validación: {validationCode}</p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '4px', color: '#000' }}>{date}</p>
                            <div style={{ width: '160px', borderTop: '1px solid #1f2937', padding: '8px 0' }}>
                                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#000' }}>Fecha de Emisión</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '16px', left: 0, width: '100%', textAlign: 'center' }}>
                        <p style={{ fontSize: '10px', color: '#9ca3af' }}>verify.codigodelmecanico.com</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="no-print">
                <button className="btn" style={{
                    width: 'auto',
                    padding: '0.875rem 2rem',
                    gap: '8px'
                }} onClick={generatePDF}>
                    <Download size={20} />
                    Descargar PDF
                </button>
            </div>
        </StepLayout>
    );
};

export default Certificate;
