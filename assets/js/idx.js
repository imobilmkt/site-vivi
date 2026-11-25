/* Property data source for search.html
   ------------------------------------------------------------------
   Today: Viviane's curated residences (listings.js).
   When the MLS / IDX feed is approved, set `connected: true`, fill in
   `mlsName` and `disclaimer`, and make `fetch()` call the IDX provider
   (or our own back-end) — returning records in the SAME shape as `curated()`.
   The search page, list and map need no other change.

   Record shape:
   { id, source: 'mls' | 'curated', deal: 'sale' | 'rent' | 'sold',
     address, sub, price (number | null), beds, baths (number | string | null),
     sqft (string | null), status, lat, lng, photo, href, listedBy, text }
*/
window.IDX = {
  connected: false,
  mlsName: '',      // e.g. 'Miami REALTORS® MLS'
  disclaimer: '',   // MLS-required IDX disclaimer text

  async fetch(query, lang) {
    return curated(lang);
  }
};

function curated(lang) {
  return LISTINGS.map((l) => ({
    id: l.id,
    source: 'curated',
    deal: l.deal || 'sale',
    address: l.name,
    sub: `${l.area[lang]} · ${l.setting[lang]}`,
    price: l.price ?? null,
    beds: l.beds ?? null,
    baths: l.baths ?? null,
    sqft: l.sqft ?? null,
    status: l.status[lang],
    lat: l.geo ? l.geo[0] : null,
    lng: l.geo ? l.geo[1] : null,
    photo: `assets/img/${l.id}/${l.cover}-sm.webp`,
    href: `residence.html?id=${l.id}&lang=${lang}`,
    listedBy: null,
    text: [l.name, l.id.replace(/-/g, ' '), ...Object.values(l.area), ...Object.values(l.setting), l.address || ''].join(' ')
  }));
}
