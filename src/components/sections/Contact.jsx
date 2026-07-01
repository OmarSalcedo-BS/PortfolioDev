import useScrollReveal from '../../hooks/useScrollReveal';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [ref, isVisible] = useScrollReveal();

    const enviarEmail = (e) => {
        e.preventDefault();
        setCargando(true);

        // REEMPLAZA ESTOS STRINGS CON TUS CREDENCIALES DE EMAILJS
        const SERVICE_ID = "service_hmckjg5";
        const TEMPLATE_ID = "template_wrg6yj8";
        const PUBLIC_KEY = "Kmaosqnosl0aWujv9";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setEnviado(true);
                setCargando(false);
                formRef.current.reset(); // Limpia los campos del formulario automáticamente
            }, () => {
                alert("Hubo un error al enviar el mensaje, por favor intenta de nuevo.");
                setCargando(false);
            });
    };

    return (
        <section ref={ref} id="contacto" className={`portfolio-section reveal-on-scroll ${isVisible ? 'is-visible' : ''} py-16 space-y-12`}>
            {/* ENCABEZADO */}
            <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                    / Conexión
                </h2>
                <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    ¿Tienes un proyecto en mente? Hablemos
                </p>
            </div>

            {/* CONTENEDOR PRINCIPAL ASIMÉTRICO */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                {/* INFORMACIÓN DE CONTACTO (IZQUIERDA) */}
                <div className="lg:col-span-2 space-y-6 text-sm">
                    <p className="text-gray-400 leading-relaxed">
                        Estoy disponible para desarrollo freelance, consultorías de datos e integración de flujos de trabajo automatizados con Inteligencia Artificial local.
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/5 font-mono text-xs">
                        <div className="space-y-1">
                            <span className="text-gray-600 block">// CORREO ELECTRÓNICO</span>
                            <a href="mailto:salcedosolarteomar@gmail.com" className="text-white hover:text-brand-cyan transition-colors">
                                salcedosolarteomar@gmail.com
                            </a>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-600 block">// NÚMERO DE TELÉFONO</span>
                            <a
                                href="https://wa.me/573187332952?text=Hola%20Omar,%20vi%20tu%20portafolio..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-1 px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 border border-white/40 hover:border-brand-cyan hover:text-brand-cyan transition-all hover-lift cursor-pointer"
                            >
                                WhatsApp
                            </a>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-600 block">// UBICACIÓN</span>
                            <span className="text-gray-400">Medellín, Colombia</span>
                        </div>
                    </div>
                </div>

                {/* FORMULARIO DE CONTACTO (DERECHA) */}
                <form 
                    ref={formRef}
                    onSubmit={enviarEmail}
                    className="lg:col-span-3 bg-brand-card border border-white/10 p-6 md:p-8 space-y-6 relative shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover-lift glow-pulse border-pulse"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Nombre</label>
                            <input
                                type="text"
                                name="user_name" // Mapea con {{user_name}} en tu plantilla EmailJS
                                required
                                className="w-full bg-[#0a0a0c] border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans cursor-text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Email</label>
                            <input
                                type="email"
                                name="user_email" // Mapea con {{user_email}} en tu plantilla EmailJS
                                required
                                className="w-full bg-[#0a0a0c] border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans cursor-text"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">Mensaje</label>
                        <textarea
                            name="message" // Mapea con {{message}} en tu plantilla EmailJS
                            rows="4"
                            required
                            className="w-full bg-[#0a0a0c] border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans resize-none cursor-text"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={cargando}
                            className="w-full md:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-purple hover:bg-brand-purple/90 shadow-[0_0_15px_rgba(192,38,211,0.2)] transition-all disabled:opacity-50 hover-lift cursor-pointer"
                        >
                            {cargando ? "Enviando..." : "Enviar Mensaje"}
                        </button>
                    </div>

                    {/* MENSAJE DE ÉXITO VISUAL */}
                    {enviado && (
                        <p className="text-xs font-mono text-brand-cyan uppercase animate-pulse pt-2">
                            ✓ ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}