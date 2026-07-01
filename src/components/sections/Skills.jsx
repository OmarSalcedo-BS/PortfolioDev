import useScrollReveal from '../../hooks/useScrollReveal';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  // Diccionario para traducir categorías lógicas a etiquetas visuales legibles
  const categories = {
    backend: { title: "Desarrollo Backend", color: "border-brand-purple text-brand-purple" },
    database: { title: "Bases de Datos & Análisis", color: "border-brand-cyan text-brand-cyan" },
    frontend: { title: "Desarrollo Frontend", color: "border-white/40 text-white" },
    mobile: { title: "Desarrollo Móvil", color: "border-purple-400 text-purple-400" },
    ai: { title: "Modelado e IA Local", color: "border-cyan-400 text-cyan-400" },
    tools: { title: "Herramientas & DevOps", color: "border-gray-500 text-gray-400" }
  };

  // Agrupar las habilidades del portafolio por su categoría asignada
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section ref={ref} id="habilidades" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} py-16 space-y-12`}>
      {/* ENCABEZADO */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
          / Stack Tecnológico
        </h2>
        <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
          Infraestructura y herramientas que domino
        </p>
      </div>

      {/* CUADRÍCULA DE CATEGORÍAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(categories).map((key) => {
          const cat = categories[key];
          const skillsList = groupedSkills[key] || [];

          if (skillsList.length === 0) return null;

          return (
            <div 
              key={key} 
              className="bg-brand-card border border-white/10 p-6 relative group hover:border-white/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover-lift glow-pulse border-pulse cursor-pointer"
            >
              {/* Línea decorativa superior neón */}
              <div className={`absolute top-0 left-0 h-[2px] w-12 border-t-2 ${cat.color.split(' ')[0]}`}></div>
              
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-6 flex items-center gap-2">
                <span className="text-gray-600 font-mono">//</span> {cat.title}
              </h3>

              {/* Lista de burbujas/tags de habilidades */}
              <div className="flex flex-wrap gap-2.5">
                {skillsList.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs px-3 py-1.5 bg-[#0a0a0c] border border-white/10 font-mono text-gray-400 hover:text-white hover:border-brand-purple transition-colors rounded cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}