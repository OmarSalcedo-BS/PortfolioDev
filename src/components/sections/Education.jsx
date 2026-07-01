import useScrollReveal from '../../hooks/useScrollReveal';

export default function Education() {
  const [ref, isVisible] = useScrollReveal();

  const estudios = [
    {
      period: "2026 - PRESENTE",
      title: "Técnico asistente en desarrollo de Software",
      institution: "Educación Técnica",
      desc: "Enfoque en desarrollo de Scrum master, bases de datos, fronten y backend con diferentes tecnologías. manejo de SpringBoot, React, automatización con Python y CRUD"
    },
    {
      period: "2025 - 2026",
      title: "Desarrollo con IA: de 0 a producción, Curso mouredev",
      institution: "Certificaciones Avanzadas / Autodidacta",
      desc: "Fundamentos de desarrollo con IA, promts y organización de proyecto estructurado."
    },
    {
      period: "2025",
      title: "SQL ADVANCED, HACKER RANK",
      institution: "Certificaciones Avanzadas / Autodidacta",
      desc: "Manejo de bases de datos en SQL con nivel avanzado. Querys, Triggers y seguridad."
    },
    {
      period: "2025",
      title: "FUNDAMENTOS DEL DESARROLLO WEB PROFESIONAL",
      institution: "Certificaciones Avanzadas / PLATZI",
      desc: "Fundamentos del desarrollo, una ruta completa donde aprendí desde las bases pasando a terminales, gitflow, programación orientada a objetos, backend con crud en python y java, manejo de entornos, automatizaciones, diseño web y herramientas para diseño responsive."
    },


  ];

  const certificaciones = [
    { name: "Desarrollo de software", issuer: "CESDE" },
    { name: "Programación orientada a objetos con Java y Python", issuer: "PLATZI" },
    { name: "Python Avanzado & Programación asíncrona", issuer: "Platzi" },
    { name: "SQL & Bases de datos relacionales", issuer: "Hacker Rank" }
  ];

  return (
    <section ref={ref} id="educacion" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} py-16 space-y-12`}>
      {/* ENCABEZADO */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple">
          / Formación & Redes
        </h2>
        <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
          Educación, Certificaciones y Canales Oficiales
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* BLOQUE IZQUIERDO: ESTUDIOS Y LÍNEA DE TIEMPO (3 COLUMNAS) */}
        <div className="lg:col-span-3 space-y-8 relative before:absolute before:top-2 before:left-3 before:bottom-2 before:w-[1px] before:bg-white/10">
          {estudios.map((est, index) => (
            <div key={index} className="relative pl-10 group">
              {/* Nodo de la línea de tiempo */}
              <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-[#0a0a0c] border-2 border-brand-purple group-hover:border-brand-cyan transition-colors duration-300 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.35)]"></span>
              
              <span className="text-[10px] font-mono text-brand-cyan tracking-wider block mb-1">
                {est.period}
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {est.title}
              </h3>
              <p className="text-xs font-mono text-gray-500 mb-2">// {est.institution}</p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                {est.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BLOQUE DERECHO: CERTIFICACIONES Y REDES (2 COLUMNAS) */}
        <div className="lg:col-span-2 space-y-8">
          {/* SUB-SECCIÓN CERTIFICACIONES */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-purple">//</span> Certificaciones Clave
            </h4>
            <div className="space-y-3">
              {certificaciones.map((cert, index) => (
                <div key={index} className="bg-brand-card border border-white/5 p-4 hover:border-white/10 transition-colors hover-lift cursor-pointer">
                  <p className="text-sm font-bold text-gray-200 tracking-tight uppercase">
                    {cert.name}
                  </p>
                  <p className="text-[10px] font-mono text-gray-600 mt-1">
                    EMITIDO POR: {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SUB-SECCIÓN ENLACES PROFESIONALES */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="text-brand-cyan">//</span> Canales de Código y Contacto
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/OmarSalcedo-BS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0a0a0c] border border-white/10 p-4 text-center group hover:border-white hover:bg-white/5 transition-all duration-300 hover-lift glow-pulse border-pulse cursor-pointer"
              >
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.3 1.08 2.86.83.09-.64.34-1.08.62-1.33-2.21-.25-4.54-1.11-4.54-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.35.3.67.9.67 1.82v2.7c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
                </span>
                <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white transition-colors block">
                  GITHUB _
                </span>
                <span className="text-[9px] font-mono text-gray-600 block mt-1">
                  /repositories
                </span>
              </a>

              <a 
                href="https://www.linkedin.com/in/omar-salcedo-solarte-514804244/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0a0a0c] border border-white/10 p-4 text-center group hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-300 hover-lift glow-pulse border-pulse cursor-pointer"
              >
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:text-brand-cyan transition-colors">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8a2.5 2.5 0 0 0 0-4.5ZM3 9.5h4v11H3v-11Zm6.5 0h3.84v1.5h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22v5.38h-4v-4.77c0-1.14-.02-2.6-1.58-2.6-1.6 0-1.85 1.25-1.85 2.52v4.85h-4v-11Z" /></svg>
                </span>
                <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-brand-cyan transition-colors block">
                  LINKEDIN _
                </span>
                <span className="text-[9px] font-mono text-gray-600 block mt-1">
                  /network
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}