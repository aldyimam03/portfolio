export const siteConfig = {
  brand: 'DevPlayground',
  owner: 'Aldy Imam Wijaya',
  role: 'Fullstack Developer',
  shortRole: 'Fresh graduate Teknik Informatika yang fokus pada web development',
  email: 'aldyimam03@gmail.com',
  phone: '+6287702519051',
  location: 'Malang, Indonesia',
  availability: 'Terbuka untuk peluang kerja, freelance, dan kolaborasi project',
  footerNote: 'Dibuat dengan sepenuh hati.',
  socialLinks: {
    github: 'https://github.com/aldyimam03',
    linkedin: 'https://www.linkedin.com/in/aldyimamwijaya',
    portfolio: 'https://aldyimam03.github.io/portof-tailwind-css/',
    email: 'mailto:aldyimam03@gmail.com',
    top: '#home',
  },
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Project', to: '/work' },
  { label: 'Profil', to: '/skills' },
  { label: 'Kontak', to: '/contact' },
]

export const heroContent = {
  eyebrow: 'Terbuka untuk peluang baru',
  titlePrefix: 'Halo, saya',
  highlightedName: 'Aldy',
  titleSuffix: 'dan saya membangun aplikasi web yang rapi dan fungsional.',
  description:
    'Saya adalah fullstack developer yang fokus membangun aplikasi web dengan fondasi backend yang kuat, API yang rapi, serta antarmuka yang mudah digunakan.',
  emphasis: 'backend yang kuat',
  primaryCta: { label: 'Lihat Project', to: '/work' },
  secondaryCta: { label: 'Hubungi Saya', to: '/contact' },
  sprintLabel: 'Fokus Saat Ini',
  sprintTitle:
    'Menyusun portfolio personal branding sambil memperkuat fondasi fullstack dan pengembangan Laravel.',
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA-AU3JTA0NQh3BP3AiYaK89qCqEwFwiWxmBgRLxDrLcGXPc5Y8lD-QwFDmdzjyRXZ6aEkLgJfXnAl6zLtV6Ac61ypP5U3KP0q-IWVcmlL0-fuSIMTS5TWLgLci9cep-CdoGOr0iUns3bMP-Fe_RudoKGPuo180sbGo40TYVnJhSQcblYgHEBBUnxCGwQdWA-HP6Tg5NuHUyqBQatfXD1QBVxLEJv30hP54a3k7tZPYRE233XN5xkbYigKybnbWn5lD3me910wDP9Q',
}

export const skillCards = [
  {
    title: 'Pengembangan Backend',
    description:
      'Membangun REST API, autentikasi berbasis role, validasi relasi data, dan logika bisnis menggunakan Laravel serta database relasional.',
    variant: 'light',
    icon: 'storage',
    chips: ['Laravel', 'REST API', 'MySQL'],
  },
  {
    title: 'Sistem yang Terstruktur',
    description:
      'Nyaman mengembangkan CRUD system, desain database relasional, dokumentasi API, serta maintenance fitur pada codebase yang sudah berjalan.',
    variant: 'secondary',
    icon: 'account_tree',
  },
  {
    title: 'Integrasi Frontend',
    description:
      'Mengerjakan integrasi tampilan dan dashboard internal dengan pendekatan yang sederhana, responsif, dan mudah dipakai pengguna.',
    variant: 'tertiary',
    icon: 'dashboard',
  },
]

export const skillsMeta = {
  title: 'Keahlian Utama',
  description: 'Teknologi dan pendekatan yang saya gunakan untuk membangun aplikasi web.',
  deploymentTitle: 'Tools & Workflow',
  deploymentDescription:
    'Menggunakan Git, Postman, Swagger, dan workflow development yang terstruktur untuk kolaborasi, testing, dan dokumentasi fitur.',
}

export const skillsPageContent = {
  title: 'Profil',
  highlight: 'Teknis Saya',
  description:
    'Saya berkembang di area backend web development, terutama Laravel, database relasional, serta pengembangan sistem internal yang fokus pada kebutuhan nyata pengguna.',
  profileTitle: 'Halo, saya Aldy',
  profileDescription: [
    'Saya adalah fresh graduate Teknologi Informasi dari Universitas Brawijaya dengan pengalaman langsung mengembangkan aplikasi web menggunakan PHP, Laravel, MySQL, dan SQL Server.',
    'Saya terbiasa membangun REST API, sistem CRUD, autentikasi berbasis role, dokumentasi API, serta maintenance fitur berdasarkan kebutuhan user dan arahan tim.',
  ],
  profileImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAnL1SYIt5ZzN1ysayj7Y9mHRi7h0LJzMO8A5sH4RgWv6U4XXopDKK9cZJzea2hF2u54LWYTQsqRUWOEjD7mTMd7bFLm-YR8x40RG0WDwC_-oCgjV32_Y0e5hv9cZIoPDP-RpQ2A2m9awl7lVPttzw-E9jTUH_ZTi9DWRGKZKfVkMwlUvgelHbTlSqdy6y76FFkqwmRuxdVHe34jSkqODCWUTkI35RjTcul8n48hXHEjG_a1tNrN9l7lVzZXhq4uyjny-DaaiHQnfA',
  profileFacts: [
    { icon: 'location_on', label: 'Malang, Indonesia' },
    { icon: 'school', label: 'Universitas Brawijaya' },
    { icon: 'workspace_premium', label: 'IPK 3.65 / 4.00' },
  ],
}

export const frontendSkillBubbles = [
  { icon: 'code', colorClass: 'is-blue', label: 'HTML' },
  { icon: 'style', colorClass: 'is-cyan', label: 'Tailwind CSS' },
  { icon: 'javascript', colorClass: 'is-yellow', label: 'JavaScript Dasar' },
  { icon: 'dashboard', colorClass: 'is-pink', label: 'Blade / UI Internal' },
  { icon: 'api', colorClass: 'is-orange', label: 'Integrasi API' },
]

export const backendSkills = [
  { icon: 'settings_ethernet', label: 'Laravel / PHP' },
  { icon: 'database', label: 'MySQL' },
  { icon: 'dns', label: 'SQL Server' },
  { icon: 'shield_lock', label: 'Autentikasi Role' },
]

export const toolPills = [
  'Git & GitHub',
  'Postman',
  'Swagger',
  'PHPUnit Dasar',
  'REST API',
  'Eloquent ORM',
]

export const glassStackCards = [
  {
    title: 'API Development',
    description: 'Membangun endpoint REST API yang rapi untuk kebutuhan integrasi frontend dan sistem internal.',
    icon: 'api',
    accent: 'primary',
    className: 'stack-card-back',
  },
  {
    title: 'Backend Logic',
    description: 'Mengelola validasi, relasi data, autentikasi, dan alur bisnis aplikasi dengan pendekatan yang terstruktur.',
    icon: 'terminal',
    accent: 'secondary',
    className: 'stack-card-middle',
  },
  {
    title: 'System Maintenance',
    description: 'Nyaman melakukan perbaikan bug, penambahan fitur, serta pengembangan lanjutan pada aplikasi yang sudah berjalan.',
    icon: 'build',
    accent: 'tertiary',
    className: 'stack-card-front',
  },
]

export const featuredProjects = [
  {
    slug: 'inventory-web',
    title: 'Inventory Web',
    tags: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
    stack: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Postman'],
    description:
      'Sistem manajemen inventaris berbasis web untuk pengelolaan data barang, permintaan alat, dan dashboard internal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbwubDZcWVM2TRDvbbCAz_UQTZdv4yHF65Ukk_b91J6sUcOb9K4hbg1_qnkwaRhNiD10g90MHIv52tufNUjCtQarg6drhJVeiJXwLgAPCR0HgNLm3Edkv4Su_Zw49UVwD0oIStv87S18DI_2xKvAcALRtgJRJXQSVwV-8POj9BnCICm6y5o1HSxB9lEByKFpruV3MeBF9QzF04d42ubZroREVrHansxG72F9cP1xDrApFhDvLmWuuSHnWMVX5Y3Msn_LrnIoD5MAE',
    alt: 'Dashboard inventaris berbasis web',
    summary:
      'Project fullstack untuk kebutuhan pengelolaan inventaris dan request alat dalam satu sistem terintegrasi.',
    problem:
      'Pengelolaan inventaris dan permintaan alat membutuhkan sistem yang rapi, mudah diakses, dan mendukung relasi data antar entitas.',
    solution:
      'Saya membangun aplikasi berbasis Laravel dengan fitur CRUD, autentikasi pengguna, dashboard dasar, serta struktur database relasional untuk Branch, Item, dan Variant.',
    impact:
      'Sistem menjadi lebih terstruktur, data inventaris lebih mudah dikelola, dan alur permintaan alat lebih jelas untuk pengguna internal.',
    year: '2025',
  },
  {
    slug: 'web-sales',
    title: 'Web Sales',
    tags: ['Laravel 12', 'MySQL', 'Kasir'],
    stack: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'MVC'],
    description:
      'Aplikasi kasir berbasis web untuk operasional internal dengan autentikasi role admin dan kasir.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEqTmkp5ljfGOW0u4DEb6nZevbCGptgA-nH3cIMmJmZ_mW4EVAQ2TI_IGzm9LaNaAezM0Dilqqp7HL0HaNC3IBzGLXIDfDR1Hi368X4vVPBBgOhgFbuLgn-wKaRRfDNQ-xp9frN4H4vO9eyX5NCgkQ-MZScJ0tNGoyLlWnAWneT_3D1xhvPxAyLqX4pN9OVI5fSkqtlmwoSKlZ5EiHtiQ5LUevqJaDWiEQQJRZPnLIW5F9VQzuyBwWrwExZLJcrv8_1ipa8TDMy0E',
    alt: 'Aplikasi web kasir dan transaksi penjualan',
    summary:
      'Sistem penjualan internal yang menangani produk, transaksi, pembayaran, dan pemantauan penjualan harian.',
    problem:
      'Operasional bisnis membutuhkan sistem penjualan yang sederhana namun cukup lengkap untuk mendukung admin dan kasir.',
    solution:
      'Saya mengembangkan modul CRUD produk, autentikasi berbasis role, transaksi penjualan, pembayaran, dan dashboard ringkasan harian dengan arsitektur MVC Laravel.',
    impact:
      'Proses transaksi menjadi lebih terpusat dan data penjualan harian dapat dipantau dengan lebih mudah.',
    year: '2025',
  },
]

export const workShowcaseProjects = [
  {
    slug: 'griya-client-zone',
    title: 'Griya Client Zone',
    tags: ['Laravel 12', 'MySQL', 'Portal Client'],
    stack: ['Laravel 12', 'MySQL', 'Multi Database', 'Responsive UI'],
    description:
      'Portal client untuk pelanggan ISP agar dapat melihat informasi akun, profil, dan riwayat pembayaran.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDiflzZtk6SKcetEA4bzX2royqs13XUotbrucLJ-_q4ApaD9lqt9tQD3f4tqi_hAzkscgPvTWPrcMeDV9y5d6K6OWlx0TDRYHnt3p_QFDNH_W3AAJ_98dJCtkw1xYK5fmqCD6N7g1tQyXfzdoE3cywekZarATcu3lifD-lnyZZm5m4sThJ2WCs8xL0vh3ezg5-QIWOMqRJxlsO9WR58DVqH0Ojzw-bT8R9E0GO8EHiHAjtOY2TAWxwGTWGs5Lqruj8pGdpM-0NDes',
    alt: 'Portal client berbasis web untuk pelanggan',
    badge: 'Private',
    summary:
      'Portal pelanggan yang memudahkan akses data akun dan layanan dalam satu dashboard.',
    problem:
      'Pelanggan membutuhkan akses mandiri untuk melihat data layanan tanpa harus selalu melalui admin.',
    solution:
      'Saya mengembangkan portal dengan login aman, manajemen profil, riwayat pembayaran, serta dukungan multiple database connection.',
    impact:
      'Akses informasi pelanggan menjadi lebih mandiri dan antarmuka tetap nyaman dipakai dari perangkat mobile.',
    year: '2025',
  },
  {
    slug: 'api-inventory-tools',
    title: 'API Inventory & Tool Loan',
    tags: ['Laravel 12', 'REST API', 'Swagger'],
    stack: ['Laravel 12', 'REST API', 'Swagger', 'Relational Validation'],
    description:
      'Kumpulan endpoint REST API untuk sistem inventaris dan peminjaman alat internal perusahaan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7HGQGcZkRursVv7aDnpay5wGqjyDz6Zd4_YvJWrM_84tjOWz3lFOUWrNkItYt_jbcoCbZQEKvrkXqWs07SnO29J9AiSTDpRd3NAgqMQ3U80UZhopSg0HAiLP88REK8KVEjMWvn8GFwm3nBKMTOjmHV-JsWlzUM42o_J3uc9vA_zsfC-ZimpByQjGd0oVVO2q65He_QP2Zn-atuVU5TQroQFe2qyYQ7c8UPQag6-WUXVbnHqO-9WIwrbNolkImJxqhmYvJ74Sikoc',
    alt: 'Endpoint API dan dokumentasi backend',
    summary:
      'Pengembangan API internal untuk mendukung integrasi frontend dan monitoring inventaris alat.',
    problem:
      'Tim membutuhkan backend yang mampu menangani data branch, item, variant, serta request alat secara terstruktur.',
    solution:
      'Saya mengembangkan lebih dari 20 endpoint API menggunakan Laravel 12 dan mendokumentasikannya dengan Swagger agar mudah digunakan tim frontend.',
    impact:
      'Integrasi frontend menjadi lebih lancar dan tim memiliki acuan dokumentasi API yang lebih jelas.',
    year: '2025',
  },
  {
    slug: 'attendance-hris',
    title: 'Sistem Attendance HRIS',
    tags: ['Laravel 8', 'SQL Server', 'HRIS'],
    stack: ['Laravel 8', 'SQL Server', 'Excel Export', 'Role-Based Auth'],
    description:
      'Sistem absensi internal berbasis HRIS dengan fitur check-in, check-out, cuti, dan rekap laporan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSxFdHWtPqAUiOLU19ACUqUREkDbKfi_C8eMePuuPw3NdeRzSE29ZFb9n51iocCWk04zkGrPPGLi7PvMTNKLl3hPo8E1-L-qajiMeVN7g8JeEVFrjRAaWK7mkMUrfXHD8Hc5lplux_2vziIVebR_qpfS2Gn-20qNNlj2U2eEXKD-ufAIrEMXhed2E-OU0iywCTWBqY7MiIAZyc00kBBhWE-gxDvpgHE5NJZT9lVFsFxLeXvwTrlCOsg1Y9bi6pNq_7mNBUW50vje8',
    alt: 'Dashboard sistem absensi HRIS',
    summary:
      'Sistem internal perusahaan untuk pengelolaan absensi karyawan dan approval cuti.',
    problem:
      'Perusahaan membutuhkan sistem absensi yang bisa mencatat status hadir, keterlambatan, cuti, dan laporan secara terpusat.',
    solution:
      'Saya mengembangkan sistem check-in/check-out, workflow approval cuti, role-based authentication, dashboard statistik, dan export laporan ke Excel.',
    impact:
      'Monitoring absensi menjadi lebih rapi dan proses administrasi HR lebih efisien.',
    year: '2025',
  },
  {
    slug: 'ticketing-internal',
    title: 'Sistem Ticketing Internal',
    tags: ['Laravel', 'Workflow', 'Internal App'],
    stack: ['Laravel', 'Status Workflow', 'Request Tracking'],
    description:
      'Pengembangan sistem ticketing internal untuk pelacakan permintaan dan alur status pekerjaan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkeFQIFVkZVi4_4_l1v6x77ifE8-r1JW89D7m-k-0LAAnMIfEQsv_Kq9Hv22IlWvIW94tyy2OTj9BnzviV8jJ2W7YfL502u-e2-zdnEj7q739tzYLQig01DvyyQs4dryV9CP8x5srDFuspbOsz_bPzTNEgA6gpUlmHQ0Kj8ZbLxW5gWCkGFvkJWZU4s__eLS86GQXNJVwMToWcq-sPic6f4XgQ3BL9xepgn0yQQfikvTJIUBiA162Uzkc4YTAkMCjttGzFEmlixJg',
    alt: 'Sistem internal untuk pelacakan ticket',
    summary:
      'Project yang sedang dikembangkan untuk membantu tim memonitor request dan progres pekerjaan.',
    problem:
      'Permintaan internal perlu sistem yang bisa melacak status, histori, dan progres secara lebih terstruktur.',
    solution:
      'Saya melanjutkan pengembangan sistem ticketing dengan status workflow dan tracking request agar alur kerja lebih mudah dipantau.',
    impact:
      'Masih dalam proses pengembangan, namun diarahkan untuk meningkatkan transparansi proses internal.',
    year: '2025',
  },
  {
    slug: 'laravel-maintenance-support',
    title: 'Maintenance & Enhancement Laravel',
    tags: ['Bug Fixing', 'Maintenance', 'Feature Update'],
    stack: ['Laravel', 'Debugging', 'Maintenance', 'Collaboration'],
    description:
      'Pekerjaan maintenance dan pengembangan lanjutan pada codebase Laravel yang sudah berjalan di lingkungan kerja.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8DD16f403gBXtWityb2pTF8QaA_Ztlpv1TpENVfSKsqby8uztdfV0yFPhxQVc9eTHlkDpXzssuf_5IQfqApojrHfXsWG3r4YwCiUMWX7gWlx4fm3ojSVwcNRbZ516e_B_iUcwBLUz_FX5G-bKZ2qmXkmOIn9B1J-gBkIO4XWoVTUZ1nImUdP496CkpdjkpMa5wkktaO9NQx5Aj1qYBg8bHM1QaOMJUOF6AFlIrTF8_EC6ecRBZEr1IzNn1AwD7yAEphAp5AmQ0qg',
    alt: 'Aktivitas maintenance dan enhancement aplikasi',
    summary:
      'Fokus pada perbaikan bug, penyesuaian fitur, dan pengembangan tambahan berdasarkan kebutuhan user.',
    problem:
      'Sistem yang sudah digunakan user membutuhkan pemeliharaan berkala agar tetap stabil dan relevan dengan kebutuhan operasional.',
    solution:
      'Saya membantu melakukan debugging, maintenance fitur, dan enhancement bertahap berdasarkan feedback pengguna dan kebutuhan tim.',
    impact:
      'Stabilitas aplikasi terjaga dan fitur dapat terus berkembang sesuai kebutuhan operasional.',
    year: '2025',
  },
]

export const featuredExperiment = {
  title: 'Sedang Saya Kembangkan',
  description:
    'Saat ini saya juga sedang mengembangkan sistem ticketing internal dengan status workflow dan pelacakan request agar proses kerja lebih terstruktur.',
  icon: 'auto_awesome',
  status: 'Status: Dalam Pengembangan (67%)',
  progress: 67,
  cta: 'Lihat Perkembangan',
}

export const worksPageContent = {
  title: 'Project',
  highlight: 'Pilihan',
  titleSuffix: '& Pengalaman Teknis',
  description:
    'Beberapa project dan pengalaman teknis yang menggambarkan cara saya membangun sistem internal, API, dan aplikasi web berbasis Laravel.',
  role: 'Fullstack Developer',
  scrollLabel: 'Scroll untuk melihat',
}

export const worksCta = {
  title: 'Ingin tahu lebih banyak?',
  description:
    'Saya juga memiliki pengalaman magang, project internal, dan pengembangan sistem yang bisa saya ceritakan lebih lanjut saat sesi diskusi.',
  primary: 'Kunjungi GitHub',
  secondary: 'Ajak Diskusi',
}

export const aboutContent = {
  eyebrow: 'Tentang Saya',
  title: 'Developer yang fokus pada sistem yang rapi, terstruktur, dan berguna.',
  description:
    'Saya nyaman bekerja pada pengembangan backend Laravel, desain database relasional, REST API, dan pengembangan fitur untuk kebutuhan aplikasi internal. Saya juga terbiasa belajar dari codebase yang sudah ada lalu mengembangkannya secara bertahap.',
}

export const contactContent = {
  eyebrow: 'Kontak',
  title: 'Mari bangun sesuatu yang bermanfaat bersama.',
  description:
    'Jika kamu punya peluang kerja, project freelance, atau ingin berdiskusi seputar backend dan Laravel, saya siap terhubung.',
  primary: {
    label: 'Kirim Email',
    href: 'mailto:aldyimam03@gmail.com',
  },
  secondary: {
    label: 'Lihat Project',
    to: '/work',
  },
}

export const contactPageContent = {
  title: 'Mari bangun',
  highlight: 'sesuatu',
  suffix: 'yang keren.',
  description:
    'Saat ini saya terbuka untuk peluang kerja baru, freelance, maupun kolaborasi project. Kalau kamu ingin berdiskusi atau sekadar menyapa, saya akan senang menerima pesanmu.',
  socialLinks: [
    { icon: 'github', tone: 'primary', label: 'GitHub', href: 'https://github.com/aldyimam03' },
    {
      icon: 'linkedin',
      tone: 'secondary',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aldyimamwijaya',
    },
    {
      icon: 'portfolio',
      tone: 'tertiary',
      label: 'Portfolio',
      href: 'https://aldyimam03.github.io/portof-tailwind-css/',
    },
  ],
  resume: {
    title: 'Unduh CV',
    updated: 'Update terbaru: CV Laravel sementara',
    cta: 'Resume.pdf',
  },
  form: {
    fields: {
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      subject: 'Keperluan',
      message: 'Pesan',
    },
    placeholder: {
      name: 'Nama kamu',
      email: 'emailkamu@example.com',
      message: 'Ceritakan kebutuhan atau project kamu...',
    },
    options: [
      'Peluang Kerja',
      'Kolaborasi Project',
      'Diskusi Teknis',
      'Sekadar Menyapa',
    ],
    submit: 'Kirim Pesan',
  },
  responseNote: 'Rata-rata respon: < 24 jam',
  footerBadge: 'Masih berbasis CV Laravel sementara, versi global akan saya lengkapi berikutnya.',
}

export const socialIcons = [
  { icon: 'github', href: 'https://github.com/aldyimam03', label: 'GitHub Aldy' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/aldyimamwijaya', label: 'LinkedIn Aldy' },
  { icon: 'portfolio', href: 'https://aldyimam03.github.io/portof-tailwind-css/', label: 'Portfolio Aldy' },
  { icon: 'email', href: 'mailto:aldyimam03@gmail.com', label: 'Kirim email ke Aldy' },
  { icon: 'top', href: '#home', label: 'Kembali ke atas' },
]

export const allProjects = [...featuredProjects, ...workShowcaseProjects]
