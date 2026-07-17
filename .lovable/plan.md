# Favicon com o escudo original

## O que foi constatado
- Você enviou a imagem original do logo (`STORY_copy.jpg`) e quer usar apenas o escudo com a máscara de gás como favicon.
- O favicon atual em `public/favicon.png` foi gerado artificialmente; será substituído por uma versão recortada do logo original.

## Plano
1. **Extrair o escudo** — Recortar apenas a parte do escudo/máscara da imagem original `STORY_copy.jpg`, removendo o texto "DOUTOR AMBIENTAL" e demais elementos.
2. **Formatar como favicon** — Redimensionar para 512x512 px, mantendo proporção e fundo transparente ou cor sólida da marca (#002629), conforme o que ficar melhor.
3. **Salvar em `public/favicon.png`** — Substituir o arquivo atual.
4. **Manter a referência no `<head>`** — O link em `src/routes/__root.tsx` continua apontando para `/favicon.png`.
5. **Build e publicação** — Rodar `bun run build` e publicar para aplicar no site ao vivo.

Quer que eu prossiga com o escudo do logo original como favicon?