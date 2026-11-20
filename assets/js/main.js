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

  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const img = (id, name, sm) => `assets/img/${id}/${name}${sm ? '-sm' : ''}.webp`;
  const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- Logo ---------- */
  const MARK = `<svg class="mark" viewBox="0 0 44 56" aria-hidden="true"><path d="M3 56V22a19 19 0 0 1 38 0v34" fill="none" stroke="currentColor" stroke-width="1.1"/><text x="22" y="41" text-anchor="middle" font-family="Jost, sans-serif" font-weight="300" font-size="15" letter-spacing="1.2" fill="currentColor">VD</text></svg>`;
  $$('[data-logo]').forEach((el) => {
    el.innerHTML = `${MARK}<span class="word"><span class="name">Viviane DaSilva</span><span class="title"><i></i>Real Estate Advisor<i></i></span></span>`;
  });

  /* ---------- i18n ---------- */
  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $$('[data-wa]').forEach((a) => { a.href = wa(t('wa.msg')); });
    $$('[data-tel]').forEach((a) => { a.href = 'tel:' + SITE.phone.replace(/[^+\d]/g, ''); a.textContent = SITE.phone; });
    $$('[data-mail]').forEach((a) => { a.href = 'mailto:' + SITE.email; a.textContent = SITE.email; });
    $$('[data-brokerage]').forEach((el) => { el.textContent = SITE.brokerage; });
    $$('[data-license]').forEach((el) => { el.textContent = SITE.license; });
    $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
    $$('a[data-keep-lang]').forEach((a) => {
      const u = new URL(a.getAttribute('href'), location.href);
      u.searchParams.set('lang', lang);
      a.href = u.pathname.split('/').pop() + u.search + u.hash;
    });
    renderFeatured();
    renderResidence();
  }

  $$('.lang button').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('vd-lang', lang); } catch (e) {}
    const u = new URL(location.href); u.searchParams.set('lang', lang);
    history.replaceState(null, '', u);
    applyLang();
  }));

  /* ---------- Header ---------- */
  const header = $('.site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', scrollY > 24);
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

  /* ---------- Featured residences (home) ---------- */
  function card(l, i) {
    const stats = l.line ? l.line[lang] : l.stats.slice(0, 2).map((s) => `${s.v} ${s.l[lang]}`).join(' · ');
    return `<a class="card reveal${i === 0 ? ' card--lead' : ''}" href="residence.html?id=${l.id}&lang=${lang}">
      <figure class="card__img"><img src="${img(l.id, l.cover, i !== 0)}" alt="${l.name}, ${l.area[lang]}" loading="lazy" decoding="async"></figure>
      <div class="card__body">
        <p class="label">${l.area[lang]} · ${l.setting[lang]}</p>
        <h3 class="card__name">${l.name}</h3>
        <p class="card__stats">${stats}</p>
        <span class="link">${t('card.view')}</span>
      </div></a>`;
  }
  function renderFeatured() {
    const grid = $('#residences-grid');
    if (!grid) return;
    grid.innerHTML = LISTINGS.map(card).join('');
    observe();
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
          <a class="back link" href="index.html?lang=${lang}#residences">← ${t('res.back')}</a>
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
            <a class="btn btn--solid" href="index.html?lang=${lang}#contact">${t('cta.consult')}</a>
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
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.reveal').forEach((el) => el.classList.add('in')); return;
    }
    io = io || new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal:not(.in)').forEach((el) => io.observe(el));
  }

  applyLang();
  observe();
})();
