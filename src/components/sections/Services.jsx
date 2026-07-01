import useScrollReveal from '../../hooks/useScrollReveal';

export default function Services() {
  const [ref, isVisible] = useScrollReveal();

  const servicios = [
    {
      num: "01",
      title: "Desarrollo de Software a Medida",
      desc: "Construcción de aplicaciones de escritorio y móviles robustas, optimizadas para entornos locales o en la nube utilizando Python, Java y Flutter. Enfoque en rendimiento y arquitecturas limpias.",
      techs: ["Python", "Flutter", "PostgreSQL", "SQLite"]
    },
    {
      num: "02",
      title: "Automatización & Pipelines de Datos",
      desc: "Optimización de procesos comerciales e industriales mediante scripts asíncronos que conectan APIs (como WhatsApp), bases de datos y hojas de cálculo masivas, eliminando por completo el error humano.",
      techs: ["Asyncio", "Threading", "SQL Triggers", "APIs"]
    },
    {
      num: "03",
      title: "Integración de IA & LLMs Locales",
      desc: "Despliegue de modelos de Inteligencia Artificial (LLM, TTS, Embeddings) de manera 100% local y privada en la infraestructura de tu empresa mediante Ollama y Docker, garantizando privacidad absoluta de datos.",
      techs: ["Ollama", "PyTorch", "Docker", "CUDA"]
    },
    {
      num: "04",
      title: "Migración de datos",
      desc: "Migración de datos de tabals de excel para SQL, implementación de Dashboard, programas complementarios para analisis de datos",
      techs: ["SQL", "Excel", "Python", "SAS"]
    },
    {
      num: "05",
      title: "Creación de bases de datos",
      desc: "Funcionalidad para bases de datos de empleados, productos, servicios. analisis y automatización de recolección de datos.",
      techs: ["SQL", "Excel", "Python", "Contabilidad"]
    },
    {
      num: "06",
      title: "Landing Pages & Portfolios",
      desc: "Páginas de presentación personalizadas a tu gusto, Portfolios profesionales, ofrecer servicios y contactos directos, mensajería automatizada y mostrar la historia de tu negocio",
      techs: ["React", "Html/Css/Js", "vercel", "Desarrollo web"]
    },

  ];

  return (
    <section ref={ref} id="servicios" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} py-16 space-y-12`}>
      {/* ENCABEZADO */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
          / Soluciones
        </h2>
        <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
          Servicios y Especialidades Técnicas
        </p>
      </div>

      {/* CUADRÍCULA DE SERVICIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {servicios.map((serv, index) => (
          <div 
            key={index} 
            className="bg-brand-card border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-purple/40 transition-all duration-500 relative overflow-hidden hover-lift glow-pulse border-pulse cursor-pointer"
          >
            {/* Número en el fondo estilo brutalista */}
            <span className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.02] font-mono select-none group-hover:text-brand-purple/[0.05] transition-colors duration-500">
              {serv.num}
            </span>

            <div className="space-y-4">
              <span className="text-[10px] font-mono text-brand-purple uppercase tracking-widest block">
                // SERVICIO {serv.num}
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-brand-purple transition-colors duration-300">
                {serv.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {serv.desc}
              </p>
            </div>

            {/* Sub-tags de tecnologías del servicio */}
            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/5 mt-6">
              {serv.techs.map(tech => (
                <span 
                  key={tech} 
                  className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}