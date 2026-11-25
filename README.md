# Viviane DaSilva — Site de listings

Site estático (HTML/CSS/JS, sem build), seguindo o Brand Book 2026: paleta Coastal Mist, Jost + Cormorant Garamond, arco como moldura e EN · PT · ES.

- Header e footer são montados por `assets/js/main.js` (iguais em todas as páginas): barra com telefone, e-mail, LinkedIn, Instagram e WhatsApp + menu com Property Search, Contato e Safety Products
- `index.html`: home com hero (botões "Quero comprar" → busca e "Quero vender" → venda), abordagem, sobre, bairros, Private Collection e contato
- `search.html`: busca de imóveis com filtros, lista e mapa (Lista / Misto / Mapa). Os dados vêm de `assets/js/idx.js`
- `sell.html`: página de venda (avaliação), com o telefone/WhatsApp da Viviane
- `contact.html`: página de contato
- `safety.html`: Safety Products (VECTOR–01). Todos os WhatsApp do conteúdo vão para `SITE.safetyWhatsapp` (+1 844 428-3515)
- `residence.html?id=<slug>&lang=<en|pt|es>`: página de cada empreendimento, com galeria e lightbox
- `assets/js/listings.js`: dados dos 5 empreendimentos. `deal` (`sale`, `rent`, `sold`) define o status na busca; `geo` é a posição (aproximada) no mapa
- `assets/js/idx.js`: fonte de dados da busca. Hoje usa os empreendimentos curados; quando o MLS liberar o IDX, implementar `IDX.fetch()` devolvendo registros no mesmo formato
- `assets/js/i18n.js`: textos nos três idiomas e os **contatos** (`window.SITE`)
- `assets/img/<slug>/`: fotos em WebP (versão grande + `-sm`)

Para rodar localmente, sirva a pasta com qualquer servidor estático (por exemplo `npx serve .`).

## Antes de publicar
1. Em `assets/js/i18n.js`, preencher em `window.SITE`: URLs do LinkedIn e Instagram, nome da brokerage e número da licença
2. Conectar o IDX/MLS em `assets/js/idx.js` (com o disclaimer exigido pelo MLS)
3. Ligar os formulários (contato, venda e Private Collection) a um serviço (Formspree, CRM etc.). Hoje eles só mostram a mensagem de confirmação.
4. Trocar o placeholder da seção "Sobre" pelo retrato da Viviane
5. Validar títulos e textos legais com a brokerage
6. Conferir os dados de Bay Harbor Towers e Villa Miami com os fact sheets oficiais
