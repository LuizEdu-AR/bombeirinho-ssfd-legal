# Bombeirinho SSFD — Site de documentos legais

Projeto em **React + Vite**, preparado para deploy estático na **Vercel**.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Organização

```text
src/
  components/    # Cabeçalho, rodapé, cards e seções reutilizáveis
  data/          # Dados e informações do responsável
  pages/         # Página inicial, Termos, Privacidade e 404
  routes/        # Rotas do React Router
  styles/        # CSS global e responsivo
  App.jsx        # Layout e roteamento
  main.jsx       # Inicialização do React
```

## Vercel

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

O arquivo `vercel.json` mantém as rotas funcionando ao atualizar a página.

## URLs

- `/`
- `/termos-de-uso/`
- `/politica-de-privacidade/`

## Antes da publicação definitiva

Os textos legais foram preservados do site anterior e continuam **minutas**.
Confirme retenção e exclusão dos dados, permissões de acesso, eventuais
transferências internacionais e responsabilidades legais. O conteúdo não
substitui revisão jurídica.
