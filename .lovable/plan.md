# Favicon da Doutor Ambiental

## O que foi constatado
- O site não tem favicon configurado em `src/routes/__root.tsx`.
- A pasta `public/` não contém nenhum arquivo de favicon.
- Existem logos da marca em `public/assets/logo-horizontal.png` e `public/assets/logo-stacked.png`.

## Plano
1. **Gerar favicon** — Criar uma versão quadrada e legível do escudo da marca (máscara de gás com shield), otimizada para 32px/16px, usando a identidade visual verde-escuro e dourada existente.
2. **Salvar em `public/`** — Colocar o arquivo como `public/favicon.png` para servir diretamente na raiz do site.
3. **Referenciar no `<head>`** — Adicionar `{ rel: "icon", type: "image/png", href: "/favicon.png" }` ao array `links` do `head()` em `src/routes/__root.tsx`.
4. **Verificar build** — Rodar `bun run build` para garantir que o arquivo é servido corretamente e não há erros.
5. **Publicar** — Publicar a nova versão para que o favicon apareça no domínio ao vivo.

## Decisão rápida
Quer que eu gere o favicon a partir do escudo do logo existente, ou prefere enviar um arquivo favicon próprio?