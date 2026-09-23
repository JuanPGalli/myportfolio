// Contenido del currículum online, calcado textualmente de los 3 PDF descargables
// (src/assets/Juan_Pablo_Galli_EN|ES|PT.pdf) para que la versión web y la
// descargable digan siempre lo mismo. Si el CV cambia, actualizar acá también.

const header = {
  name: 'Juan Pablo Galli Rodriguez',
  location: 'Rio de Janeiro, Brazil',
  phone: '+55 21 99528-2826',
  email: 'jpgallir@gmail.com',
  linkedin: 'linkedin.com/in/juan-pablo-galli-rodriguez',
  linkedinUrl: 'https://www.linkedin.com/in/juan-pablo-galli-rodriguez',
  github: 'github.com/JuanPGalli',
  githubUrl: 'https://github.com/JuanPGalli',
  tagline:
    'Full Stack Developer | Finance | HTML | CSS | Tailwind | ReactJS | Redux | Express | NodeJS | JavaScript | PostgreSQL | Sequelize | Jest | Agile Methodologies',
};

// Los proyectos de desarrollo y la experiencia financiera son las mismas fechas/empresas
// en los 3 idiomas — sólo cambia el texto. Los links van acá afuera, una sola vez.
const links = {
  freelance: { deploy: 'mariamartagalli.com.ar', code: 'github.com/JuanPGalli/mmastrologia' },
  shopflow: { deploy: 'shopflow-ecommerce-demo.vercel.app' },
  f1: { deploy: 'f1-drivers-spa.vercel.app', video: 'youtu.be/5EJk7emG87s' },
};

const en = {
  header,
  summary:
    'Full Stack Developer and Certified Public Accountant (CPA) with a strong background in banking, auditing, and corporate financial management. Proficient in building robust backend architectures, designing responsive user interfaces, and managing data structures using JavaScript, ReactJS, Redux, Node.js, Express, PostgreSQL, and MongoDB. Expert in applying Agile methodologies (Scrum), analytical problem-solving, and attention to detail. Fully bilingual in Spanish, with professional proficiency in Portuguese and English.',
  skills: [
    { label: 'Languages & Core', items: ['JavaScript', 'HTML5', 'CSS3', 'SQL'] },
    { label: 'Frontend', items: ['ReactJS', 'Redux', 'Tailwind CSS', 'Responsive Design'] },
    { label: 'Backend & Databases', items: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { label: 'Tools & Methodologies', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jest', 'Cloudinary', 'Agile (Scrum)'] },
  ],
  devExperience: [
    {
      role: 'Freelance Full-Stack Developer',
      place: 'Self-Employed — Remote',
      dates: 'Jan. 2026 – Present',
      bullets: [
        'Developing a comprehensive Full-Stack web application for client management, automated online session scheduling, and service tracking.',
        'Architected and implemented a secure administrative dashboard featuring dynamic CRUD capabilities to manage services, publish blog content, and update real-time announcements.',
        'Designed a fully responsive frontend interface focused on streamlined user experience (UX) and conversion-oriented layouts to increase customer engagement.',
        'Engineered a robust component structure using React and Express, establishing a clean code environment prepared for upcoming secure client portals and data visualization features.',
        'Roadmapped future phases including secure payment gateway integration, premium e-book sales, and performance tracking via Google Analytics 4 (GA4) and SEO tools.',
      ],
      deploy: links.freelance.deploy,
      code: links.freelance.code,
    },
    {
      role: 'Frontend Developer Trainee',
      place: 'MindDev Perú — Remote (Lima, Peru)',
      dates: 'Jul. 2025 – Dec. 2025',
      bullets: [
        'Developed and implemented modern, responsive web interfaces using React, Tailwind CSS, HTML, CSS, and JavaScript.',
        'Collaborated closely with the UX/UI design team to transform design prototypes into high-performance, semantic functional components.',
        'Supported API integration and asynchronous data handling on the frontend layout layer.',
        'Contributed to continuous codebase improvements through active participation in code reviews, technical documentation, and sprint meetings.',
      ],
    },
    {
      role: 'Full Stack Developer — ShopFlow E-Commerce',
      place: '(Evolved from HelpCommunity)',
      dates: 'Oct. 2023 – Present',
      bullets: [
        'Architected and engineered a full-featured e-commerce platform, refactored from a legacy codebase to optimize performance and streamline retail workflows.',
        'Modeled a robust relational database structure, designing secure product CRUD operations, advanced combined filtering algorithms, and strict multi-criteria sorting flows.',
        'Integrated third-party services including Firebase for authentication, Cloudinary for cloud asset storage, and Mercado Pago as the primary payment gateway.',
        'Engineered backend notification logic using NodeMailer for automated purchase confirmations and administrative messaging.',
        'Built a centralized administrative dashboard tracking core business metrics, user access controls, sales history, and real-time inventory.',
      ],
      deploy: links.shopflow.deploy,
    },
    {
      role: 'Full Stack Developer — F1 Drivers SPA',
      place: '(Academic Project)',
      dates: 'Sept. 2023',
      bullets: [
        'Developed an individual SPA to browse, filter, search, and catalog Formula 1 drivers.',
        'Built custom, pure CSS components from scratch for multi-criteria sorting, combined filtering, and controlled forms without external UI libraries.',
        'Resolved a many-to-many relationship between drivers and teams using Sequelize.',
      ],
      deploy: links.f1.deploy,
      video: links.f1.video,
    },
  ],
  financeExperience: [
    { role: 'Back Office Responsible', place: 'AFG S.A. (Argentina)', dates: 'May 2016 – Apr. 2019' },
    { role: 'Planning and Management Control Analyst', place: 'Banco Finansur (Argentina)', dates: 'Jul. 2012 – May 2016' },
    { role: 'Accounting Analyst', place: 'Banco Finansur (Argentina)', dates: 'Jan. 2009 – Jun. 2012' },
    { role: 'Semi-Senior Auditor', place: 'RSM Argentina (Argentina)', dates: 'Dec. 2007 – Jan. 2009' },
    { role: 'Semi-Senior Accountant and Tax Analyst', place: 'Schenker Logistics (Argentina)', dates: 'Jan. 2006 – Dec. 2007' },
    { role: 'Senior Auditor', place: 'PwC (Argentina)', dates: 'Jan. 2003 – Jan. 2006' },
  ],
  education: [
    'B.S. in Software Engineering — Estácio University (Brazil) · In Progress',
    'Certified Public Accountant (CPA) — Universidad de Buenos Aires (Argentina)',
    'Full Stack Web Development Diploma — Soy Henry Bootcamp (800+ hours)',
  ],
  languages: 'Spanish (Native) · Portuguese (Professional / B2) · English (Professional / B2)',
  sectionTitles: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    devExperience: 'Development Experience',
    financeExperience: 'Finance & Auditing Experience',
    education: 'Education & Languages',
    download: 'Download PDF',
  },
};

const es = {
  header,
  summary:
    'Desarrollador Full Stack y Contador Público Nacional con sólida trayectoria en banca, auditoría y gestión financiera corporativa. Competente en la construcción de arquitecturas backend robustas, diseño de interfaces de usuario responsivas y gestión de estructuras de datos utilizando JavaScript, ReactJS, Redux, Node.js, Express, PostgreSQL y MongoDB. Experto en la aplicación de metodologías ágiles (Scrum), resolución analítica de problemas y atención al detalle. Completamente bilingüe en español y con un nivel profesional de portugués e inglés.',
  skills: [
    { label: 'Lenguajes y Core', items: ['JavaScript', 'HTML5', 'CSS3', 'SQL'] },
    { label: 'Frontend', items: ['ReactJS', 'Redux', 'Tailwind CSS', 'Diseño Responsivo'] },
    { label: 'Backend y Bases de Datos', items: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { label: 'Herramientas y Metodologías', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jest', 'Cloudinary', 'Agile (Scrum)'] },
  ],
  devExperience: [
    {
      role: 'Desarrollador Full Stack Freelance',
      place: 'Autónomo — Remoto',
      dates: 'Ene. 2026 – Actualidad',
      bullets: [
        'Desarrollando una aplicación web Full-Stack integral para la gestión de clientes, agendamiento automatizado de sesiones online y seguimiento de servicios.',
        'Arquitecturó e implementó un panel de administración seguro con capacidades CRUD dinámicas para gestionar servicios, publicar contenido de blog y actualizar novedades en tiempo real.',
        'Diseñó una interfaz frontend completamente responsiva enfocada en una experiencia de usuario (UX) fluida y maquetaciones orientadas a la conversión.',
        'Diseñó una estructura de componentes robusta utilizando React y Express, estableciendo un entorno de código limpio preparado para futuros portales de clientes seguros.',
        'Planificó las fases futuras: pasarela de pagos segura, venta de e-books premium y seguimiento del rendimiento vía Google Analytics 4 (GA4) y SEO.',
      ],
      deploy: links.freelance.deploy,
      code: links.freelance.code,
    },
    {
      role: 'Desarrollador Frontend Trainee',
      place: 'MindDev Perú — Remoto (Lima, Perú)',
      dates: 'Jul. 2025 – Dic. 2025',
      bullets: [
        'Desarrolló e implementó interfaces web modernas y responsivas utilizando React, Tailwind CSS, HTML, CSS y JavaScript.',
        'Colaboró estrechamente con el equipo de diseño UX/UI para transformar prototipos de diseño en componentes funcionales semánticos y de alto rendimiento.',
        'Brindó soporte en la integración de APIs y el manejo de datos asincrónicos en la capa de maquetación frontend.',
        'Contribuyó a las mejoras continuas del código base mediante revisiones de código, documentación técnica y reuniones de sprint.',
      ],
    },
    {
      role: 'Desarrollador Full Stack — E-Commerce ShopFlow',
      place: '(Evolución de HelpCommunity)',
      dates: 'Oct. 2023 – Presente',
      bullets: [
        'Arquitecturó y diseñó una plataforma de comercio electrónico completa, refactorizada a partir de un código base heredado para optimizar el rendimiento.',
        'Modeló una estructura de base de datos relacional robusta, con operaciones CRUD seguras, filtrado combinado avanzado y ordenamiento multicriterio.',
        'Integró servicios de terceros: Firebase para autenticación, Cloudinary para almacenamiento en la nube y Mercado Pago como pasarela de pago.',
        'Diseñó la lógica de notificación del backend utilizando NodeMailer para confirmaciones de compra y mensajería administrativa.',
        'Construyó un panel de administración centralizado con métricas comerciales, control de acceso de usuarios, historial de ventas e inventario en tiempo real.',
      ],
      deploy: links.shopflow.deploy,
    },
    {
      role: 'Desarrollador Full Stack — F1 Drivers SPA',
      place: '(Proyecto Académico)',
      dates: 'Sep. 2023',
      bullets: [
        'Desarrolló una SPA individual para buscar, filtrar, ordenar y catalogar pilotos de Fórmula 1.',
        'Construyó componentes personalizados en CSS puro desde cero, sin librerías externas de interfaz de usuario.',
        'Resolvió una relación de muchos a muchos entre pilotos y escuderías utilizando Sequelize.',
      ],
      deploy: links.f1.deploy,
      video: links.f1.video,
    },
  ],
  financeExperience: [
    { role: 'Responsable de Back Office', place: 'AFG S.A. (Argentina)', dates: 'Mayo 2016 – Abr. 2019' },
    { role: 'Analista de Planificación y Control de Gestión', place: 'Banco Finansur (Argentina)', dates: 'Jul. 2012 – Mayo 2016' },
    { role: 'Analista Contable', place: 'Banco Finansur (Argentina)', dates: 'Ene. 2009 – Jun. 2012' },
    { role: 'Auditor Semi-Senior', place: 'RSM Argentina (Argentina)', dates: 'Dic. 2007 – Ene. 2009' },
    { role: 'Analista de Impuestos y Contable Semi-Senior', place: 'Schenker Logistics (Argentina)', dates: 'Ene. 2006 – Dic. 2007' },
    { role: 'Auditor Senior', place: 'PwC (Argentina)', dates: 'Ene. 2003 – Ene. 2006' },
  ],
  education: [
    'Ingeniería de Software — Universidad Estácio (Brasil) · En Curso',
    'Contador Público Nacional — Universidad de Buenos Aires (Argentina)',
    'Desarrollador Web Full Stack — Soy Henry Bootcamp (800+ horas)',
  ],
  languages: 'Español (Nativo) · Portugués (Nivel Profesional / B2) · Inglés (Nivel Profesional / B2)',
  sectionTitles: {
    summary: 'Perfil Profesional',
    skills: 'Conocimientos Técnicos',
    devExperience: 'Experiencia en Desarrollo',
    financeExperience: 'Experiencia en Finanzas y Auditoría',
    education: 'Educación e Idiomas',
    download: 'Descargar PDF',
  },
};

const br = {
  header,
  summary:
    'Desenvolvedor Full Stack e Contador com sólida trajetória em finanças, auditoria e gestão financeira corporativa. Competente na construção de arquiteturas backend robustas, design de interfaces de usuário responsivas e gerenciamento de estruturas de dados utilizando JavaScript, ReactJS, Redux, Node.js, Express, PostgreSQL e MongoDB. Especialista na aplicação de metodologias ágeis (Scrum), resolução analítica de problemas e atenção aos detalhes. Completamente bilíngue em espanhol e português, com proficiência profissional em inglês.',
  skills: [
    { label: 'Linguagens e Core', items: ['JavaScript', 'HTML5', 'CSS3', 'SQL'] },
    { label: 'Frontend', items: ['ReactJS', 'Redux', 'Tailwind CSS', 'Design Responsivo'] },
    { label: 'Backend e Bancos de Dados', items: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { label: 'Ferramentas e Metodologias', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jest', 'Cloudinary', 'Agile (Scrum)'] },
  ],
  devExperience: [
    {
      role: 'Desenvolvedor Full Stack Freelancer',
      place: 'Autônomo — Remoto',
      dates: 'Jan. 2026 – Atualidade',
      bullets: [
        'Desenvolvendo uma aplicação web Full-Stack integral para gestão de clientes, agendamento automatizado de sessões online e acompanhamento de serviços.',
        'Arquitetou e implementou um painel administrativo seguro com recursos CRUD dinâmicos para gerenciar serviços, publicar conteúdo de blog e atualizar novidades em tempo real.',
        'Projetou uma interface frontend totalmente responsiva focada em experiência do usuário (UX) fluida e layouts orientados à conversão.',
        'Desenvolveu uma estrutura de componentes robusta utilizando React e Express, estabelecendo um ambiente de código limpo preparado para futuros portais de clientes seguros.',
        'Planejou as fases futuras: gateway de pagamento seguro, venda de e-books premium e rastreamento de desempenho via Google Analytics 4 (GA4) e SEO.',
      ],
      deploy: links.freelance.deploy,
      code: links.freelance.code,
    },
    {
      role: 'Desenvolvedor Frontend Trainee',
      place: 'MindDev Perú — Remoto (Lima, Peru)',
      dates: 'Jul. 2025 – Dez. 2025',
      bullets: [
        'Desenvolveu e implementou interfaces web modernas e responsivas utilizando React, Tailwind CSS, HTML, CSS e JavaScript.',
        'Colaborou estreitamente com a equipe de design UX/UI para transformar protótipos em componentes funcionais semânticos e de alto desempenho.',
        'Prestou suporte na integração de APIs e manipulação de dados assíncronos na camada de layout frontend.',
        'Contribuiu para melhorias contínuas na base de código através de revisões de código, documentação técnica e reuniões de sprint.',
      ],
    },
    {
      role: 'Desenvolvedor Full Stack — E-Commerce ShopFlow',
      place: '(Evolução do HelpCommunity)',
      dates: 'Out. 2023 – Presente',
      bullets: [
        'Arquitetou e desenvolveu uma plataforma de comércio eletrônico completa, refatorada a partir de uma base de código herdada para otimizar o desempenho.',
        'Modelou uma estrutura robusta de banco de dados relacional, com operações CRUD seguras, filtragem combinada avançada e ordenação multicritério.',
        'Integrou serviços de terceiros: Firebase para autenticação, Cloudinary para armazenamento em nuvem e Mercado Pago como gateway de pagamento.',
        'Desenvolveu a lógica de notificação do backend usando NodeMailer para confirmações de compra e mensagens administrativas.',
        'Construiu um painel administrativo centralizado com métricas de negócio, controle de acesso de usuários, histórico de vendas e inventário em tempo real.',
      ],
      deploy: links.shopflow.deploy,
    },
    {
      role: 'Desenvolvedor Full Stack — F1 Drivers SPA',
      place: '(Projeto Acadêmico)',
      dates: 'Set. 2023',
      bullets: [
        'Desenvolveu uma SPA individual para pesquisar, filtrar, ordenar e catalogar pilotos de Fórmula 1.',
        'Construiu componentes personalizados em CSS puro do zero, sem bibliotecas externas de UI.',
        'Resolveu um relacionamento de muitos para muitos entre pilotos e equipes utilizando Sequelize.',
      ],
      deploy: links.f1.deploy,
      video: links.f1.video,
    },
  ],
  financeExperience: [
    { role: 'Responsável de Back Office', place: 'AFG S.A. (Argentina)', dates: 'Maio 2016 – Abr. 2019' },
    { role: 'Analista de Planejamento e Controle de Gestão', place: 'Banco Finansur (Argentina)', dates: 'Jul. 2012 – Maio 2016' },
    { role: 'Analista Contábil', place: 'Banco Finansur (Argentina)', dates: 'Jan. 2009 – Jun. 2012' },
    { role: 'Auditor Semi-Senior', place: 'RSM Argentina (Argentina)', dates: 'Dez. 2007 – Jan. 2009' },
    { role: 'Analista de Impostos e Contábil Semi-Senior', place: 'Schenker Logistics (Argentina)', dates: 'Jan. 2006 – Dez. 2007' },
    { role: 'Auditor Senior', place: 'PwC (Argentina)', dates: 'Jan. 2003 – Jan. 2006' },
  ],
  education: [
    'Engenharia de Software — Universidade Estácio (Brasil) · Em Andamento',
    'Contador Público — Universidad de Buenos Aires (Argentina)',
    'Diploma em Desenvolvimento Web Full Stack — Soy Henry Bootcamp (800+ horas)',
  ],
  languages: 'Espanhol (Nativo) · Português (Nível Profissional / B2) · Inglês (Nível Profissional / B2)',
  sectionTitles: {
    summary: 'Perfil Profissional',
    skills: 'Habilidades Técnicas',
    devExperience: 'Experiência em Desenvolvimento',
    financeExperience: 'Experiência em Finanças e Auditoria',
    education: 'Educação e Idiomas',
    download: 'Baixar PDF',
  },
};

const resumeData = { en, es, br };

export default resumeData;
