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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 py-8 font-mono text-[11px] text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* LADO IZQUIERDO: COPYRIGHT */}
        <div className="flex items-center gap-2">
          <span className="text-brand-purple">//</span>
          <span>© {currentYear} OMAR SALCEDO. TODOS LOS DERECHOS RESERVADOS.</span>
        </div>

        {/* LADO DERECHO: METADATA TÉCNICA */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></span>
            <span className="text-gray-500 uppercase">STATUS: PRODUCTION READY</span>
          </div>
          <span className="text-gray-500">BUILT WITH REACT + TAILWIND v4</span>
          <div className="flex items-center gap-2">
            <a href="https://github.com/OmarSalcedo-BS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-gray-400 transition-colors hover:text-white hover:border-brand-purple/60 cursor-pointer">
              <SocialIcon type="github" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/omar-salcedo-solarte-514804244/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-gray-400 transition-colors hover:text-white hover:border-brand-cyan/60 cursor-pointer">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}