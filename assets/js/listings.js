/* Residences — data sourced from developer fact sheets and broker materials.
   Figures are developer-provided and subject to change. Pricing on request. */
window.LISTINGS = [
  {
    id: 'st-regis-sunny-isles',
    deal: 'sale', // sale | rent | sold — used by the search tabs
    geo: [25.9466, -80.1208], // approximate — map pin
    beds: '2–4', sqft: '1,848–5,621',
    name: 'The St. Regis Residences',
    area: { en: 'Sunny Isles Beach', pt: 'Sunny Isles Beach', es: 'Sunny Isles Beach' },
    setting: { en: 'Oceanfront', pt: 'Frente para o mar', es: 'Frente al mar' },
    status: { en: 'Pre-construction · North Tower', pt: 'Na planta · Torre Norte', es: 'Preconstrucción · Torre Norte' },
    cover: 'terrace',
    images: ['terrace', 'hero', 'living', 'bedroom', 'garden', 'dusk', 'interior', 'lobby'],
    stats: [
      { v: '62', l: { en: 'Stories', pt: 'Andares', es: 'Pisos' } },
      { v: '150', l: { en: 'Residences', pt: 'Residências', es: 'Residencias' } },
      { v: '1,848–5,621', l: { en: 'Sq ft · 2–4 BD', pt: 'Sq ft · 2–4 quartos', es: 'Sq ft · 2–4 hab.' } },
      { v: '435', l: { en: 'Linear ft of beach', pt: 'Pés lineares de praia', es: 'Pies lineales de playa' } }
    ],
    summary: {
      en: 'Two towers on 4.7 oceanfront acres, with signature St. Regis service and no hotel or transient use on the property.',
      pt: 'Duas torres em 4,7 acres à beira-mar, com o serviço característico St. Regis e sem hotel ou uso transitório no condomínio.',
      es: 'Dos torres sobre 4,7 acres frente al mar, con el servicio característico St. Regis y sin hotel ni uso transitorio en la propiedad.'
    },
    body: {
      en: 'The North Tower rises 750 feet with residences of two to four bedrooms and full-floor penthouses from 7,650 to over 10,000 square feet. Architecture by Arquitectonica, interiors by Anastassiadis and landscape by EDSA. Every residence opens through a private elevator foyer to unobstructed ocean, city and Intracoastal views.',
      pt: 'A Torre Norte tem 750 pés de altura, com residências de dois a quatro quartos e penthouses de andar inteiro de 7.650 a mais de 10.000 pés quadrados. Arquitetura de Arquitectonica, interiores de Anastassiadis e paisagismo de EDSA. Cada residência tem elevador privativo e vista desimpedida para o oceano, a cidade e o Intracoastal.',
      es: 'La Torre Norte se eleva 750 pies con residencias de dos a cuatro habitaciones y penthouses de piso completo de 7.650 a más de 10.000 pies cuadrados. Arquitectura de Arquitectonica, interiores de Anastassiadis y paisajismo de EDSA. Cada residencia cuenta con ascensor privado y vistas abiertas al océano, la ciudad y el Intracoastal.'
    },
    features: {
      en: ['Private elevator and entry foyer in every residence', 'Ceiling heights clearing 10 ft; 12 ft in penthouses', 'Molteni&C Italian kitchens with Gaggenau appliances', 'Over 70,000 sq ft of amenities, managed by The St. Regis Hotel Company', 'Beach Club, Athletic Club and business club', 'Between Bal Harbour Shops and Aventura'],
      pt: ['Elevador privativo e hall de entrada em todas as residências', 'Pé-direito acima de 10 ft; 12 ft nas penthouses', 'Cozinhas italianas Molteni&C com eletrodomésticos Gaggenau', 'Mais de 70.000 sq ft de amenidades, administradas pela The St. Regis Hotel Company', 'Beach Club, Athletic Club e business club', 'Entre Bal Harbour Shops e Aventura'],
      es: ['Ascensor privado y vestíbulo en cada residencia', 'Techos de más de 10 ft; 12 ft en los penthouses', 'Cocinas italianas Molteni&C con electrodomésticos Gaggenau', 'Más de 70.000 sq ft de amenidades, administradas por The St. Regis Hotel Company', 'Beach Club, Athletic Club y business club', 'Entre Bal Harbour Shops y Aventura']
    }
  },
  {
    id: '1428-brickell',
    deal: 'sale', // sale | rent | sold — used by the search tabs
    geo: [25.7581, -80.1912], // approximate — map pin
    beds: '2–4', sqft: '1,800–4,000',
    name: 'The Residences at 1428 Brickell',
    area: { en: 'Brickell', pt: 'Brickell', es: 'Brickell' },
    setting: { en: 'Bay views', pt: 'Vista para a baía', es: 'Vista a la bahía' },
    status: { en: 'Pre-construction', pt: 'Na planta', es: 'Preconstrucción' },
    cover: 'hero',
    images: ['bay', 'hero', 'entrance', 'lobby', 'garden', 'porte'],
    stats: [
      { v: '70', l: { en: 'Stories', pt: 'Andares', es: 'Pisos' } },
      { v: '189', l: { en: 'Residences', pt: 'Residências', es: 'Residencias' } },
      { v: '1,800–4,000', l: { en: 'Sq ft · 2–4 BD + den', pt: 'Sq ft · 2–4 quartos + den', es: 'Sq ft · 2–4 hab. + den' } },
      { v: '80,000', l: { en: 'Sq ft of amenities', pt: 'Sq ft de amenidades', es: 'Sq ft de amenidades' } }
    ],
    summary: {
      en: 'A 70-story tower on Brickell Avenue with interiors by Antonio Citterio. Every residence faces east, toward the bay.',
      pt: 'Uma torre de 70 andares na Brickell Avenue com interiores de Antonio Citterio. Todas as residências voltadas para o leste, para a baía.',
      es: 'Una torre de 70 pisos en Brickell Avenue con interiores de Antonio Citterio. Todas las residencias miran al este, hacia la bahía.'
    },
    body: {
      en: 'A limited collection of 189 fully finished homes, from two bedrooms to a penthouse collection of 4,000 to 10,000 square feet. Ceilings start at 11 feet and rise to 30 feet in select residences. The façade integrates more than 20,000 square feet of energy-producing glass.',
      pt: 'Uma coleção limitada de 189 residências entregues prontas, de dois quartos até penthouses de 4.000 a 10.000 pés quadrados. Pé-direito a partir de 11 pés, chegando a 30 pés em unidades selecionadas. A fachada integra mais de 20.000 pés quadrados de vidro gerador de energia.',
      es: 'Una colección limitada de 189 residencias terminadas, de dos habitaciones a penthouses de 4.000 a 10.000 pies cuadrados. Techos desde 11 pies y hasta 30 pies en residencias seleccionadas. La fachada integra más de 20.000 pies cuadrados de vidrio generador de energía.'
    },
    features: {
      en: ['Kitchens by Antonio Citterio, crafted by Arclinea and Vaselli in Italy', 'Ceiling heights from 11 ft to 30 ft', 'Two-story residences with sculptural staircase', 'Penthouse wine storage for 600 bottles', 'Two-story Owners Club and full-floor Wellness Club', 'Porte-cochère on Brickell Avenue'],
      pt: ['Cozinhas de Antonio Citterio, produzidas por Arclinea e Vaselli na Itália', 'Pé-direito de 11 ft a 30 ft', 'Residências duplex com escada escultural', 'Adega para 600 garrafas nas penthouses', 'Owners Club em dois andares e Wellness Club de andar inteiro', 'Porte-cochère na Brickell Avenue'],
      es: ['Cocinas de Antonio Citterio, fabricadas por Arclinea y Vaselli en Italia', 'Techos de 11 ft a 30 ft', 'Residencias dúplex con escalera escultórica', 'Cava para 600 botellas en los penthouses', 'Owners Club de dos pisos y Wellness Club de piso completo', 'Porte-cochère en Brickell Avenue']
    }
  },
  {
    id: 'cipriani-residences',
    deal: 'sale', // sale | rent | sold — used by the search tabs
    geo: [25.7591, -80.1937], // approximate — map pin
    name: 'Cipriani Residences Miami',
    area: { en: 'Brickell', pt: 'Brickell', es: 'Brickell' },
    setting: { en: 'Biscayne Bay views', pt: 'Vista para Biscayne Bay', es: 'Vista a Biscayne Bay' },
    status: { en: 'Pre-construction', pt: 'Na planta', es: 'Preconstrucción' },
    cover: 'hummingbird',
    images: ['hummingbird', 'pool', 'aerialpool', 'restaurant', 'view', 'skyline'],
    stats: [
      { v: '80', l: { en: 'Stories', pt: 'Andares', es: 'Pisos' } },
      { v: '397', l: { en: 'Residences', pt: 'Residências', es: 'Residencias' } },
      { v: '10 ft', l: { en: 'Ceiling heights', pt: 'Pé-direito', es: 'Altura de techos' } },
      { v: '1420', l: { en: 'South Miami Ave', pt: 'South Miami Ave', es: 'South Miami Ave' } }
    ],
    summary: {
      en: 'An 80-story tower with a curved, cascading glass façade, and the service standard Cipriani has refined since Harry’s Bar in 1931.',
      pt: 'Uma torre de 80 andares com fachada de vidro curva e escalonada, e o padrão de serviço que a Cipriani refina desde o Harry’s Bar, em 1931.',
      es: 'Una torre de 80 pisos con fachada de vidrio curva y escalonada, y el estándar de servicio que Cipriani perfecciona desde el Harry’s Bar en 1931.'
    },
    body: {
      en: 'A collection of 397 residences, including penthouses with private pools, designed by Arquitectonica in collaboration with Cipriani. Residents have access to round-the-clock dining by Cipriani, in-residence or in private dining rooms, and a 24-hour staff trained by Cipriani.',
      pt: 'Uma coleção de 397 residências, incluindo penthouses com piscina privativa, projetadas por Arquitectonica em parceria com a Cipriani. Os moradores contam com serviço de gastronomia Cipriani 24 horas, na residência ou em salas de jantar privativas, e equipe treinada pela Cipriani.',
      es: 'Una colección de 397 residencias, incluidos penthouses con piscina privada, diseñadas por Arquitectonica junto a Cipriani. Los residentes cuentan con servicio gastronómico Cipriani las 24 horas, en la residencia o en comedores privados, y personal formado por Cipriani.'
    },
    features: {
      en: ['Floor-to-ceiling glass and terraces from living room and primary bedroom', 'Custom Italian cabinetry in the Cipriani style', 'Wolf and Sub-Zero appliances, including wine cooler', 'Direct elevator entry in select residences', 'Resident-only dining services by Cipriani', 'Views of Biscayne Bay, Brickell and Coconut Grove'],
      pt: ['Vidros do piso ao teto e terraços na sala e na suíte principal', 'Marcenaria italiana sob medida no estilo Cipriani', 'Eletrodomésticos Wolf e Sub-Zero, incluindo adega', 'Elevador direto na unidade em residências selecionadas', 'Gastronomia Cipriani exclusiva para moradores', 'Vista para Biscayne Bay, Brickell e Coconut Grove'],
      es: ['Vidrios de piso a techo y terrazas desde la sala y la habitación principal', 'Carpintería italiana a medida en el estilo Cipriani', 'Electrodomésticos Wolf y Sub-Zero, incluida cava', 'Ascensor directo en residencias seleccionadas', 'Gastronomía Cipriani exclusiva para residentes', 'Vistas a Biscayne Bay, Brickell y Coconut Grove']
    }
  },
  {
    id: 'bay-harbor-towers',
    deal: 'sale', // sale | rent | sold — used by the search tabs
    geo: [25.8873, -80.1325], // approximate — map pin
    name: 'Bay Harbor Towers',
    area: { en: 'Bay Harbor Islands', pt: 'Bay Harbor Islands', es: 'Bay Harbor Islands' },
    setting: { en: 'Intracoastal', pt: 'Intracoastal', es: 'Intracoastal' },
    line: { en: 'Boutique waterfront · Private launch dock', pt: 'Boutique à beira d’água · Píer privativo', es: 'Boutique frente al agua · Muelle privado' },
    status: { en: 'Pre-construction', pt: 'Na planta', es: 'Preconstrucción' },
    cover: 'hero',
    images: ['hero', 'aerial', 'kitchen', 'bedroom', 'pool', 'garden', 'bath', 'facade', 'rooftop'],
    stats: [
      { v: '55 ft', l: { en: 'Rooftop infinity pool', pt: 'Piscina infinita no rooftop', es: 'Piscina infinita en rooftop' } },
      { v: '2', l: { en: 'Pools · rooftop & indoor', pt: 'Piscinas · rooftop e coberta', es: 'Piscinas · rooftop y cubierta' } },
      { v: '1', l: { en: 'Water sports dock', pt: 'Píer para esportes náuticos', es: 'Muelle de deportes náuticos' } }
    ],
    summary: {
      en: 'A low-rise waterfront residence on the Intracoastal, minutes from Bal Harbour, with a rooftop pool and a private launch dock.',
      pt: 'Um residencial baixo à beira do Intracoastal, a minutos de Bal Harbour, com piscina no rooftop e píer privativo.',
      es: 'Un residencial de baja altura frente al Intracoastal, a minutos de Bal Harbour, con piscina en el rooftop y muelle privado.'
    },
    body: {
      en: 'Set on the water in the quiet town of Bay Harbor Islands, the residences pair warm, light interiors with direct access to the Intracoastal. Amenities include a rooftop oasis with a 55-foot infinity-edge pool, an indoor pool, a landscaped hammock garden and a water sports launch dock.',
      pt: 'À beira d’água na tranquila Bay Harbor Islands, as residências combinam interiores claros e acolhedores com acesso direto ao Intracoastal. Entre as amenidades: rooftop com piscina infinita de 55 pés, piscina coberta, jardim de redes e píer para esportes náuticos.',
      es: 'Junto al agua en la tranquila Bay Harbor Islands, las residencias combinan interiores luminosos y cálidos con acceso directo al Intracoastal. Las amenidades incluyen un rooftop con piscina infinita de 55 pies, piscina cubierta, jardín de hamacas y muelle de deportes náuticos.'
    },
    features: {
      en: ['Rooftop with 55-ft infinity-edge pool', 'Indoor pool with water views', 'Landscaped hammock garden', 'Water sports launch dock', 'Light interiors in stone and washed wood', 'Walking distance to Bal Harbour Shops'],
      pt: ['Rooftop com piscina infinita de 55 ft', 'Piscina coberta com vista para a água', 'Jardim de redes com paisagismo', 'Píer para esportes náuticos', 'Interiores claros em pedra e madeira lavada', 'A poucos passos do Bal Harbour Shops'],
      es: ['Rooftop con piscina infinita de 55 ft', 'Piscina cubierta con vista al agua', 'Jardín de hamacas', 'Muelle de deportes náuticos', 'Interiores luminosos en piedra y madera lavada', 'A pasos de Bal Harbour Shops']
    }
  },
  {
    id: 'villa-miami',
    deal: 'sale', // sale | rent | sold — used by the search tabs
    geo: [25.7985, -80.1862], // approximate — map pin
    name: 'Villa Miami',
    area: { en: 'Edgewater', pt: 'Edgewater', es: 'Edgewater' },
    setting: { en: 'Bayfront', pt: 'Frente para a baía', es: 'Frente a la bahía' },
    line: { en: 'Half- and full-floor residences', pt: 'Residências de meio andar e andar inteiro', es: 'Residencias de medio piso y piso completo' },
    status: { en: 'Under construction · Sales gallery open', pt: 'Em construção · Sales gallery aberta', es: 'En construcción · Sales gallery abierta' },
    cover: 'jan-7',
    images: ['jan-7', 'jan-35', 'jan-30', 'jan-38', 'jan-14-edit', 'jan-25-edit', 'jan-3', 'jan-18-edit'],
    stats: [
      { v: '½ · 1', l: { en: 'Floor per residence', pt: 'Andar por residência', es: 'Piso por residencia' } },
      { v: 'Bayfront', l: { en: 'Edgewater, Miami', pt: 'Edgewater, Miami', es: 'Edgewater, Miami' } },
      { v: 'By appt.', l: { en: 'Sales gallery visits', pt: 'Visitas à sales gallery', es: 'Visitas a la sales gallery' } }
    ],
    summary: {
      en: 'Half- and full-floor bayfront residences in Edgewater, developed by Terra and One Thousand Group.',
      pt: 'Residências de meio andar e andar inteiro de frente para a baía em Edgewater, da Terra e One Thousand Group.',
      es: 'Residencias de medio piso y piso completo frente a la bahía en Edgewater, de Terra y One Thousand Group.'
    },
    body: {
      en: 'A boutique tower on Biscayne Bay with residences conceived as private villas in the sky: rounded living rooms open to the water, kitchens in deep green lacquer and marble, and bathrooms lined in veined stone. The model residences can be visited by appointment at the sales gallery.',
      pt: 'Uma torre boutique em Biscayne Bay com residências pensadas como villas privadas no alto: salas arredondadas abertas para a água, cozinhas em laca verde-profundo e mármore, e banheiros revestidos em pedra veiada. As residências decoradas podem ser visitadas com hora marcada na sales gallery.',
      es: 'Una torre boutique en Biscayne Bay con residencias concebidas como villas privadas en altura: salas redondeadas abiertas al agua, cocinas en laca verde profundo y mármol, y baños revestidos en piedra veteada. Las residencias modelo pueden visitarse con cita en la sales gallery.'
    },
    features: {
      en: ['Half-floor and full-floor residences', 'Panoramic Biscayne Bay views', 'Chef’s kitchens with professional ranges', 'Primary baths with freestanding tubs in veined stone', 'Residents’ bar and lounge', 'Private tours of the sales gallery by appointment'],
      pt: ['Residências de meio andar e andar inteiro', 'Vista panorâmica de Biscayne Bay', 'Cozinhas de chef com fogões profissionais', 'Banheiros principais com banheira livre em pedra veiada', 'Bar e lounge para moradores', 'Visitas privadas à sales gallery com hora marcada'],
      es: ['Residencias de medio piso y piso completo', 'Vistas panorámicas a Biscayne Bay', 'Cocinas de chef con estufas profesionales', 'Baños principales con bañera exenta en piedra veteada', 'Bar y lounge para residentes', 'Visitas privadas a la sales gallery con cita']
    }
  }
];
