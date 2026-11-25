(() => {
  const LANGS = ['en', 'pt', 'es'];
  const params = new URLSearchParams(location.search);
  let lang = params.get('lang');
  if (!LANGS.includes(lang)) {
    try { lang = localStorage.getItem('vd-lang'); } catch (e) { lang = null; }
  }
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || 'en').slice(0, 2);
    lang = LANGS.includes(nav) ? nav : 'en';
  }

  const page = document.body.dataset.page || 'home';
  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const img = (id, name, sm) => `assets/img/${id}/${name}${sm ? '-sm' : ''}.webp`;
  const wa = (msg, num = SITE.whatsapp) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Icons ---------- */
  const svg = (body, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true"${extra}>${body}</svg>`;
  const ICON = {
    phone: svg('<path d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
    mail: svg('<rect x="3" y="5.5" width="18" height="13" rx="1" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" stroke-width="1.4"/>'),
    linkedin: svg('<path fill="currentColor" d="M5.3 8.9h2.9V19H5.3zM6.8 4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.1 8.9h2.8v1.4c.4-.8 1.4-1.6 2.9-1.6 3 0 3.6 2 3.6 4.6V19h-2.9v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19h-2.8z"/>'),
    instagram: svg('<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>'),
    whatsapp: svg('<path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.5 5 5.1-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.2 8.2 0 1 1 6.9 3.8Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/>'),
    heart: svg('<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" fill="var(--fill, none)" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>')
  };
  const socials = () => `
    <a class="tb-icon" data-social="linkedin" href="#" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a>
    <a class="tb-icon" data-social="instagram" href="#" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
    <a class="tb-icon" data-wa href="#" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.whatsapp}</a>`;

  /* ---------- Header & footer (shared by every page) ---------- */
  const NAV = [['search.html', 'nav.search', 'search'], ['contact.html', 'nav.contact', 'contact'], ['safety.html', 'nav.safety', 'safety']];
  const header = $('.site-header');
  if (header) {
    header.innerHTML = `
      <div class="topbar"><div class="container topbar__inner">
        <a class="tb-link" data-tel-link href="#">${ICON.phone}<span data-tel-text></span></a>
        <a class="tb-link tb-link--mail" data-mail-link href="#">${ICON.mail}<span data-mail-text></span></a>
        <span class="tb-social">${socials()}</span>
      </div></div>
      <div class="container header-inner">
        <a class="logo" href="index.html" data-logo data-keep-lang aria-label="Viviane DaSilva — Real Estate Advisor"></a>
        <nav class="nav" aria-label="Primary">
          ${NAV.map(([href, key, id]) => `<a href="${href}" data-keep-lang data-i18n="${key}"${id === page ? ' aria-current="page"' : ''}></a>`).join('')}
        </nav>
        <div class="header-tools">
          <div class="lang" role="group" aria-label="Language">
            <button data-lang="en" aria-pressed="true">EN</button><button data-lang="pt" aria-pressed="false">PT</button><button data-lang="es" aria-pressed="false">ES</button>
          </div>
          <button class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
        </div>
      </div>`;
  }
  const footer = $('.site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-top">
          <div>
            <a class="logo" href="index.html" data-logo data-keep-lang aria-label="Viviane DaSilva"></a>
            <p><em data-i18n="footer.tagline"></em></p>
          </div>
          <div class="footer-col">
            <a href="search.html" data-keep-lang data-i18n="nav.search"></a>
            <a href="sell.html" data-keep-lang data-i18n="nav.sell"></a>
            <a href="contact.html" data-keep-lang data-i18n="nav.contact"></a>
            <a href="safety.html" data-keep-lang data-i18n="nav.safety"></a>
          </div>
          <div class="footer-col">
            <a data-tel href="#"></a>
            <a data-mail href="#"></a>
            <span class="tb-social footer-social">${socials()}</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Viviane DaSilva, Real Estate Advisor · <span data-brokerage></span> · <span data-license></span> · © <span data-year></span><br><span data-i18n="footer.legal"></span></p>
          <span class="eho"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 10h3v10h14V10h3z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M9 13h6M9 16h6" stroke="currentColor" stroke-width="1.2"/></svg><span data-i18n="footer.eho">Equal Housing Opportunity</span></span>
        </div>
      </div>`;
  }

  /* ---------- Logo ---------- */
  const MARK = `<svg class="mark" viewBox="0 0 44 56" aria-hidden="true"><path d="M3 56V22a19 19 0 0 1 38 0v34" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="22" y="41" text-anchor="middle" font-family="Jost, sans-serif" font-weight="300" font-size="15" letter-spacing="1.2" fill="currentColor">VD</text></svg>`;
  $$('[data-logo]').forEach((el) => {
    el.innerHTML = `${MARK}<span class="word"><span class="name">Viviane DaSilva</span><span class="title"><i></i>Real Estate Advisor<i></i></span></span>`;
  });

  /* ---------- i18n ---------- */
  const tel = 'tel:' + SITE.phone.replace(/[^+\d]/g, '');
  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    /* WhatsApp: number from the closest [data-wa-number] (Safety page), else Viviane's;
       message from data-wa="key", else the closest [data-wa-msg], else the default */
    $$('[data-wa]').forEach((a) => {
      const numHost = a.closest('[data-wa-number]');
      const msgHost = a.closest('[data-wa-msg]');
      const num = numHost ? SITE[numHost.dataset.waNumber] || numHost.dataset.waNumber : SITE.whatsapp;
      a.href = wa(t(a.dataset.wa || (msgHost && msgHost.dataset.waMsg) || 'wa.msg'), num);
    });
    $$('[data-social]').forEach((a) => {
      const url = SITE[a.dataset.social];
      a.href = url || '#';
      a.toggleAttribute('data-empty', !url);
    });
    $$('[data-tel]').forEach((a) => { a.href = tel; a.textContent = SITE.phone; });
    $$('[data-mail]').forEach((a) => { a.href = 'mailto:' + SITE.email; a.textContent = SITE.email; });
    $$('[data-tel-link]').forEach((a) => { a.href = tel; });
    $$('[data-tel-text]').forEach((el) => { el.textContent = SITE.phone; });
    $$('[data-mail-link]').forEach((a) => { a.href = 'mailto:' + SITE.email; });
    $$('[data-mail-text]').forEach((el) => { el.textContent = SITE.email; });
    $$('[data-brokerage]').forEach((el) => { el.textContent = SITE.brokerage; });
    $$('[data-license]').forEach((el) => { el.textContent = SITE.license; });
    $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
    $$('a[data-keep-lang]').forEach((a) => {
      const u = new URL(a.getAttribute('href'), location.href);
      u.searchParams.set('lang', lang);
      a.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
    });
    renderResidence();
    renderSearch();
  }

  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('vd-lang', lang); } catch (e) {}
    const u = new URL(location.href); u.searchParams.set('lang', lang);
    history.replaceState(null, '', u);
    applyLang();
  }));

  /* ---------- Header behaviour ---------- */
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', scrollY > 24 || page === 'search');
    document.body.classList.toggle('past-hero', scrollY > innerHeight * 0.6);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const menuBtn = $('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    $$('.nav a').forEach((a) => a.addEventListener('click', () => {
      document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- Property search (search.html) ---------- */
  const TYPES = ['sale', 'rent', 'sold'];
  const VIEWS = ['list', 'mixed', 'map'];
  const PS = { q: '', type: 'sale', min: '', max: '', beds: '', baths: '', sort: '', view: 'mixed' };
  const HOODS = ['Brickell', 'Miami Beach', 'Sunny Isles Beach', 'Bal Harbour', 'Bay Harbor Islands', 'Edgewater', 'Key Biscayne', 'Coral Gables'];
  const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  const short = (n) => n >= 1e6 ? `$${+(n / 1e6).toFixed(n >= 1e7 ? 0 : 2)}M` : `$${Math.round(n / 1e3)}K`;
  const top = (v) => { if (v == null) return null; const m = String(v).match(/\d+(\.\d+)?/g); return m ? Math.max(...m.map(Number)) : null; };
  let favs = [];
  try { favs = JSON.parse(localStorage.getItem('vd-favs') || '[]'); } catch (e) {}
  let map = null, mapLayer = null, markers = {}, renderSeq = 0;

  function psMatch(r) {
    if (r.deal !== PS.type) return false;
    const words = norm(PS.q).split(/[\s,]+/).filter(Boolean);
    if (words.length && !words.every((w) => norm(r.text || r.address).includes(w))) return false;
    if (r.price != null) {
      if (PS.min && r.price < +PS.min) return false;
      if (PS.max && r.price > +PS.max) return false;
    }
    const beds = top(r.beds), baths = top(r.baths);
    if (PS.beds && beds != null && beds < +PS.beds) return false;
    if (PS.baths && baths != null && baths < +PS.baths) return false;
    return true;
  }

  function psSort(rows) {
    if (!PS.sort) return rows;
    const dir = PS.sort === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => (a.price == null) - (b.price == null) || dir * ((a.price || 0) - (b.price || 0)));
  }

  function psRow(r) {
    const fav = favs.includes(r.id);
    const by = r.listedBy ? `<small class="ps-by">${t('ps.listedby')} ${esc(r.listedBy)}</small>` : '';
    const source = r.source === 'mls' ? esc(IDX.mlsName || 'MLS') : t('ps.curated');
    const dash = '—';
    return `<div class="ps-row" role="row" data-id="${esc(r.id)}">
      <span class="ps-img" role="cell"><img src="${esc(r.photo)}" alt="" loading="lazy" decoding="async"></span>
      <span class="ps-addr" role="cell"><a href="${esc(r.href)}">${esc(r.address)}</a><small>${esc(r.sub)}</small>${by}</span>
      <span class="ps-price" role="cell">${r.price != null ? money(r.price) : t('ps.onrequest')}</span>
      <span class="ps-num" role="cell" data-l="${t('ps.col.beds')}">${r.beds != null ? esc(r.beds) : dash}</span>
      <span class="ps-num" role="cell" data-l="${t('ps.col.baths')}">${r.baths != null ? esc(r.baths) : dash}</span>
      <span class="ps-num" role="cell" data-l="Sq ft">${r.sqft ? esc(r.sqft) : dash}</span>
      <span class="ps-status" role="cell">${esc(r.status)}</span>
      <span class="ps-src" role="cell">${source}</span>
      <span role="cell"><button type="button" class="ps-fav" data-fav="${esc(r.id)}" aria-pressed="${fav}" aria-label="${t('ps.save')}">${ICON.heart}</button></span>
    </div>`;
  }

  async function renderSearch() {
    const list = $('#ps-rows');
    if (!list) return;
    const seq = ++renderSeq;
    const data = await IDX.fetch({ ...PS }, lang);
    if (seq !== renderSeq) return;
    const rows = psSort(data.filter(psMatch));
    $('#ps-count').textContent = `${rows.length} ${t(rows.length === 1 ? 'ps.one' : 'ps.many')}`;
    list.innerHTML = rows.length ? rows.map(psRow).join('') : `<div class="search-empty">
        <p>${t('search.empty')}</p>
        <div class="search-empty__actions"><a class="btn btn--solid" href="${wa(`${t('wa.msg.search')} ${PS.q || t('search.' + PS.type)}`)}" target="_blank" rel="noopener">${t('search.ask')}</a></div>
      </div>`;
    const note = $('#ps-note');
    if (note) {
      note.innerHTML = IDX.connected
        ? esc(IDX.disclaimer)
        : `${t('ps.note')} <a class="link" href="${wa(t('wa.msg.search'))}" target="_blank" rel="noopener">${t('ps.ask')}</a>`;
    }
    drawMarkers(rows);
  }

  function syncSearchUrl() {
    const u = new URL(location.href);
    Object.entries(PS).forEach(([k, v]) => {
      const dflt = { type: 'sale', view: 'mixed' }[k] || '';
      v && v !== dflt ? u.searchParams.set(k, v) : u.searchParams.delete(k);
    });
    history.replaceState(null, '', u);
  }

  function setView(v) {
    PS.view = v;
    const main = $('.ps-main');
    if (main) main.dataset.view = v;
    const mobile = matchMedia('(max-width: 860px)').matches;
    $$('[data-view-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.viewBtn === v || (mobile && v === 'mixed' && b.dataset.viewBtn === 'list'))));
    if (map) setTimeout(() => { map.invalidateSize(); fitMap(); }, 30);
  }

  function initMap() {
    const el = $('#ps-map');
    if (!el) return;
    if (!window.L) { $('.ps-main').classList.add('no-map'); return; }
    map = L.map(el, { zoomControl: false, scrollWheelZoom: true }).setView([25.83, -80.16], 11);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    /* OpenStreetMap tiles are fine for launch traffic; for heavy traffic switch to a keyed provider (MapTiler, Stadia…) */
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);
    mapLayer = L.layerGroup().addTo(map);
  }

  let pinPoints = [];
  function fitMap() {
    if (!map || !pinPoints.length) return;
    if (pinPoints.length === 1) map.setView(pinPoints[0], 14);
    else map.fitBounds(pinPoints, { padding: [48, 48], maxZoom: 14 });
  }

  function drawMarkers(rows) {
    if (!map) return;
    mapLayer.clearLayers(); markers = {}; pinPoints = [];
    rows.forEach((r) => {
      if (r.lat == null || r.lng == null) return;
      const label = r.price != null ? short(r.price) : '';
      const m = L.marker([r.lat, r.lng], {
        title: r.address,
        icon: L.divIcon({ className: 'ps-pin', html: `<span class="ps-pin__in${label ? '' : ' is-dot'}">${label}</span>`, iconSize: null })
      });
      m.bindPopup(`<a class="ps-pop" href="${esc(r.href)}"><img src="${esc(r.photo)}" alt=""><strong>${esc(r.address)}</strong><span>${r.price != null ? money(r.price) : t('ps.onrequest')}</span><small>${esc(r.sub)}</small></a>`, { closeButton: false, minWidth: 220 });
      m.addTo(mapLayer);
      markers[r.id] = m;
      pinPoints.push([r.lat, r.lng]);
    });
    fitMap();
  }

  function initSearch() {
    const form = $('[data-ps-form]');
    if (!form) return;
    Object.keys(PS).forEach((k) => { if (params.has(k)) PS[k] = params.get(k).trim(); });
    if (!TYPES.includes(PS.type)) PS.type = 'sale';
    if (!VIEWS.includes(PS.view)) PS.view = 'mixed';
    $$('[name]', form).forEach((el) => { if (el.name in PS) el.value = PS[el.name]; });
    const sort = $('[data-ps-sort]');
    if (sort) sort.value = PS.sort;

    const dl = $('#search-suggest');
    if (dl) dl.innerHTML = [...new Set([...HOODS, ...LISTINGS.flatMap((l) => [l.name, l.area.en])])].map((v) => `<option value="${esc(v)}">`).join('');

    const update = () => { syncSearchUrl(); renderSearch(); };
    form.addEventListener('change', (e) => {
      if (!e.target.name || !(e.target.name in PS)) return;
      PS[e.target.name] = e.target.value.trim(); update();
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      PS.q = form.elements.q.value.trim(); form.elements.q.blur(); update();
    });
    if (sort) sort.addEventListener('change', () => { PS.sort = sort.value; update(); });
    $$('[data-view-btn]').forEach((b) => b.addEventListener('click', () => { setView(b.dataset.viewBtn); syncSearchUrl(); }));

    const rows = $('#ps-rows');
    rows.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-fav]');
      if (!btn) return;
      const id = btn.dataset.fav;
      favs = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id];
      try { localStorage.setItem('vd-favs', JSON.stringify(favs)); } catch (err) {}
      btn.setAttribute('aria-pressed', String(favs.includes(id)));
    });
    const pin = (e, on) => {
      const row = e.target.closest('.ps-row');
      const m = row && markers[row.dataset.id];
      const el = m && m.getElement();
      if (el) { el.classList.toggle('is-active', on); if (on) m.setZIndexOffset(1000); else m.setZIndexOffset(0); }
    };
    rows.addEventListener('mouseover', (e) => pin(e, true));
    rows.addEventListener('mouseout', (e) => pin(e, false));

    initMap();
    setView(PS.view);
  }

  /* ---------- Residence page ---------- */
  function renderResidence() {
    const root = $('#residence');
    if (!root) return;
    const l = LISTINGS.find((x) => x.id === params.get('id')) || LISTINGS[0];
    document.title = `${l.name} · ${l.area[lang]} — Viviane DaSilva`;
    const msg = `${t('wa.msg.res')} ${l.name}.`;
    const others = LISTINGS.filter((x) => x.id !== l.id).slice(0, 3);
    root.innerHTML = `
      <section class="res-hero container">
        <div class="res-hero__text">
          <a class="back link" href="search.html?lang=${lang}">← ${t('res.back')}</a>
          <p class="label">${l.area[lang]} · ${l.setting[lang]}</p>
          <h1 class="display">${l.name}</h1>
          <p class="lede">${l.summary[lang]}</p>
          <p class="status">${l.status[lang]}</p>
        </div>
        <figure class="arch res-hero__img"><img src="${img(l.id, l.cover)}" alt="${l.name}" fetchpriority="high"></figure>
      </section>

      <section class="container" aria-label="Key figures"><div class="stats" style="--n:${l.stats.length}">
        ${l.stats.map((s) => `<div class="stat"><span class="stat__v">${s.v}</span><span class="stat__l">${s.l[lang]}</span></div>`).join('')}
      </div></section>
      <p class="container fine">${t('res.note')}</p>

      <section class="res-body container">
        <div>
          <p class="label">${t('res.overview')}</p>
          <p class="body-lg">${l.body[lang]}</p>
        </div>
        <div>
          <p class="label">${t('res.features')}</p>
          <ul class="features">${l.features[lang].map((f) => `<li>${f}</li>`).join('')}</ul>
        </div>
      </section>

      <section class="gallery-wrap container">
        <p class="label">${t('res.gallery')}</p>
        <div class="gallery">
          ${galleryLayout(l.images.length).map((wide, i) => [l.images[i], wide]).map(([n, wide], i) => `<button class="g-item${wide ? ' g-wide' : ''}" data-full="${img(l.id, n)}" aria-label="${t('res.gallery')} ${i + 1}"><img src="${img(l.id, n, true)}" alt="${l.name} — ${i + 1}" loading="lazy" decoding="async"></button>`).join('')}
        </div>
      </section>

      <section class="band band--sky">
        <div class="container inquire">
          <div>
            <h2 class="h2">${t('res.inquire')}</h2>
            <p>${t('res.inquire.text')}</p>
          </div>
          <div class="inquire__actions">
            <a class="btn btn--solid" href="contact.html?lang=${lang}">${t('cta.consult')}</a>
            <a class="btn" href="${wa(msg)}" target="_blank" rel="noopener">${t('res.whatsapp')}</a>
          </div>
        </div>
      </section>

      <section class="container more">
        <p class="label">${t('res.more')}</p>
        <div class="more__grid">
          ${others.map((o) => `<a class="card" href="residence.html?id=${o.id}&lang=${lang}"><figure class="card__img"><img src="${img(o.id, o.cover, true)}" alt="${o.name}" loading="lazy"></figure><div class="card__body"><p class="label">${o.area[lang]}</p><h3 class="card__name">${o.name}</h3></div></a>`).join('')}
        </div>
      </section>`;
    bindLightbox(l);
    observe();
  }

  /* Wide, pair, pair, wide… never leaving a lone half-width image */
  function galleryLayout(count) {
    const out = []; let i = 0;
    while (i < count) {
      out.push(true); i++;
      for (let p = 0; p < 2 && i < count; p++) {
        if (count - i === 1) { out.push(true); i++; break; }
        out.push(false, false); i += 2;
      }
    }
    return out;
  }

  /* ---------- Lightbox ---------- */
  function bindLightbox(l) {
    const box = $('#lightbox');
    if (!box) return;
    const items = $$('.g-item');
    let idx = 0;
    const show = (i) => {
      idx = (i + items.length) % items.length;
      $('img', box).src = items[idx].dataset.full;
      $('img', box).alt = `${l.name} — ${idx + 1}`;
      $('.lb-count', box).textContent = `${idx + 1} / ${items.length}`;
    };
    items.forEach((b, i) => b.addEventListener('click', () => { show(i); box.showModal(); }));
    box.onclick = (e) => { if (e.target === box) box.close(); };
    $('.lb-prev', box).onclick = () => show(idx - 1);
    $('.lb-next', box).onclick = () => show(idx + 1);
    $('.lb-close', box).onclick = () => box.close();
    box.onkeydown = (e) => { if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); };
  }

  /* ---------- Forms (static: shows confirmation; connect to a form service before launch) ---------- */
  $$('form[data-form]').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    const ok = $('.form-ok', f);
    f.classList.add('sent');
    if (ok) ok.textContent = t(f.dataset.form === 'pc' ? 'pc.thanks' : 'form.thanks');
  }));

  /* ---------- Reveal ---------- */
  let io;
  function observe() {
    if (!('IntersectionObserver' in window) || reduced()) {
      $$('.reveal').forEach((el) => el.classList.add('in')); return;
    }
    io = io || new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal:not(.in)').forEach((el) => io.observe(el));
  }

  initSearch();
  applyLang();
  observe();
})();
