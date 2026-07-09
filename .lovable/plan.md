# Publicar na Vercel

## Problema

Hoje o projeto compila para **Cloudflare Workers** (preset padrão do `@lovable.dev/vite-tanstack-config` via Nitro). A Vercel não reconhece esse output e devolve `404: NOT_FOUND` (a página de erro que você mandou é da própria Vercel, não do app).

Para rodar na Vercel, o Nitro precisa gerar o output no formato `.vercel/output/` (Build Output API v3).

## O que vou fazer

1. **Trocar o preset de deploy para Vercel** em `vite.config.ts`, passando `nitro: { preset: "vercel" }` (ou `vercel-edge` se preferir edge runtime) para o `@lovable.dev/vite-tanstack-config`.
2. **Adicionar `vercel.json`** mínimo apontando para o output do Nitro, caso a Vercel não detecte automaticamente.
3. **Atualizar `package.json`** se necessário para expor o script `build` que a Vercel executa (`vite build`).
4. **Documentar variáveis de ambiente** que você precisa configurar no dashboard da Vercel:
   - Se usar Lovable Cloud/AI: `LOVABLE_API_KEY`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (essas hoje são injetadas automaticamente pela Lovable — na Vercel você precisa copiar manualmente).
   - Qualquer `VITE_*` usada no client.

## Detalhes técnicos

- Nitro suporta nativamente o preset `vercel` — ele gera `.vercel/output/functions/` + `.vercel/output/static/` que a Vercel entende sem config extra.
- SSR continua funcionando (as rotas TanStack Start viram uma Serverless Function `__nitro.func`).
- O wrapper de erro em `src/server.ts` continua válido — o preset Nitro-Vercel usa o mesmo entry.
- **Atenção**: se este projeto usa Lovable Cloud, a integração de auth/DB **não é portada automaticamente** — as chaves do Supabase precisam ser configuradas manualmente no painel da Vercel. Não vou conseguir testar o deploy da Vercel a partir daqui; você faz o `git push` e a Vercel builda.

## Riscos / limitações

- O template Lovable é otimizado para hosting Cloudflare da Lovable. Mudanças em `vite.config.ts` para trocar o preset **podem ser sobrescritas** em updates futuros do template.
- Recursos como injeção automática de secrets do Lovable Cloud **não funcionam na Vercel** — você gerencia as env vars manualmente.
- Recomendo fortemente usar o Publish da Lovable (que já funciona no seu domínio `drambiental.viision.com.br`), mas seguimos com Vercel conforme você pediu.

## Arquivos alterados

- `vite.config.ts` — adicionar `nitro.preset = "vercel"`
- `vercel.json` (novo, se necessário)
