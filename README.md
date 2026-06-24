# 🚀 Site Pessoal — React.js + Vite + Bootstrap

Trabalho Final de Interface Humano-Computador · IFSC

---

## ▶️ Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:5173
```

---

## ✏️ Como personalizar

**Edite apenas o arquivo `src/data/data.js`** — todos os dados pessoais ficam lá:

| Campo | O que mudar |
|-------|-------------|
| `personal` | Nome, bio, e-mail, links, foto |
| `skills` | Tecnologias e percentual de domínio |
| `experiences` | Experiências profissionais |
| `education` | Formação acadêmica |
| `certifications` | Cursos e certificados |
| `projects` | Projetos do portfólio |

### Sua foto
Substitua o campo `avatar` em `personal` pela URL da sua foto.  
Dica: suba a foto no seu GitHub e use o link direto.

### Currículo em PDF (opcional)
Coloque o arquivo `curriculo.pdf` dentro da pasta `public/` e o botão de download vai funcionar automaticamente.

---

## 🌐 Deploy no GitHub Pages

### Passo 1 — Crie o repositório no GitHub
```
Nome sugerido: portfolio
```

### Passo 2 — Atualize o vite.config.js
Altere a variável `REPO_NAME` para o nome exato do seu repositório:
```js
const REPO_NAME = '/portfolio'; // ← coloque o nome do seu repo aqui
```

### Passo 3 — Primeiro commit
```bash
git init
git add .
git commit -m "primeiro commit"
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

### Passo 4 — Deploy
```bash
npm run deploy
```

### Passo 5 — Ative o GitHub Pages
1. Abra o repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Branch**, selecione `gh-pages` → `/root` → **Save**
4. Aguarde ~2 minutos e acesse `https://SEU_USUARIO.github.io/NOME_DO_REPO`

---

## 📁 Estrutura do projeto

```
portfolio/
├── public/
│   └── curriculo.pdf       ← coloque seu PDF aqui (opcional)
├── src/
│   ├── data/
│   │   └── data.js         ← EDITE AQUI seus dados pessoais
│   ├── components/
│   │   └── App.jsx         ← Navbar + layout + Footer
│   ├── pages/
│   │   ├── Apresentacao.jsx ← Foto + Skills + Contato
│   │   ├── Curriculo.jsx   ← Experiência + Formação + Certs
│   │   └── Portfolio.jsx   ← Projetos (lazy-load + paginação)
│   ├── main.jsx            ← Roteamento (createBrowserRouter)
│   └── index.css           ← Estilos customizados
├── index.html
├── vite.config.js          ← Configure REPO_NAME aqui
└── package.json
```

---

## ✅ Requisitos atendidos

- [x] Vite + React 19 + Bootstrap 5 (mesmo stack do professor)
- [x] `createBrowserRouter` + `RouterProvider` (mesmo padrão do modelo)
- [x] `basename: import.meta.env.BASE_URL` (deploy correto no GitHub Pages)
- [x] Página de apresentação com foto e descrição
- [x] Lista de habilidades com ícones e barra de nível
- [x] Seção de contato com links e formulário
- [x] Currículo profissional com timeline
- [x] Formação acadêmica com timeline
- [x] Cursos e certificações
- [x] Portfólio com imagens, descrições e links
- [x] Lazy-load nas imagens do portfólio
- [x] Paginação no portfólio (componente `<Pagination>` do React-Bootstrap)
- [x] Responsivo para mobile (grid do Bootstrap)
- [x] Deploy via `npm run deploy` no GitHub Pages
