## Problema

O logo (e outros assets) usam URLs do tipo `/__l5e/assets-v1/...` — essa é a **infraestrutura de assets da Lovable** (Cloudflare R2 servida pelo runtime da Lovable). Quando o site é deployado na Vercel, esse endpoint **não existe**, então o `<img src="/__l5e/...">` retorna 404 e o logo não aparece.

Os arquivos `.asset.json` no projeto são apenas **ponteiros** para o CDN da Lovable, não os binários reais.

## Assets afetados

Todos os `.asset.json` do projeto:
- `src/assets/logo-horizontal.png.asset.json` (usado no `SiteHeader`)
- `src/assets/logo-stacked.png.asset.json`
- (verificar se há outros usados em Hero, About, etc.)

## Solução

Baixar os binários do CDN da Lovable e servir localmente pela Vercel:

1. Para cada `.asset.json`, baixar o PNG real da URL absoluta (`https://<preview>.lovable.app/__l5e/...`) para `public/assets/` no repositório.
2. Substituir os imports `import logo from "@/assets/logo-horizontal.png.asset.json"` + `logo.url` por caminho estático `"/assets/logo-horizontal.png"` (ou import direto via Vite `import logo from "@/assets/logo-horizontal.png"`).
3. Remover os arquivos `.asset.json` (opcional — podem ficar sem uso, mas é mais limpo remover).

## Impacto

- **No Lovable**: continua funcionando (arquivos servidos via `/public` pelo Vite).
- **Na Vercel**: passa a funcionar (arquivos incluídos no build estático).
- **Componentes alterados**: `SiteHeader.tsx` e qualquer outro que referencie `.asset.json`.

## Verificação

Após implementar, checar via `rg "asset.json"` que não restou referência, e listar `public/assets/` para confirmar os binários.
