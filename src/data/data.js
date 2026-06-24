// ============================================================
//  DADOS PESSOAIS — edite este arquivo com suas informações
// ============================================================

export const personal = {
  name: "Seu Nome Aqui",
  title: "Desenvolvedor Full Stack",
  bio: "Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas no IFSC. Apaixonado por criar soluções web modernas, com foco em React.js e Node.js. Buscando minha primeira oportunidade profissional na área.",
  location: "Blumenau, SC — Brasil",
  email: "seuemail@email.com",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  // URL da sua foto (pode ser do GitHub ou outro serviço de imagem)
  avatar: "https://avatars.githubusercontent.com/u/0",
  // Coloque o arquivo do currículo em /public/curriculo.pdf
  curriculoPdf: "/curriculo.pdf",
};

export const skills = [
  { name: "React.js",     icon: "⚛️",  level: 70, category: "Frontend" },
  { name: "JavaScript",   icon: "🟨",  level: 75, category: "Frontend" },
  { name: "HTML & CSS",   icon: "🎨",  level: 85, category: "Frontend" },
  { name: "Bootstrap",    icon: "💜",  level: 70, category: "Frontend" },
  { name: "Node.js",      icon: "🟢",  level: 55, category: "Backend"  },
  { name: "Python",       icon: "🐍",  level: 60, category: "Backend"  },
  { name: "Git & GitHub", icon: "🐙",  level: 70, category: "Ferramentas" },
  { name: "SQL",          icon: "🗄️",  level: 50, category: "Banco de Dados" },
];

export const experiences = [
  {
    role: "Estagiário de Desenvolvimento Web",
    company: "Nome da Empresa",
    period: "Jan 2024 — Presente",
    description: "Desenvolvimento e manutenção de aplicações web usando React e Node.js.",
    bullets: [
      "Implementação de novas funcionalidades no frontend com React.js",
      "Integração de APIs REST no painel administrativo",
      "Redução de 30% no tempo de carregamento com otimizações de performance",
    ],
  },
  // Adicione mais experiências ou remova esta se não tiver
];

export const education = [
  {
    degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    institution: "Instituto Federal de Santa Catarina — IFSC",
    period: "2022 — 2025",
    description: "Formação em desenvolvimento de sistemas, banco de dados, engenharia de software e IHC.",
  },
  {
    degree: "Ensino Médio",
    institution: "Nome da Escola",
    period: "2019 — 2021",
    description: "",
  },
];

export const certifications = [
  { name: "React — Curso Completo",     issuer: "Udemy",      year: "2024" },
  { name: "JavaScript Moderno (ES6+)",  issuer: "Rocketseat", year: "2023" },
];

export const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Breve descrição do projeto: o que ele faz, quais tecnologias foram usadas e qual problema resolve.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+1",
    repo: "https://github.com/seu-usuario/projeto-1",
    live: "",
    pdf: "",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Breve descrição do segundo projeto. Detalhe as funcionalidades principais e o aprendizado obtido.",
    tags: ["Python", "Django", "PostgreSQL"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+2",
    repo: "https://github.com/seu-usuario/projeto-2",
    live: "https://seu-projeto.vercel.app",
    pdf: "",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição do terceiro projeto. O que foi desenvolvido, por que e quais foram os desafios.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+3",
    repo: "",
    live: "",
    pdf: "",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Mais um projeto do portfólio. Detalhe as principais funcionalidades e tecnologias utilizadas.",
    tags: ["React", "Firebase"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+4",
    repo: "https://github.com/seu-usuario/projeto-4",
    live: "",
    pdf: "",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descreva aqui o que foi desenvolvido neste projeto e o que aprendeu com ele.",
    tags: ["Vue.js", "Tailwind"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+5",
    repo: "",
    live: "",
    pdf: "",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Último projeto do portfólio. Você pode adicionar quantos quiser no array projects.",
    tags: ["React Native"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+6",
    repo: "https://github.com/seu-usuario/projeto-6",
    live: "",
    pdf: "",
  },
  {
    id: 7,
    title: "Projeto 7",
    description: "Sétimo projeto para demonstrar a paginação funcionando na página de portfólio.",
    tags: ["TypeScript", "Next.js"],
    image: "https://placehold.co/600x340/212529/6366f1?text=Projeto+7",
    repo: "",
    live: "",
    pdf: "",
  },
];
