# 🏦 WealthComplex

WealthComplex é uma experiência digital inspirada na WealthSimple, construída para apresentar um portfólio de serviços financeiros modernos com animações ricas, conteúdo multilíngue e fluxos de captação de leads automatizados. O objetivo do projeto é demonstrar como criar uma landing page sofisticada, responsiva e otimizada para conversão utilizando ferramentas do ecossistema React.

---

## ✨ Principais recursos
- **Arquitetura React + Vite** com carregamento assíncrono das seções para melhorar a performance inicial.
- **Internacionalização com i18next** para oferecer conteúdo em inglês e português de forma dinâmica.
- **Design responsivo com Tailwind CSS e Sass**, incluindo tema dark e tipografia personalizada via `tailwind.config.js`.
- **Animações avançadas** usando Framer Motion, Lottie e Spline para interações suaves e experiências 3D.
- **Formulário de contato completo** com integração a EmailJS, HubSpot (leads) e Slack (notificações), além de antispam por honeypot.
- **Navegação contextual** com React Router, componente de barra de progresso e atalhos para seções estratégicas.

---

## 🛠️ Ferramentas e bibliotecas
A tabela abaixo lista as principais dependências utilizadas no projeto e o papel de cada uma.

| Categoria | Ferramenta | Uso principal |
|-----------|------------|---------------|
| Framework | [React](https://react.dev/) | Construção da interface e componentes reativos. |
| Builder | [Vite](https://vitejs.dev/) | Desenvolvimento rápido, HMR e build de produção. |
| Estilização | [Tailwind CSS](https://tailwindcss.com/) | Utilitários responsivos e tema customizado. |
| Estilização | [Sass](https://sass-lang.com/) | Estilos adicionais e organização modular. |
| Animações | [Framer Motion](https://www.framer.com/motion/) | Transições e efeitos de entrada nas seções. |
| Animações | [@lottiefiles/dotlottie-react](https://github.com/LottieFiles/dotlottie-react) | Renderização de animações Lottie. |
| Animações 3D | [@splinetool/react-spline](https://spline.design/) | Embedding de cenas interativas criadas no Spline. |
| Conteúdo dinâmico | [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/) | Gestão de traduções (arquivos em `src/locales`). |
| UI Icons | [lucide-react](https://lucide.dev/) | Ícones vetoriais consistentes no formulário e seções. |
| Carrosséis | [Swiper](https://swiperjs.com/) | Sliders responsivos para depoimentos/projetos. |
| Tipografia | [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) | Efeitos de digitação no hero. |
| Redes & APIs | [EmailJS](https://www.emailjs.com/) | Envio de e-mails do formulário sem backend próprio. |
| Redes & APIs | HubSpot CRM API | Criação de contatos e captura de leads. |
| Redes & APIs | Slack Incoming Webhooks | Notificações internas de novos contatos. |
| Testes | [Vitest](https://vitest.dev/) & [Testing Library](https://testing-library.com/) | Testes unitários e de componentes. |
| Qualidade | [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) | Padronização de código e linting. |
| Build CSS | [PostCSS](https://postcss.org/) com Autoprefixer & Nesting | Compatibilidade cross-browser e escrita aninhada. |

Todas as dependências estão declaradas em [`package.json`](./package.json).

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js 18 ou superior
- npm ou outro gerenciador compatível (os scripts abaixo assumem npm)

### Passos
```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Execute a build de produção
npm run build

# Rodar testes unitários
npm run test

# Verificar lint
npm run lint
```

Para acessar a aplicação em outros dispositivos durante o desenvolvimento, utilize `npm run host`.

---

## ⚙️ Variáveis de ambiente
Alguns recursos opcionais dependem de variáveis definidas em um arquivo `.env` na raiz do projeto:

| Variável | Descrição |
|----------|-----------|
| `VITE_EMAILJS_SERVICE_ID` | Identificador do serviço configurado no EmailJS. |
| `VITE_EMAILJS_TEMPLATE_ID` | Template usado para formatar a mensagem enviada. |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública para autenticação com o EmailJS. |
| `VITE_HUBSPOT_TOKEN` | Token de acesso à API HubSpot CRM. |
| `VITE_SLACK_WEBHOOK_URL` | URL do webhook para notificações no Slack. |

Sem esses valores a aplicação continua funcionando, mas os envios externos do formulário serão ignorados.

---

## 🧱 Estrutura geral
```
src/
├── assets/               # Imagens, vetores e animações Lottie/Spline
├── components/           # Componentes reutilizáveis (header, footer, seções, utilitários)
├── constants/            # Listas de serviços, depoimentos e dados estáticos
├── hook/                 # Hooks customizados (ex.: barra de progresso)
├── locales/              # Traduções pt/en consumidas pelo i18next
├── pages/                # Páginas principais (Home e Contact)
├── styles/               # Estilos adicionais em Sass
├── App.jsx               # Composição de layout com header/footer lazy-loaded
└── main.jsx              # Setup do React, Router e contexto de i18n
```

---

## 📌 Referências & inspiração
- Projeto baseado na estética e experiência de onboarding da WealthSimple, adaptado para o universo fictício **WealthComplex**.
- Design responsivo pensado para destacar produtos financeiros, educação em investimentos e captação de clientes premium.

---

## 🤝 Contribuição
Sinta-se à vontade para abrir _issues_ ou enviar _pull requests_. Antes disso, execute `npm run lint` e `npm run test` para garantir a qualidade do código.

---

## 📄 Licença
Este repositório está licenciado sob os termos definidos no arquivo [`LICENSE`](./LICENSE) caso existente. Caso contrário, considere-o apenas para fins educacionais e de portfólio.

---

**WealthComplex** — uma vitrine tecnológica para experiências financeiras modernas.
