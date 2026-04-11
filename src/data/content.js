export const siteConfig = {
  brand: 'DevPlayground',
  owner: 'Alex Morgan',
  role: 'Fullstack Developer',
  shortRole: 'Frontend-first builder for polished web products',
  email: 'alex@devplayground.dev',
  location: 'Based in Southeast Asia, collaborating worldwide',
  availability: 'Open for freelance, product, and collaboration work',
  footerNote: 'Built with soul.',
  socialLinks: {
    github: '#',
    linkedin: '#',
    email: 'mailto:alex@devplayground.dev',
    top: '#home',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Profile', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

export const heroContent = {
  eyebrow: 'Open for new projects',
  titlePrefix: "Hi, I'm",
  highlightedName: 'Alex',
  titleSuffix: 'I build things for the web.',
  description:
    'A fullstack developer focused on creating tactile digital experiences. I bridge the gap between complex backend logic and playful, user-centric interfaces.',
  emphasis: 'tactile digital experiences',
  primaryCta: { label: 'View My Work', to: '/work' },
  secondaryCta: { label: "Let's Chat", to: '/#contact' },
  sprintLabel: 'Current Sprint',
  sprintTitle: 'Designing a portfolio system that scales into a full personal brand.',
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA-AU3JTA0NQh3BP3AiYaK89qCqEwFwiWxmBgRLxDrLcGXPc5Y8lD-QwFDmdzjyRXZ6aEkLgJfXnAl6zLtV6Ac61ypP5U3KP0q-IWVcmlL0-fuSIMTS5TWLgLci9cep-CdoGOr0iUns3bMP-Fe_RudoKGPuo180sbGo40TYVnJhSQcblYgHEBBUnxCGwQdWA-HP6Tg5NuHUyqBQatfXD1QBVxLEJv30hP54a3k7tZPYRE233XN5xkbYigKybnbWn5lD3me910wDP9Q',
}

export const skillCards = [
  {
    title: 'Frontend Mastery',
    description:
      'Crafting pixel-perfect, accessible, and high-performance interfaces using React, Tailwind, and modern component architecture.',
    variant: 'light',
    icon: 'layers',
    chips: ['React', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'Scalable Systems',
    description:
      'Building APIs, auth flows, and data workflows that stay dependable as products and traffic grow.',
    variant: 'secondary',
    icon: 'storage',
  },
  {
    title: 'Micro-Interactions',
    description:
      'Adding thoughtful motion and tactile feedback so interfaces feel alive, useful, and memorable.',
    variant: 'tertiary',
    icon: 'auto_awesome',
  },
]

export const skillsMeta = {
  title: 'My Tech Toolkit',
  description: 'Tools I use to bring ideas to life.',
  deploymentTitle: 'Cloud & Deployment',
  deploymentDescription:
    'Automating workflows and shipping confidently to CI/CD pipelines and cloud platforms, ready for Vercel deployment.',
}

export const skillsPageContent = {
  title: 'My Digital',
  highlight: 'Toolbox.',
  description:
    'Exploring the intersection of elegant code and intuitive design. Here is the ecosystem of technologies I use to bring ideas to life.',
  profileTitle: "Hey, I'm Alex",
  profileDescription: [
    "I'm a Fullstack Developer with a soul for editorial design. I believe that software should not just work - it should feel like a premium experience.",
    'Whether I am deep in a SQL query or fine-tuning a bezier curve for a button hover, I approach every project with curiosity and a focus on tactile interactions. I build things that people love to touch, click, and explore.',
  ],
  profileImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAnL1SYIt5ZzN1ysayj7Y9mHRi7h0LJzMO8A5sH4RgWv6U4XXopDKK9cZJzea2hF2u54LWYTQsqRUWOEjD7mTMd7bFLm-YR8x40RG0WDwC_-oCgjV32_Y0e5hv9cZIoPDP-RpQ2A2m9awl7lVPttzw-E9jTUH_ZTi9DWRGKZKfVkMwlUvgelHbTlSqdy6y76FFkqwmRuxdVHe34jSkqODCWUTkI35RjTcul8n48hXHEjG_a1tNrN9l7lVzZXhq4uyjny-DaaiHQnfA',
  profileFacts: [
    { icon: 'location_on', label: 'Berlin, DE' },
    { icon: 'coffee', label: 'Powered by Espresso' },
  ],
}

export const frontendSkillBubbles = [
  { icon: 'html', colorClass: 'is-blue', label: 'React.js' },
  { icon: 'style', colorClass: 'is-cyan', label: 'Tailwind' },
  { icon: 'animation', colorClass: 'is-orange', label: 'Framer Motion' },
  { icon: 'brush', colorClass: 'is-pink', label: 'Figma' },
  { icon: 'javascript', colorClass: 'is-yellow', label: 'TypeScript' },
]

export const backendSkills = [
  { icon: 'settings_ethernet', label: 'Node.js' },
  { icon: 'database', label: 'PostgreSQL' },
  { icon: 'memory', label: 'Redis' },
  { icon: 'api', label: 'Python' },
]

export const toolPills = [
  'Docker',
  'Kubernetes',
  'GitHub Actions',
  'AWS Cloud',
  'VS Code',
  'Terminal',
]

export const glassStackCards = [
  {
    title: 'DevOps Mindset',
    description: 'Automating the path from local development to production scale.',
    icon: 'auto_awesome',
    accent: 'primary',
    className: 'stack-card-back',
  },
  {
    title: 'Backend Architecture',
    description: 'Building robust systems that handle complexity with ease.',
    icon: 'terminal',
    accent: 'secondary',
    className: 'stack-card-middle',
  },
  {
    title: 'Frontend Craft',
    description: 'Creating interfaces that feel as good as they look.',
    icon: 'palette',
    accent: 'tertiary',
    className: 'stack-card-front',
  },
]

export const featuredProjects = [
  {
    slug: 'vortex-analytics',
    title: 'Vortex Analytics',
    tags: ['SaaS', 'Fintech'],
    stack: ['React', 'Node.js', 'WebSockets', 'D3.js'],
    description:
      'A high-performance real-time data visualization platform for crypto traders, built with WebSockets and D3.js.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbwubDZcWVM2TRDvbbCAz_UQTZdv4yHF65Ukk_b91J6sUcOb9K4hbg1_qnkwaRhNiD10g90MHIv52tufNUjCtQarg6drhJVeiJXwLgAPCR0HgNLm3Edkv4Su_Zw49UVwD0oIStv87S18DI_2xKvAcALRtgJRJXQSVwV-8POj9BnCICm6y5o1HSxB9lEByKFpruV3MeBF9QzF04d42ubZroREVrHansxG72F9cP1xDrApFhDvLmWuuSHnWMVX5Y3Msn_LrnIoD5MAE',
    alt: 'Dark fintech dashboard with charts on a desktop display',
    summary:
      'Real-time analytics for traders with fast dashboards and decision-ready visualizations.',
    problem:
      'Traders were juggling several slow dashboards and missing live market signals.',
    solution:
      'I designed a single analytics workspace with streaming market data, custom watchlists, and visual alerts.',
    impact:
      'Reduced insight lag for users and gave the product a cleaner, more focused decision workflow.',
    year: '2026',
  },
  {
    slug: 'lumina-store',
    title: 'Lumina Store',
    tags: ['Mobile', 'E-Commerce'],
    stack: ['Next.js', 'Shopify', 'AI Recommendations'],
    description:
      'Minimalist headless commerce experience powered by Shopify and Next.js, with AI-driven recommendations.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEqTmkp5ljfGOW0u4DEb6nZevbCGptgA-nH3cIMmJmZ_mW4EVAQ2TI_IGzm9LaNaAezM0Dilqqp7HL0HaNC3IBzGLXIDfDR1Hi368X4vVPBBgOhgFbuLgn-wKaRRfDNQ-xp9frN4H4vO9eyX5NCgkQ-MZScJ0tNGoyLlWnAWneT_3D1xhvPxAyLqX4pN9OVI5fSkqtlmwoSKlZ5EiHtiQ5LUevqJaDWiEQQJRZPnLIW5F9VQzuyBwWrwExZLJcrv8_1ipa8TDMy0E',
    alt: 'Conceptual mobile commerce interface with product photography',
    summary:
      'A mobile-first storefront with clean product storytelling and personalized recommendations.',
    problem:
      'The original storefront had strong inventory but weak storytelling and low repeat discovery.',
    solution:
      'I rebuilt the browsing experience with editorial layouts, smart recommendations, and faster product pages.',
    impact:
      'Improved product discovery and gave the brand a more premium digital feel.',
    year: '2025',
  },
]

export const workShowcaseProjects = [
  {
    slug: 'lumina-analytics',
    title: 'Lumina Analytics',
    tags: ['MongoDB', 'Express', 'React'],
    stack: ['MongoDB', 'Express', 'React', 'Charting'],
    description:
      'A real-time data visualization platform for small businesses to track customer growth metrics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDiflzZtk6SKcetEA4bzX2royqs13XUotbrucLJ-_q4ApaD9lqt9tQD3f4tqi_hAzkscgPvTWPrcMeDV9y5d6K6OWlx0TDRYHnt3p_QFDNH_W3AAJ_98dJCtkw1xYK5fmqCD6N7g1tQyXfzdoE3cywekZarATcu3lifD-lnyZZm5m4sThJ2WCs8xL0vh3ezg5-QIWOMqRJxlsO9WR58DVqH0Ojzw-bT8R9E0GO8EHiHAjtOY2TAWxwGTWGs5Lqruj8pGdpM-0NDes',
    alt: 'Modern dashboard interface with colorful data visualizations',
    badge: 'New',
    summary:
      'Growth reporting for small teams that need readable metrics without enterprise clutter.',
    problem:
      'Small businesses struggled to understand their customer data without expensive analytics tools.',
    solution:
      'I built a simplified analytics dashboard focused on growth, retention, and campaign health.',
    impact:
      'Made decision-making more approachable for non-technical teams.',
    year: '2026',
  },
  {
    slug: 'swift-chat-engine',
    title: 'Swift Chat Engine',
    tags: ['Node.js', 'Redis', 'Socket.io'],
    stack: ['Node.js', 'Redis', 'Socket.io', 'Observability'],
    description:
      'High-concurrency chat infrastructure capable of handling 50k+ active connections simultaneously.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7HGQGcZkRursVv7aDnpay5wGqjyDz6Zd4_YvJWrM_84tjOWz3lFOUWrNkItYt_jbcoCbZQEKvrkXqWs07SnO29J9AiSTDpRd3NAgqMQ3U80UZhopSg0HAiLP88REK8KVEjMWvn8GFwm3nBKMTOjmHV-JsWlzUM42o_J3uc9vA_zsfC-ZimpByQjGd0oVVO2q65He_QP2Zn-atuVU5TQroQFe2qyYQ7c8UPQag6-WUXVbnHqO-9WIwrbNolkImJxqhmYvJ74Sikoc',
    alt: 'Abstract code editor screen with vibrant syntax highlighting',
    summary:
      'A real-time messaging core focused on scale, resilience, and low-latency delivery.',
    problem:
      'The product needed chat infra that stayed stable during launch spikes and team events.',
    solution:
      'I designed a socket-driven messaging engine with Redis-backed pub-sub and performance tracing.',
    impact:
      'Handled heavy concurrent usage more confidently and reduced operational guesswork.',
    year: '2025',
  },
  {
    slug: 'greenthumb-mobile',
    title: 'GreenThumb Mobile',
    tags: ['Flutter', 'Firebase'],
    stack: ['Flutter', 'Firebase', 'Image Recognition'],
    description:
      'A plant care assistant with image recognition and watering schedule notifications.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSxFdHWtPqAUiOLU19ACUqUREkDbKfi_C8eMePuuPw3NdeRzSE29ZFb9n51iocCWk04zkGrPPGLi7PvMTNKLl3hPo8E1-L-qajiMeVN7g8JeEVFrjRAaWK7mkMUrfXHD8Hc5lplux_2vziIVebR_qpfS2Gn-20qNNlj2U2eEXKD-ufAIrEMXhed2E-OU0iywCTWBqY7MiIAZyc00kBBhWE-gxDvpgHE5NJZT9lVFsFxLeXvwTrlCOsg1Y9bi6pNq_7mNBUW50vje8',
    alt: 'Smartphone showing a sleek mobile app interface for plant care',
    summary:
      'A softer consumer app that balances utility, reminders, and delight.',
    problem:
      'Plant owners needed a simpler way to identify plants and keep care routines consistent.',
    solution:
      'I shaped a lightweight mobile flow with onboarding, reminders, and image-assisted recognition.',
    impact:
      'Made a niche use case feel friendly and habit-forming.',
    year: '2025',
  },
  {
    slug: 'ironcloud-paas',
    title: 'IronCloud PaaS',
    tags: ['Go', 'Docker', 'Kubernetes'],
    stack: ['Go', 'Docker', 'Kubernetes', 'SSL Automation'],
    description:
      'Self-hosted platform-as-a-service for micro-deployments with automated SSL certificates.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkeFQIFVkZVi4_4_l1v6x77ifE8-r1JW89D7m-k-0LAAnMIfEQsv_Kq9Hv22IlWvIW94tyy2OTj9BnzviV8jJ2W7YfL502u-e2-zdnEj7q739tzYLQig01DvyyQs4dryV9CP8x5srDFuspbOsz_bPzTNEgA6gpUlmHQ0Kj8ZbLxW5gWCkGFvkJWZU4s__eLS86GQXNJVwMToWcq-sPic6f4XgQ3BL9xepgn0yQQfikvTJIUBiA162Uzkc4YTAkMCjttGzFEmlixJg',
    alt: 'Server rack with blue led lights in a dark data center',
    summary:
      'Internal platform tooling for teams that want faster deploys without vendor lock-in.',
    problem:
      'Small engineering teams wanted faster deployments without maintaining a heavy DevOps platform.',
    solution:
      'I prototyped a self-hosted deployment layer with certificate automation and streamlined service rollouts.',
    impact:
      'Shortened the path from commit to deployment and reduced manual ops steps.',
    year: '2024',
  },
  {
    slug: 'astra-cms',
    title: 'Astra CMS',
    tags: ['TypeScript', 'GraphQL'],
    stack: ['TypeScript', 'GraphQL', 'Schema Generation'],
    description:
      'A headless CMS focused on developer experience with a powerful auto-generating API.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8DD16f403gBXtWityb2pTF8QaA_Ztlpv1TpENVfSKsqby8uztdfV0yFPhxQVc9eTHlkDpXzssuf_5IQfqApojrHfXsWG3r4YwCiUMWX7gWlx4fm3ojSVwcNRbZ516e_B_iUcwBLUz_FX5G-bKZ2qmXkmOIn9B1J-gBkIO4XWoVTUZ1nImUdP496CkpdjkpMa5wkktaO9NQx5Aj1qYBg8bHM1QaOMJUOF6AFlIrTF8_EC6ecRBZEr1IzNn1AwD7yAEphAp5AmQ0qg',
    alt: 'Close up of a keyboard in soft evening light',
    summary:
      'A developer-oriented content engine that prioritizes speed, structure, and control.',
    problem:
      'Content teams needed flexibility, but developers wanted stronger schemas and fewer runtime surprises.',
    solution:
      'I designed a CMS concept that auto-generated typed APIs and cleaner content models.',
    impact:
      'Improved developer confidence and reduced setup friction for content-heavy projects.',
    year: '2024',
  },
]

export const featuredExperiment = {
  title: 'The Next Big Thing?',
  description:
    'Currently working on an AI-powered design-to-code compiler that speaks in natural language.',
  icon: 'auto_awesome',
  status: 'Status: In Development (67%)',
  progress: 67,
  cta: 'Notify Me',
}

export const worksPageContent = {
  title: 'Digital Playground',
  highlight: 'Playground',
  titleSuffix: '& Selected Works',
  description:
    'Building robust backends and playful frontends. Exploring the intersection of technical precision and human-centric design.',
  role: 'Fullstack Developer',
  scrollLabel: 'Scroll to explore',
}

export const worksCta = {
  title: 'Want to see more logic?',
  description:
    'I have over 100+ private repositories where I experiment with everything from custom compilers to game engines.',
  primary: 'Explore Github',
  secondary: 'Start a Conversation',
}

export const aboutContent = {
  eyebrow: 'About',
  title: 'Designing products that feel engineered and human at once.',
  description:
    'I enjoy translating product ideas into interfaces that are clear, fast, and visually memorable. This portfolio is being built frontend-first so the brand feel lands before we wire in backend features.',
}

export const contactContent = {
  eyebrow: 'Contact',
  title: 'Let’s build something with strong logic and a clear visual point of view.',
  description:
    'If you have a product idea, a redesign in progress, or a frontend that needs more craft, I’m happy to collaborate.',
  primary: {
    label: 'Send Me an Email',
    href: 'mailto:alex@devplayground.dev',
  },
  secondary: {
    label: 'Browse My Work',
    to: '/work',
  },
}

export const contactPageContent = {
  title: "Let's build",
  highlight: 'something',
  suffix: 'cool.',
  description:
    "I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, my inbox is always open!",
  socialLinks: [
    { icon: 'terminal', tone: 'primary', label: 'GitHub', href: '#' },
    { icon: 'link', tone: 'secondary', label: 'LinkedIn', href: '#' },
  ],
  resume: {
    title: 'Download CV',
    updated: 'Latest update: March 2024',
    cta: 'Resume.pdf',
  },
  form: {
    fields: {
      name: 'Full Name',
      email: 'Email Address',
      subject: 'What can I help you with?',
      message: 'Message',
    },
    placeholder: {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Tell me about your project...',
    },
    options: [
      'Fullstack Development',
      'UI/UX Design Collaboration',
      'Quick Technical Question',
      'Just saying hello!',
    ],
    submit: 'Send Message',
  },
  responseNote: 'Average Response: < 24h',
  footerBadge: 'No coffee was harmed in the making of this site.',
}

export const socialIcons = [
  { icon: 'terminal', href: '#', label: 'GitHub profile' },
  { icon: 'code', href: '#', label: 'Code portfolio' },
  { icon: 'bolt', href: 'mailto:alex@devplayground.dev', label: 'Send email' },
  { icon: 'arrow_upward', href: '#home', label: 'Back to top' },
]

export const allProjects = [...featuredProjects, ...workShowcaseProjects]
