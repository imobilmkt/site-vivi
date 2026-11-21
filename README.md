# Viviane DaSilva — Site de listings

Site estático (HTML/CSS/JS, sem build), seguindo o Brand Book 2026: paleta Coastal Mist, Jost + Cormorant Garamond, arco como moldura e EN · PT · ES.

- `index.html`: home com hero (com busca: À venda / Para alugar / Vendidos), residências em destaque, compradores internacionais, bairros, sobre, Private Collection e contato
- `residence.html?id=<slug>&lang=<en|pt|es>`: página de cada empreendimento, com galeria e lightbox
- `assets/js/listings.js`: dados dos 5 empreendimentos (vindos dos fact sheets). O campo `deal` (`sale`, `rent` ou `sold`) define em qual aba da busca cada imóvel aparece
- `assets/js/i18n.js`: textos nos três idiomas e os **contatos** (`window.SITE`)
- `assets/img/<slug>/`: fotos em WebP (versão grande + `-sm`)

Para rodar localmente, sirva a pasta com qualquer servidor estático (por exemplo `npx serve .`).

## Antes de publicar
1. Em `assets/js/i18n.js`, trocar os dados de `window.SITE`: telefone, WhatsApp, e-mail, nome da brokerage e número da licença
2. Ligar os formulários de contato e da Private Collection a um serviço (Formspree, CRM etc.). Hoje eles só mostram a mensagem de confirmação.
3. Trocar o placeholder da seção "Sobre" pelo retrato da Viviane
4. Validar títulos e textos legais com a brokerage
5. Conferir os dados de Bay Harbor Towers e Villa Miami com os fact sheets oficiais
