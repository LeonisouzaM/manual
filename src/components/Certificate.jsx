import React, { useRef, useState, useEffect } from 'react';
import StepLayout from './StepLayout';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import { Download, Share2 } from 'lucide-react';

const Certificate = () => {
    const [name, setName] = useState('');
    const [qrUrl, setQrUrl] = useState('');
    const [date] = useState(new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }));
    const [validationCode] = useState(Math.random().toString(36).substring(2, 10).toUpperCase());
    const certRef = useRef(null);

    useEffect(() => {
        // Generate QR Code
        QRCode.toDataURL(`https://manualdelmecanico.com/verify/${validationCode}`)
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
        <StepLayout className="max-w-4xl"> {/* Wider for certificate preview */}
            <div className="text-center mb-6 no-print">
                <h2 className="mb-4">¡Felicidades!</h2>
                <p>Ingresa tu nombre completo como deseas que aparezca en el certificado.</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre Completo"
                    className="w-full max-w-md p-3 rounded-md bg-bg-card border border-border-light text-white mb-4 text-center text-lg"
                />
            </div>

            {/* Certificate Preview */}
            <div className="overflow-x-auto mb-8">
                <div
                    ref={certRef}
                    className="bg-white text-black p-10 relative shadow-2xl mx-auto"
                    style={{ width: '800px', height: '600px', minWidth: '800px' }}
                >
                    {/* Border/Frame */}
                    <div className="absolute inset-4 border-4 border-gray-800 pointer-events-none"></div>
                    <div className="absolute inset-6 border border-gray-400 pointer-events-none"></div>

                    {/* Header */}
                    <div className="text-center mt-10">
                        <h1 className="text-4xl font-serif text-gray-900 uppercase tracking-widest mb-2" style={{ fontFamily: 'serif' }}>Certificado Profesional</h1>
                        <div className="w-16 h-1 bg-yellow-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 font-serif italic">Se otorga el presente reconocimiento a:</p>
                    </div>

                    {/* Name */}
                    <div className="text-center mt-8 mb-8">
                        <h2 className="text-5xl font-bold text-blue-900 border-b-2 border-gray-300 inline-block pb-2 px-8 min-w-[400px]">
                            {name || "NOMBRE DEL ALUMNO"}
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Por haber acreditado satisfactoriamente la evaluación técnica del <strong>Manual del Mecánico</strong>,
                            validando sus conocimientos en mecánica automotriz y mantenimiento preventivo.
                        </p>
                    </div>

                    {/* Footer - Signatures & QR */}
                    <div className="flex justify-between items-end px-16 mt-16">
                        <div className="text-center">
                            <div className="w-40 border-t border-gray-800 pt-2 mb-1">
                                <p className="font-bold text-sm">Instructor Jefe</p>
                            </div>
                            <p className="text-xs text-gray-500">Manual del Mecánico</p>
                        </div>

                        <div className="text-center flex flex-col items-center">
                            {qrUrl && <img src={qrUrl} alt="QR Code" className="w-20 h-20 mb-2" />}
                            <p className="text-[10px] text-gray-400">Validación: {validationCode}</p>
                        </div>

                        <div className="text-center">
                            <p className="text-lg font-bold mb-1">{date}</p>
                            <div className="w-40 border-t border-gray-800 pt-2">
                                <p className="font-bold text-sm">Fecha de Emisión</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-0 w-full text-center">
                        <p className="text-[10px] text-gray-400">verify.manualdelmecanico.com</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 justify-center no-print">
                <button className="btn w-auto px-8 gap-2" onClick={generatePDF}>
                    <Download size={20} />
                    Descargar PDF
                </button>
            </div>
        </StepLayout>
    );
};

export default Certificate;
