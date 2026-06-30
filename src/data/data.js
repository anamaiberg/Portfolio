export const personal = {
  name: "Ana Clara Maiberg",
  title: "Analista de Mídias Pagas Internacional",
  bio: "Estudante de Tecnologia em Análise e Desenvolvimento de Sistemas no IFSC. Inglês fluente.",
  location: "Blumenau, SC — Brasil",
  email: "ana.maibergx@gmail.com",
  github: "https://github.com/anamaiberg",
  linkedin: "https://linkedin.com/in/ana-clara-maiberg",
  avatar: "https://github.com/anamaiberg.png",
  curriculoPdf: `${import.meta.env.BASE_URL}curriculo.pdf`,
};

export const experiences = [
  {
    role: "Analista de Mídias Pagas Internacional",
    company: "Monks",
    period: "Mar 2026 — Atual",
    description: "Analista de Mídias Pagas Internacional responsável pela criação de anúncios e análises de mídia.",
  },
  {
    role: "Analista de QA",
    company: "Pilar Sistemas",
    period: "Jul 2024 — Set 2025",
    description: "Analista de QA com foco em testes manuais de sistemas web e desktop. Responsável pela criação de casos de teste, documentação, manuais ao cliente e apoio ao time de desenvolvimento. Iniciei a estruturação da área de QA e a implementação de testes automatizados com Playwright e Python.",
  },
];

export const education = [
  {
    degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    institution: "Instituto Federal de Santa Catarina — IFSC",
    period: "2024 — 2026",
  },
];

export const certifications = [
  { name: "Programação em Python",     issuer: "Entra21 (Proway)",      year: "480h (2022)" },
  { name: "Teste de Software Manual: Do Planejamento à Execução ",  issuer: "Qualiters Club - Udemy", year: "17h 45min (2024)" },
  { name: "7° Maratona de CiberEducação: Introdução à Cibersegurança",  issuer: "Cisco Networking Academy", year: "27h (2023)" },
];

export const projects = [
  {
    id: 1,
    title: "Mamba Searcher",
    description: "O projeto Mamba consiste em um website feito em Django que age como um 'super buscador' de currículos, filtrando-os conforme a necessidade da vaga de determinada empresa.",
    tags: ["Python"],
    image: `${import.meta.env.BASE_URL}images/mamba.png`,
    repo: "https://github.com/anamaiberg/mamba-searcher",
  },
  {
    id: 2,
    title: "Bloco de Notas",
    description: "",
    tags: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}images/notes.webp`,
    repo: "https://github.com/anamaiberg/Bloco-de-Notas-Projeto-",
  },
  {
    id: 3,
    title: "Calculadora",
    description: "",
    tags: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}images/calc.webp`,
    repo: "https://github.com/anamaiberg/Calculadora-Projeto-",
  },
  {
    id: 4,
    title: "Buscador de Filmes",
    description: "",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "${import.meta.env.BASE_URL}images/search.jpg",
    repo: "https://github.com/anamaiberg/Buscador-de-Filmes-Projeto-",
  },
  {
    id: 5,
    title: "Cronômetro",
    description: "",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "${import.meta.env.BASE_URL}images/cronometro.jpeg",
    repo: "https://github.com/anamaiberg/Cronometro-Projeto-",
  },
  {
    id: 6,
    title: "GatoLock",
    description: "",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "${import.meta.env.BASE_URL}images/gato.jpeg",
    repo: "https://github.com/anamaiberg/GatoLock-PCD",
  },
];
