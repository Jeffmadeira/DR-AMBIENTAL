# Reposicionamento da landing page — lastro Ártica, foco B2B

Mantendo a estrutura atual (mesmas seções, mesma ordem, mesmas animações e cards de pragas expansíveis), o trabalho é de **conteúdo e posicionamento**, com duas seções novas inseridas no fluxo existente.

Mensagem central: "A empresa é nova em Sorocaba, mas a experiência por trás dela não é."

## O que muda em cada seção

**1. Topo (Hero) — ajuste de texto**
- Título passa a "Controle de pragas em Sorocaba e região" com destaque dourado em "controle".
- Subtítulo assume o lastro: chegada a Sorocaba com respaldo da Ártica Saúde Ambiental, 9 anos de mercado e operações em todo o Brasil.
- A linha de selos abaixo dos botões (hoje "Certificada / Grupo Ártica") vira uma faixa de provas curtas: +150 condomínios · Indústria alimentícia · Prefeituras · ISO 9001.
- O cartão sobre a foto troca "Equipe especializada" por uma prova concreta (ex.: "9 anos de operação nacional").

**2. Nova seção: O problema** (entre o topo e os serviços)
- "Você não precisa apenas matar a praga. Precisa controlar o problema."
- Trilha visual horizontal: Inspeção → Diagnóstico → Estratégia → Controle → Acompanhamento, com animação de entrada em sequência, no mesmo estilo dos diferenciais.

**3. Serviços — acréscimo, sem mexer nos cards de pragas**
- Antes da grade de pragas atual, uma faixa com 4 tipos de ambiente: Residências, Comércios, Condomínios, Empresas e Indústrias — cada um com uma frase e botão de WhatsApp com mensagem própria.
- Os cards de pragas expansíveis continuam exatamente como estão (conteúdo indexável preservado).

**4. Nova seção: A Ártica** (substitui o papel do "Quem somos" atual)
- A seção "Quem somos" é reescrita como "A experiência da Ártica agora está em Sorocaba", mantendo o mesmo layout (foto + texto) e a foto da frota.
- Grade de números/segmentos: +150 condomínios · grandes indústrias · indústria alimentícia · granjas · prefeituras e órgãos públicos · operações em várias regiões do Brasil · ISO 9001, com contagem animada nos números.
- Fecho: "Você contrata uma empresa local, mas conta com o conhecimento de uma operação que já enfrentou grandes desafios."
- Saem daqui as frases "preço justo", "cabe no seu bolso" e afins.

**5. Diferenciais — troca de afirmação por evidência**
- Título passa a "Estrutura local. Experiência nacional."
- Os 4 cards deixam de ser "Orçamento gratuito / Produtos seguros / Atendimento rápido / Equipe especializada" e passam a: Atendimento em Sorocaba e região · Processos baseados em boas práticas e ISO 9001 · Métodos adequados a cada situação e porte · Respaldo da Ártica Saúde Ambiental.

**6. Nova faixa: Para empresas / Para residências**
- Dois blocos lado a lado, antes do FAQ.
- Empresas: "Sua empresa não pode esperar a praga virar um problema", segmentos atendidos e botão "Solicitar uma avaliação técnica".
- Residências: "Sua casa merece mais do que uma aplicação" e botão "Falar com um especialista".

**7. FAQ — reescrito**
- Saem as perguntas sobre preço e agenda. Entram as 8 perguntas da proposta (segurança para crianças e pets, necessidade de sair do ambiente, se uma aplicação basta, como identificamos a origem, atendimento a empresas e condomínios, contratos recorrentes, documentação emitida, e o que define o valor do serviço — respondida sem apelo a preço baixo).

**8. Chamada final**
- "Viu uma praga? Não espere o problema crescer." + botão "Quero falar com um especialista".

**9. Rodapé**
- Mantém o crédito ao Grupo Ártica, com a descrição ajustada ao novo posicionamento.

## Detalhes técnicos

- Arquivos alterados: `Hero.tsx`, `Services.tsx` (só o bloco novo de segmentos no topo), `Differentials.tsx`, `About.tsx` (vira seção Ártica), `FAQ.tsx`, `CTASection.tsx`, `SiteFooter.tsx`.
- Arquivos novos: `src/components/Problem.tsx` (processo em 5 etapas) e `src/components/Segments.tsx` (empresas × residências), registrados em `src/routes/index.tsx`.
- Todos os novos botões usam `waLink` + `trackWhatsAppClick` com `location` próprio, para o gestor de tráfego separar as conversões por origem (hero, empresas, residências, segmento).
- `FAQPage` em JSON-LD e a descrição/meta da home são atualizados junto com os novos textos; título e descrição passam a citar Sorocaba + respaldo nacional.
- Sem mudança de identidade visual, paleta, tipografia ou padrão de animações — as seções novas reutilizam os mesmos componentes e transições em spring já usados.
