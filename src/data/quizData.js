
export const copy = {
  welcome: {
    title: "Bienvenido al Manual del Mecánico – Certificación Profesional",
    text: [
      "Antes de emitir tu certificado, necesitamos evaluar rápidamente tu nivel de conocimiento en mecánica.",
      "Responderás 10 preguntas sencillas y, al final, tu certificado autenticado quedará disponible para descarga e impresión.",
      "Nuestro objetivo es validar el conocimiento de quienes ya trabajan en mecánica, brindando mayor credibilidad y reconocimiento profesional.",
      "¿Podemos comenzar?"
    ],
    button: "COMENZAR EVALUACIÓN"
  },
  socialProof: {
    text: [
      "Más de 3,000 mecánicos ya han emitido su certificado a través del Manual del Mecánico, utilizándolo para generar mayor confianza con sus clientes y destacar su profesionalismo dentro del taller.",
      "Esta certificación no tiene como objetivo formar nuevos mecánicos.",
      "Existe para reconocer a quienes ya ejercen la profesión y desean comprobar su experiencia y conocimiento técnico.",
      "Ahora responderás algunas preguntas relacionadas con tu área.",
      "Al finalizar, tu certificado autenticado estará disponible para descarga en PDF."
    ],
    button: "COMENZAR EVALUACIÓN"
  },
  areaSelection: {
    question: "¿En qué tipo de mecánica trabajas actualmente?",
    options: [
      "Mecánica de motocicletas",
      "Mecánica automotriz",
      "Mecánica de motores diésel",
      "Mecánica general"
    ]
  },
  authority: {
    title: "SOLO PARA RECORDAR…",
    text: [
      "Más de 3,500 profesionales ya aseguraron su Certificado del Manual del Mecánico para fortalecer su credibilidad y aumentar la confianza de sus clientes.",
      "Mecánicos con experiencia, principiantes y especialistas utilizan este certificado para comprobar conocimientos, demostrar profesionalismo y destacar dentro del taller.",
      "El certificado es autenticado, cuenta con código único de verificación y fue desarrollado como un diferencial real para el día a día del mecánico."
    ],
    button: "INICIAR PRUEBA"
  },
  result: {
    title: "TU PUNTUACIÓN",
    scoreText: "Nível excelente – 92%",
    status: "Resultado: APROBADO",
    description: "Tu desempeño estuvo por encima del promedio de los profesionales evaluados. Demostraste dominio de las principales áreas de la mecánica y estás apto para emitir tu Certificado Profesional.",
    button: "CONTINUAR"
  },
  offer: {
    title: "¡Tu Certificado Profesional del Manual del Mecánico está listo para emisión!",
    text: "Para recibir tu versión autenticada en PDF, con código de validación y QR Code oficial, necesitas desbloquear su emisión.",
    sectionHeader: "Desbloqueando ahora, recibes también:",
    bonuses: [
      {
        title: "Checklist de Diagnóstico Rápido",
        description: "Guía profesional con pasos objetivos para identificar fallas en minutos."
      },
      {
        title: "Guía de Torque y Mantenimiento Esencial",
        description: "Atajos de servicio que los mecánicos experimentados usan todos los días."
      },
      {
        title: "Plantilla de Presupuesto Profesional",
        description: "Para presentar servicios con más credibilidad."
      }
    ],
    button: "CONTINUAR"
  },
  payment: {
    text: "Para liberar la emisión de tu Certificado Profesional autenticado, es necesario realizar apenas un pago único de",
    price: "MX$ 185,60",
    cardTitle: "Lo que está incluido en la tasa de emisión:",
    features: [
      "<b>Autenticación digital</b> con código exclusivo de validación",
      "<b>Generación del certificado en PDF</b> con diseño oficial",
      "<b>Registro interno del documento</b> para consultas futuras",
      "<b>Disponibilidad inmediata</b> vía WhatsApp o e-mail",
      "<b>Acceso a los bonos complementarios</b>, incluyendo materiales de apoyo técnico"
    ],
    footerText: "Este valor es una tasa operativa simbólica, destinada a cubrir costos de emisión, almacenamiento seguro y mantenimiento de la plataforma de verificación.",
    ctaText: "Haz clic abajo para completar la emisión y recibir tu certificado ahora.",
    button: "DESBLOQUEAR CERTIFICADO"
  }
};

export const questions = [
  {
    id: 1,
    question: "¿Qué indica un ruido metálico constante proveniente del motor justo después del arranque?",
    options: [
      { text: "Falta de lubricación", correct: true },
      { text: "Bujías desgastadas", correct: false },
      { text: "Filtro de aire sucio", correct: false },
      { text: "Combustible de mala calidad", correct: false }
    ]
  },
  {
    id: 2,
    question: "La función principal del aceite lubricante es:",
    options: [
      { text: "Reducir la fricción entre las piezas", correct: true },
      { text: "Aumentar la potencia", correct: false },
      { text: "Controlar la inyección", correct: false },
      { text: "Enfriar el radiador", correct: false }
    ]
  },
  {
    id: 3,
    question: "¿Qué puede causar sobrecalentamiento en cualquier motor?",
    options: [
      { text: "Falta de líquido refrigerante", correct: false },
      { text: "Termostato atascado", correct: false },
      { text: "Ventilador inoperante", correct: false },
      { text: "Todas las anteriores", correct: true }
    ]
  },
  {
    id: 4,
    question: "Un filtro de combustible obstruido provoca:",
    options: [
      { text: "Falta de potencia al acelerar", correct: true },
      { text: "Revoluciones más altas", correct: false },
      { text: "Aumento de la presión del aceite", correct: false },
      { text: "Ruido en el escape", correct: false }
    ]
  },
  {
    id: 5,
    question: "¿Qué significa una mezcla pobre?",
    options: [
      { text: "Más aire que combustible", correct: true },
      { text: "Más combustible que aire", correct: false },
      { text: "Falta de ignición", correct: false },
      { text: "Aceite quemado", correct: false }
    ]
  },
  {
    id: 6,
    question: "La vibración excesiva en ralentí puede ser causada por:",
    options: [
      { text: "Soporte de motor dañado", correct: true },
      { text: "Filtro de aire nuevo", correct: false },
      { text: "Sistema de enfriamiento", correct: false },
      { text: "Combustible premium", correct: false }
    ]
  },
  {
    id: 7,
    question: "La banda de accesorios generalmente acciona:",
    options: [
      { text: "Alternador, bomba de agua y aire acondicionado", correct: true },
      { text: "Bomba de combustible y bujías", correct: false },
      { text: "Inyectores y sensor MAF", correct: false },
      { text: "Ventilador y módulo", correct: false }
    ]
  },
  {
    id: 8,
    question: "¿Qué ocurre si el motor funciona constantemente con el nivel de aceite bajo?",
    options: [
      { text: "Desgaste acelerado y riesgo de daño grave", correct: true },
      { text: "Aumento de potencia", correct: false },
      { text: "Ahorro de combustible", correct: false },
      { text: "Mejor compresión", correct: false }
    ]
  },
  {
    id: 9,
    question: "Un sistema de frenos con aire en las líneas presenta:",
    options: [
      { text: "Pedal o palanca esponjosa", correct: true },
      { text: "Ruido metálico", correct: false },
      { text: "Frenos bloqueados", correct: false },
      { text: "Revoluciones irregulares", correct: false }
    ]
  }
];
