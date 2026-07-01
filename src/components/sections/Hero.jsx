import useScrollReveal from '../../hooks/useScrollReveal';
import { heroData, profilePhoto } from '../../data/portfolioData';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="hero" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20`}>
      {/* TEXTO DE INTRODUCCIÓN */}
      <div className="flex-1 space-y-6">
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-widest rounded-full glow-pulse border-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            Disponible Freelance
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest rounded-full border-pulse">
            ✓ Certificado en Dev + IA
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white uppercase">
          Dev & <span className="text-brand-purple">Database.</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-300">
          {heroData.tagline}
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
          {heroData.description}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <a href="#proyectos" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-purple hover:bg-brand-purple/90 shadow-[0_0_20px_rgba(192,38,211,0.4)] transition-all hover-lift">
            Ver Proyectos
          </a>
          <a href="#contacto" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 border border-white/20 hover:border-brand-cyan hover:text-brand-cyan transition-all hover-lift">
            Contactar
          </a>
        </div>
      </div>

      {/* RECUADRO CON PERSPECTIVA NEÓN */}
      <div className="w-full md:w-[380px] aspect-square bg-brand-card border-2 border-brand-purple/40 p-4 relative group shadow-[0_0_30px_rgba(192,38,211,0.1)] glow-pulse border-pulse">
        <div className="absolute inset-0 border-2 border-brand-cyan translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        <div className="w-full h-full bg-brand-dark flex items-center justify-center overflow-hidden border border-white/10">
          <img
            src={profilePhoto}
            alt="Foto de perfil de Omar Salcedo"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}