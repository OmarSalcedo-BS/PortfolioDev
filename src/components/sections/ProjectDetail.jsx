import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(null);

  const handleBackToProjects = () => {
    sessionStorage.setItem('pendingScrollTarget', 'proyectos');
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-black text-brand-purple">PROYECTO NO ENCONTRADO</h2>
        <Link to="/" onClick={handleBackToProjects} className="text-brand-cyan hover:underline">← Volver al portafolio</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 max-w-4xl mx-auto space-y-12 pb-20 px-4">
      {/* BOTÓN VOLVER */}
      <Link to="/" onClick={handleBackToProjects} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-brand-purple transition-colors">
        ← Volver al Portafolio
      </Link>

      {/* ENCABEZADO */}
      <div className="space-y-4 border-b border-white/10 pb-6">
        <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider">{project.subtitle}</span>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{project.title}</h1>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.images?.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">/ Galería Visual</h2>
              <p className="text-sm text-gray-400">Capturas asociadas al proyecto</p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
              {project.images.length} imágenes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <figure
                key={image}
                className="group overflow-hidden rounded-xl border border-white/10 bg-brand-card shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover-lift cursor-zoom-in"
                onClick={() => setActiveImage({ src: image, alt: `${project.title} captura ${index + 1}` })}
              >
                <img
                  src={image}
                  alt={`${project.title} captura ${index + 1}`}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-brand-dark shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/70"
            >
              Cerrar
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[85vh] w-full object-contain bg-black"
            />
          </div>
        </div>
      )}

      {/* DESCRIPCIÓN Y DETALLES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-brand-card border border-white/10 p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple">/ Descripción General</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.description}</p>
          </div>
          <div className="bg-brand-card border border-white/10 p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple">/ El Desafío Técnico</h3>
            <p className="text-gray-300 leading-relaxed text-sm">{project.challenge}</p>
          </div>
          <div className="bg-brand-card border border-white/10 p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple">/ Solución Aplicada</h3>
            <p className="text-gray-300 leading-relaxed text-sm">{project.solution}</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: FEATURES */}
        <div className="space-y-6">
          <div className="bg-brand-card border border-white/10 p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyan">/ Características</h3>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-brand-purple font-mono">•</span> {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-card border border-white/10 p-6 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">/ Arquitectura</h3>
            <p className="text-[11px] text-gray-400 font-mono leading-relaxed">{project.architecture}</p>
          </div>
        </div>
      </div>
    </div>
  );
}