# Plano: Refinar seção "Nossos serviços"

## 1. Nova ordem e textos dos cards

1. **Controle de Escorpiões** — badge "Alerta de Infestação" (substitui "Mais procurado"), mantém destaque dourado
2. **Dedetização de Baratas**
3. **Desratização**
4. **Descupinização** (renomeado de "Dedetização de Cupins")
5. **Controle de Aranhas** (novo)
6. **Controle de Percevejos** (novo)
7. **Controle de Moscas** (novo)
8. **Controle de Pulgas** (novo)
9. **Controle de Carrapatos** (novo)
10. **Dedetização de Formigas**
11. **Controle de Pombos**
12. **Controle de Morcegos**
13. **Limpeza de Caixa d'Água**
14. **Sanitização de Ambientes**

## 2. Cards mais compactos

Reduzir padding (`p-7` → `p-5`), ícone (`size-12` → `size-10`), título (`text-xl` → `text-base`), descrição encurtada para 1 linha (~60 caracteres), espaçamentos verticais menores. Resultado: cards ~40% mais curtos, rolagem mais ágil. Grid passa a `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` para densificar.

## 3. Ícones temáticos (parecidos com a praga)

A biblioteca lucide-react atual não tem ícones de escorpião, barata, cupim, aranha, percevejo, mosca, pulga, carrapato, formiga, nem morcego. Solução: usar ícones do pacote `@lucide/lab` (que tem `bug`, `cockroach`, `spider`, `ant`, `bat`, `scorpion`, etc. como nós de ícone) renderizados via componente `<Icon iconNode={...} />` da lucide-react. Quando algum não existir no lab, criamos um SVG inline minimalista no mesmo estilo (stroke 2, currentColor) em `src/components/icons/pests.tsx`.

Mapa de ícones:
- Escorpião → `scorpion` (lab) ou SVG custom
- Baratas → `cockroach` (lab) ou SVG custom
- Desratização → `Rat` (lucide)
- Descupinização → SVG custom de cupim (corpo segmentado + antenas)
- Aranha → `spider` (lab)
- Percevejo → SVG custom (oval achatado + patas)
- Moscas → `Bug` ou SVG custom com asas
- Pulgas → SVG custom (perfil saltador)
- Carrapatos → SVG custom (corpo oval + 8 patas curtas)
- Formigas → `ant` (lab)
- Pombos → `Bird` (lucide)
- Morcegos → `bat` (lab) ou SVG custom de asas
- Caixa d'água → `Droplets` (lucide)
- Sanitização → `SprayCan` (lucide)

## 4. WhatsApp com mensagem pré-preenchida

Cada card vira um link com mensagem específica:
```
https://api.whatsapp.com/send/?phone=5515988420000&text=Olá! Gostaria de um orçamento para {Serviço}.
```
A URL é montada via `encodeURIComponent(`Olá! Gostaria de um orçamento para ${s.title}.`)` no `href`.

## Detalhes técnicos

- Instalar `@lucide/lab` (`bun add @lucide/lab`).
- Arquivo único alterado: `src/components/Services.tsx`.
- Novo arquivo (se necessário): `src/components/icons/pests.tsx` com SVGs custom no padrão lucide (24x24, stroke currentColor, strokeWidth 2).
- Manter animações framer-motion, gradiente dourado do ícone, destaque do card de escorpião (borda + glow + badge).
- Sem mudanças em outras seções, tokens ou layout global.
