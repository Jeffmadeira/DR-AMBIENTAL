## Contexto

A tag do Google Ads (`AW-17962686149`) e o GTM (`GTM-PCJF2W2M`) já estão instalados no site. O que falta para "tudo funcionar" são os **eventos de conversão** propriamente ditos — ou seja, sinais que dizem ao Google Ads "isso aqui foi uma conversão".

Hoje, o site só dispara o evento automático `page_view`. Nenhum botão de WhatsApp envia evento para `dataLayer` ou `gtag`, então não tem como o gestor de tráfego criar conversões no Google Ads/GTM ainda.

## Melhor abordagem

Usar **GTM + dataLayer** (opção A da análise anterior), porque:

- O GTM já está no site.
- O gestor de tráfego pode criar/modificar conversões no Google Ads sem depender de novo deploy de código.
- É mais flexível: dá para criar conversão única "WhatsApp geral" ou conversões separadas por local (Hero, FAB, serviço, rodapé).

## O que será implementado

1. **Criar helper `trackConversion`** em `src/lib/analytics.ts` (client-safe).
   - Dispara `window.dataLayer.push({ event: 'whatsapp_click', location: 'hero' | 'fab' | 'service' | 'footer' | 'cta', service?: string })`.
   - Fallback seguro se `dataLayer` não existir.

2. **Instrumentar todos os botões/links de WhatsApp do site:**
   - `Hero.tsx` — CTA "Orçamento grátis".
   - `WhatsAppFab.tsx` — botão flutuante.
   - `Services.tsx` — cada card de serviço (incluir o título do serviço no evento).
   - `SiteFooter.tsx` — telefone no rodapé.
   - `CTASection.tsx` — CTA final.

3. **Garantir que o click funcione mesmo com bloqueadores/extensions:**
   - Manter o `href` do WhatsApp funcionando.
   - Chamar o tracking no `onClick` dos links/âncoras.

4. **Publicar o site** para aplicar as mudanças.

5. **Instruções para o gestor de tráfego configurar no GTM:**
   - Criar trigger do tipo "Custom Event" com nome `whatsapp_click`.
   - Criar variáveis de dataLayer: `location` e `service`.
   - Criar tag de conversão do Google Ads usando o Conversion ID `AW-17962686149` e o Conversion Label enviado por ele.

## Não será feito neste plano

- Não adicionaremos conversão direta via `gtag('event', 'conversion', ...)` no código, porque sem o Conversion Label correto ainda não funcionaria, e toda mudança de label exigiria novo deploy. O GTM resolve isso sem mexer no código novamente.

## Resultado esperado

Após publicar, o gestor de tráfego poderá abrir o GTM/Google Tag Assistant, ver o evento `whatsapp_click` disparando no dataLayer a cada clique no WhatsApp, e finalizar a configuração das conversões no Google Ads sem precisar de mais alterações no site.