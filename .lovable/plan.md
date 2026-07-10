## Objetivo
Conectar https://www.doutorambiental.com.br ao Google Search Console (GSC) da sua conta Google já conectada no Lovable, para monitorar indexação e corrigir findings de SEO restantes.

## Passos

1. **Gerar token de verificação META** via API do Site Verification usando a conexão existente ("Jefferson's Google Search Console").

2. **Adicionar meta tag no `<head>`** em `src/routes/__root.tsx`:
   ```html
   <meta name="google-site-verification" content="<TOKEN>" />
   ```

3. **Publicar o site na Vercel** (você precisa fazer o deploy para a tag ficar visível no domínio real — sem isso o Google não consegue verificar).

4. **Chamar a API de verificação** do Google confirmando que a tag está presente em `https://www.doutorambiental.com.br/`.

5. **Adicionar a propriedade ao Search Console** (PUT em `/sites/...`) para aparecer na lista de propriedades da sua conta.

6. **Submeter o sitemap** `https://www.doutorambiental.com.br/sitemap.xml` ao GSC.

7. **Rodar URL Inspection** na home para confirmar que está indexável e reportar status atual (cobertura, mobile, rich results).

8. **Rerodar o scan de SEO** no Lovable e passar pelos findings restantes com dados reais do GSC em mãos.

## Observações
- A meta tag de verificação precisa estar no HTML entregue pelo domínio final (www.doutorambiental.com.br), não só no preview Lovable. Então entre o passo 2 e 4 você faz o deploy na Vercel.
- Se o domínio já estiver verificado por outro método (ex.: DNS), pulamos direto ao passo 5.
