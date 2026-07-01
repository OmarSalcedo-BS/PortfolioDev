import useScrollReveal from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/portfolioData';

export default function ProjectsGrid() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="proyectos" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} py-16 space-y-12`}>
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple">
          / Proyectos Seleccionados
        </h2>
        <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
          Soluciones reales en código e IA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-brand-card border border-white/10 p-6 flex flex-col justify-between group hover:border-brand-purple/50 transition-all duration-300 relative shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover-lift glow-pulse border-pulse cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block max-w-[60%] truncate">
                  {project.subtitle}
                </span>
                <div className="flex flex-wrap gap-1 justify-end max-w-[40%]">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-white/5 text-gray-300 font-mono border border-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-purple transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
              <Link 
                to={`/proyecto/${project.id}`} 
                className="text-xs font-bold uppercase tracking-wider text-brand-cyan group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                Ver Detalles <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}