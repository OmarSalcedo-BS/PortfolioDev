
const asset = (path) => new URL(path, import.meta.url).href;

export const profilePhoto = asset('../assets/fotodev.jpg');

export const heroData = {
  title: "Omar Darío Salcedo Solarte",
  role: "Dev Junior & Data Analyst",
  tagline: "Automatizando flujos con IA y código estructurado.",
  description: "Desarrollador junior enfocado en Python y análisis de datos, manejo de bases de datos, certificado en la creación e integración de flujos de trabajo inteligentes con IA. Combino la lógica relacional y soluciones automatizadas para crear aplicaciones modernas y eficientes.",
};

export const projectsData = [
  {
    id: "pystock-ledger",
    title: "PyStockLedger",
    subtitle: "Sistema ERP Local & Gestión de Inventarios",
    tags: ["Python", "SQLite", "CustomTkinter", "Matplotlib"],
    description: "Aplicación de escritorio diseñada para centralizar la operación comercial de múltiples sucursales mediante un control estricto de inventarios, facturación de remisiones, e ingresos/egresos.",
    challenge: "Prevenir inconsistencias de saldos y lentitud en las consultas relacionales al gestionar miles de productos distribuidos en tiempo real de forma local.",
    solution: "Se estructuró una lógica transaccional optimizada que reduce los tiempos de escritura en disco y permite empaquetar el entorno completo en un ejecutable independiente (.exe) listo para producción.",
    architecture: "Motor de base de datos relacional local parametrizado con disparadores automáticos para detectar umbriles de desabastecimiento.",
    images: [
      asset('../assets/proyectos/PySotck/Captura de pantalla 2026-06-29 203506.png'),
      asset('../assets/proyectos/PySotck/Captura de pantalla 2026-06-29 203718.png'),
      asset('../assets/proyectos/PySotck/Captura de pantalla 2026-06-29 203742.png'),
      asset('../assets/proyectos/PySotck/Captura de pantalla 2026-06-29 203824.png')
    ],
    features: ["Facturación de remisiones integrada", "Panel analítico predictivo con gráficas de productos populares", "Alertas en tiempo real de stock bajo y sugerencias de reordenamiento"]
  },
  {
    id: "autonoti",
    title: "AutoNoti",
    subtitle: "Sistema Automatizado de Mensajería Omnicanal",
    tags: ["Python", "WhatsApp API", "SQLite", "Asyncio"],
    description: "Software de escritorio enfocado en la automatización de estrategias de retención y comunicación masiva con clientes a través de inyecciones dinámicas de datos.",
    challenge: "Garantizar el procesamiento continuo y asíncrono de bases de datos masivas sin bloquear la interfaz gráfica del usuario.",
    solution: "Implementación de programación asíncrona mediante hilos de ejecución secundarios para gestionar las peticiones a la API rest de pruebas y flujos de mensajería.",
    architecture: "Almacenamiento y estructuración local que lee plantillas personalizadas y mapea los estados de los destinatarios.",
    images: [
      asset('../assets/proyectos/autonoti/etnrada.png'),
      asset('../assets/proyectos/autonoti/notificaciones.png'),
      asset('../assets/proyectos/autonoti/registros.png')
    ],
    features: ["Envío de notificaciones personalizadas automatizadas", "Alertas automatizadas de vencimientos críticos (SOAT, eventos)", "Módulo receptor asíncrono para captura automática de datos"]
  },
  {
    id: "sabor-urbano",
    title: "Sabor Urbano Page",
    subtitle: "Landing Page Comercial & Hub Digital",
    tags: ["React", "Tailwind CSS", "EmailJS", "API Rest"],
    description: "Plataforma web comercial optimizada para un restaurante de comidas rápidas, enfocada en la experiencia de conversión, branding continuo y visualización responsiva.",
    challenge: "Crear una interfaz moderna y fluida que conecte los servicios externos de redes sociales y mensajería sin impactar la velocidad de carga.",
    solution: "Maquetación basada en componentes atómicos con Tailwind CSS v4, reduciendo el código redundante e integrando pasarelas livianas de comunicación.",
    architecture: "Estructura Single Page Application (SPA) optimizada para SEO con renderizado del lado del cliente.",
    images: [
      asset('../assets/proyectos/saborurbano/Captura de pantalla 2026-06-29 202358.png'),
      asset('../assets/proyectos/saborurbano/Captura de pantalla 2026-06-29 202424.png'),
      asset('../assets/proyectos/saborurbano/Captura de pantalla 2026-06-29 202448.png'),
      asset('../assets/proyectos/saborurbano/Captura de pantalla 2026-06-29 202519.png')
    ],
    features: ["Menú digital dinámico en alta fidelidad (PDF integrado)", "Sincronización con la API de Instagram para el feed de fotos en tiempo real", "Formulario de contacto automatizado con validación y envío de correo vía EmailJS"]
  },
  {
    id: "myrrorsync",
    title: "MyrrorSync",
    subtitle: "Gestor de Respaldos e Integridad de Archivos Local",
    tags: ["Python", "SQLite", "Watchdog", "File System API"],
    description: "Utilidad de sistema en segundo plano diseñada para automatizar la sincronización inteligente y replicación de directorios locales hacia unidades de almacenamiento externo.",
    challenge: "Crear un algoritmo eficiente que emule el comportamiento de One Drive de forma local sin generar sobrecarga de lectura en el disco duro externo.",
    solution: "Desarrollo de un algoritmo basado en hashes lógicos que compara metadatos omitiendo los archivos idénticos que no han sufrido modificaciones.",
    architecture: "Proceso persistente (Daemon) controlado por SQLite para guardar el historial de sincronizaciones exitosas.",
    images: [
      asset('../assets/proyectos/mirrorsync/Captura de pantalla 2026-06-27 001202.png'),
      asset('../assets/proyectos/mirrorsync/Captura de pantalla 2026-06-27 002936.png'),
      asset('../assets/proyectos/mirrorsync/Captura de pantalla 2026-06-27 011119.png'),
      asset('../assets/proyectos/mirrorsync/Captura de pantalla 2026-06-27 014819.png')
    ],
    features: ["Copia de seguridad incremental con un solo clic", "Ejecución autónoma en segundo plano", "Detección activa de hardware que suspende hilos si la unidad de destino se desconecta"]
  },
  {
    id: "project-companion",
    title: "Project Companion",
    subtitle: "Asistente IA Local con Narrativa Generativa",
    tags: ["Python", "Ollama", "LLM 8B", "SQLite"],
    description: "Entorno de chat interactivo ejecutado al 100% en local, aprovechando la aceleración por hardware (GPU) para desplegar modelos de lenguaje masivo adaptados.",
    challenge: "Evitar la pérdida de contexto de la IA en sesiones extensas de chat operando en entornos con limitaciones de memoria de video.",
    solution: "Configuración y refinamiento de parámetros nativos sobre Ollama, complementado con un buffer inteligente de contexto histórico.",
    architecture: "Pipeline local conectado a bases de datos relacionales para la inyección de embeddings e historial.",
    features: ["Operación totalmente local (Privacidad de datos al 100%)", "Sistema de memoria persistente a largo plazo e indexación de conversaciones", "Modelo de 8 mil millones de parámetros con personalidad y lore consistentes"]
  },
  {
    id: "projecto-studio",
    title: "Projecto Studio",
    subtitle: "Pipeline de Clonación de Voz y Text-to-Speech (TTS)",
    tags: ["Python", "PyTorch", "Docker", "Deep Learning"],
    description: "Sistema experimental de síntesis de voz y clonación de audio de alta fidelidad empaquetado en contenedores Docker para garantizar aislamiento completo de dependencias.",
    challenge: "Compilar librerías densas de Deep Learning y procesar el muestreo de voz sin entrar en conflictos de drivers de video en Windows.",
    solution: "Contenerización del entorno completo con Docker y mapeo directo de instrucciones CUDA hacia la tarjeta gráfica.",
    architecture: "Redes neuronales en PyTorch entrenadas para la extracción de vectores de identidad de voz.",
    images: [
      asset('../assets/proyectos/projectostudio/Captura de pantalla 2026-05-10 130522.png'),
      asset('../assets/proyectos/projectostudio/Captura de pantalla 2026-05-10 135204.png'),
      asset('../assets/proyectos/projectostudio/IMG-20260625-WA0012.jpg')
    ],
    features: ["Clonación precisa de voces a partir de muestras de audio cortas", "Mantenimiento autónomo de tonos, pausas y variaciones naturales", "Versión demo funcional optimizada para la futura creación masiva de audiolibros"]
  },
  {
    id: "lector-betaia",
    title: "Lector BetaIA",
    subtitle: "Asistente de Análisis Literario Asistido por IA",
    tags: ["Python", "PyTorch", "Flutter", "Ollama LLM"],
    description: "Aplicación multiplataforma estructurada con una interfaz de alta velocidad conectada a un motor de inteligencia artificial local para análisis de manuscritos extensos.",
    challenge: "Transferir volúmenes pesados de texto plano desde una aplicación cliente (Flutter) a un servidor local de inferencia sin congelar el hilo visual.",
    solution: "Diseño de un canal de comunicación asíncrono segmentado en fragmentos pequeños para que la IA procese la lectura en segundo plano.",
    architecture: "Frontend en Flutter/Dart conectado por sockets locales a un backend en Python con PyTorch.",
    images: [
      asset('../assets/proyectos/lectorbetaai/Captura de pantalla 2026-06-14 231502.png'),
      asset('../assets/proyectos/lectorbetaai/Captura de pantalla 2026-06-15 002331.png'),
      asset('../assets/proyectos/lectorbetaai/Captura de pantalla 2026-06-15 004001.png'),
      asset('../assets/proyectos/lectorbetaai/Captura de pantalla 2026-06-15 004054.png'),
      asset('../assets/proyectos/lectorbetaai/IMG-20260625-WA0012.jpg')
    ],
    features: ["Simulación de retroalimentación crítica simulando un lector humano", "Análisis estructural de arcos narrativos y coherencia de personajes", "Diseño responsivo compilado para entornos Windows y dispositivos móviles"]
  },
  {
    id: "cierre-de-turno",
    title: "Cierre de Turno App",
    subtitle: "Sistema de Auditoría Contable y Conciliación",
    tags: ["Java Core", "Flutter", "Dart", "PostgreSQL"],
    description: "Herramienta bicapa diseñada para mitigar el error humano en los procesos de conciliación financiera diaria de establecimientos comerciales.",
    challenge: "Transicionar de una lógica monolítica básica a un ecosistema escalable que permita auditorías centralizadas en la nube.",
    solution: "Reescritura de la capa de presentación en Flutter y aislamiento de la lógica de negocio contable mediante una API CRUD robusta.",
    architecture: "Base de datos con integridad referencial estricta para registrar arqueos por cajero, fecha y terminal.",
    features: ["Cálculo automatizado de divisas físicas, vouchers de tarjetas y remisiones contables", "Detección instantánea de faltantes y sobrantes contrastados contra la tirilla Z de la caja", "Generación automática de reportes históricos de cierre diarios libres de factor de error humano"]
  },
  {
    id: "mypocket-app",
    title: "MyPocket App",
    subtitle: "Aplicación Móvil de Finanzas Personales",
    tags: ["Flutter", "Dart", "SQLite", "Gamification"],
    description: "Aplicación móvil nativa para el control financiero exhaustivo y privado que opera de manera local y descentralizada.",
    challenge: "Lograr una experiencia de usuario atractiva y fluida que incentive el registro diario de transacciones financieras sin comprometer la privacidad.",
    solution: "Desarrollo de un motor de gamificación interno acoplado a bases de datos relacionales ultra rápidas que se ejecutan directamente en la memoria del teléfono.",
    architecture: "Estructura móvil MVP Estable v3.2.5 con almacenamiento en SQLite local cifrado.",
    images: [
      asset('../assets/proyectos/mypocket/Screenshot_2026-03-10-03-33-45-957_com.example.my_pocket_flutter_android.jpg'),
      asset('../assets/proyectos/mypocket/Screenshot_2026-03-10-03-33-50-398_com.example.my_pocket_flutter_android.jpg'),
      asset('../assets/proyectos/mypocket/Screenshot_2026-03-10-03-34-14-978_com.example.my_pocket_flutter_android.jpg')
    ],
    features: ["Monitoreo estricto de suscripciones periódicas con alertas de cobro automatizadas", "Generación de reportes analíticos de gastos mensuales basados en data histórica previa", "Sistema interactivo de logros desbloqueables y personalización de temas dinámicos"]
  }
];

export const servicesData = [
  { id: 1, title: "Páginas de Aterrizaje", desc: "Diseño moderno y optimizado para conversión y velocidad." },
  { id: 2, title: "Automatización de Negocios", desc: "Flujos de trabajo con Python para ahorrar horas de trabajo manual." },
  { id: 3, title: "Programas de Inventario", desc: "Aplicaciones de escritorio para manejo de stock y bodegas." },
  { id: 4, title: "SQL y Datos", desc: "Gestión de bases de datos locales o en la nube a gran escala." }
];

export const skillsData = [
  { name: "Python", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "SQLite", category: "database" },
  { name: "SupaBase", category: "database" },
  { name: "React", category: "frontend" },
  { name: "Html & Css", category: "frontend" },
  { name: "Flutter", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "Java", category: "backend" },
  { name: "CRUD", category: "backend" },
  { name: "SpringBoot", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Terminal", category: "tools" },
  { name: "PyTorch", category: "ai" },
  { name: "Llm Studio", category: "ai" }
];