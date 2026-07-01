import { useLocation, useNavigate } from 'react-router-dom';

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.3 1.08 2.86.83.09-.64.34-1.08.62-1.33-2.21-.25-4.54-1.11-4.54-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.68-4.56 4.93.35.3.67.9.67 1.82v2.7c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8a2.5 2.5 0 0 0 0-4.5ZM3 9.5h4v11H3v-11Zm6.5 0h3.84v1.5h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22v5.38h-4v-4.77c0-1.14-.02-2.6-1.58-2.6-1.6 0-1.85 1.25-1.85 2.52v4.85h-4v-11Z" />
    </svg>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();

    if (pathname !== '/') {
      sessionStorage.setItem('pendingScrollTarget', sectionId);
      navigate('/');
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'educacion', label: 'Educación' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-brand-dark/85 backdrop-blur-xl px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        <a href="#hero" onClick={scrollToSection('hero')} className="text-xl font-black tracking-[0.25em] text-white uppercase transition-colors hover:text-brand-cyan">
          OMAR<span className="text-brand-purple">_DEV</span>
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center gap-8 px-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#contacto"
            onClick={scrollToSection('contacto')}
            className="hidden sm:inline-flex px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white border border-brand-purple/70 bg-brand-purple/10 hover:bg-brand-purple/20 shadow-[0_0_18px_rgba(192,38,211,0.28)] transition-all duration-300 hover-lift"
          >
            Contratar
          </a>

          <a
            href="https://github.com/OmarSalcedo-BS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-brand-purple/60 hover:text-white hover:bg-brand-purple/10"
            aria-label="GitHub"
          >
            <SocialIcon type="github" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/omar-salcedo-solarte-514804244/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:border-brand-cyan/60 hover:text-white hover:bg-brand-cyan/10"
            aria-label="LinkedIn"
          >
            <SocialIcon type="linkedin" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}