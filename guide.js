(() => {
  'use strict';
  const pages = window.INKY_GUIDE;
  const article = document.querySelector('#article');
  const navigation = document.querySelector('#navigation');
  const search = document.querySelector('#search');
  const results = document.querySelector('#search-results');
  const sidebar = document.querySelector('#sidebar');
  const menu = document.querySelector('#menu-toggle');
  const narrow = window.matchMedia('(max-width: 760px)');
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const plain = html => {const div = document.createElement('div'); div.innerHTML = html.replace(/<\/(p|div|li|h[1-6]|strong|small|th|td|span|summary)>/g, '</$1> '); return div.textContent.replace(/\s+/g, ' ').trim();};
  const closeNavigation = () => {sidebar.classList.remove('open'); sidebar.inert = narrow.matches; menu.setAttribute('aria-expanded', 'false');};
  navigation.innerHTML = pages.map((page, i) => `<a class="nav-link" href="#${page.id}"><span class="nav-number">${String(i + 1).padStart(2, '0')}</span>${escape(page.nav)}</a>`).join('');
  const documents = pages.map(page => ({...page, text: plain(page.body), haystack: `${page.title} ${page.keywords || ''} ${plain(page.body)}`.toLowerCase()}));
  function render() {
    let id;
    try {id = decodeURIComponent(location.hash.slice(1)).split('/')[0];} catch {id = 'start';}
    const page = pages.find(item => item.id === id) || pages[0];
    const index = pages.indexOf(page);
    const next = pages[(index + 1) % pages.length];
    document.title = `${page.nav} · Inky Zombies 1.3 Player Guide`;
    document.querySelector('#breadcrumb').textContent = page.nav;
    article.innerHTML = `<div class="eyebrow">${escape(page.eyebrow || 'FIELD NOTES')} / ${String(index + 1).padStart(2, '0')}</div><div class="${page.id === 'start' ? 'hero' : ''}"><h1>${page.title}</h1><p class="lede">${page.intro}</p></div><div class="article-body">${page.body}</div><div class="next-page"><span>Inky Zombies 1.3 · Default rules</span><a href="#${next.id}">Next: ${escape(next.nav)} →</a></div>`;
    for (const link of navigation.querySelectorAll('a')) {
      if (link.hash === `#${page.id}`) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    }
    for (const button of article.querySelectorAll('[data-perk-filter]')) button.addEventListener('click', () => {
      const filter = button.dataset.perkFilter;
      for (const item of article.querySelectorAll('[data-perk-filter]')) item.setAttribute('aria-pressed', String(item === button));
      for (const perk of article.querySelectorAll('[data-perk-type]')) perk.hidden = filter !== 'all' && perk.dataset.perkType !== filter;
    });
    const calculator = article.querySelector('#panzer-calculator');
    if (calculator) {
      const update = () => {
        const tier = Math.trunc(Math.max(1, Math.min(100, Number(calculator.querySelector('[name=tier]').value) || 1)));
        const players = Number(calculator.querySelector('[name=players]').value);
        const difficulty = calculator.querySelector('[name=difficulty]').value;
        const profiles = {easy: [4000, 15000, 20000], medium: [8000, 15000, 25000], nightmare: [16000, 20000, 40000]};
        const [start, firstIncrease, laterIncrease] = profiles[difficulty] || profiles.medium;
        const base = tier === 1 ? start : start + firstIncrease + (tier - 2) * laterIncrease;
        const hp = Math.min(400000, Math.trunc(base * (players === 1 ? 1 : players * .75)));
        calculator.querySelector('output').textContent = `${hp.toLocaleString('en-US')} HP`;
      };
      calculator.addEventListener('input', update); calculator.addEventListener('change', update); update();
    }
    results.hidden = true;
    closeNavigation();
    window.scrollTo({top:0, left:0, behavior:'instant'});
  }
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    if (!query) {results.hidden = true; return;}
    const terms = query.split(/\s+/);
    const matches = documents.filter(page => terms.every(term => page.haystack.includes(term)));
    results.replaceChildren();
    const count = document.createElement('div'); count.className = 'search-count';
    count.textContent = `${matches.length} ${matches.length === 1 ? 'topic' : 'topics'} found`; results.append(count);
    for (const page of matches) {
      const link = document.createElement('a'); link.className = 'search-result'; link.href = `#${page.id}`;
      const title = document.createElement('strong'); title.textContent = page.nav;
      const snippet = document.createElement('p');
      const match = page.text.toLowerCase().indexOf(terms[0]);
      const start = Math.max(0, match - 45); snippet.textContent = `${start ? '…' : ''}${page.text.slice(start, start + 165)}…`;
      link.append(title, snippet); link.addEventListener('click', () => {results.hidden = true; search.value = ''; if (location.hash === link.hash) {article.focus();} });
      results.append(link);
    }
    if (!matches.length) {const empty = document.createElement('p'); empty.className = 'search-empty'; empty.textContent = 'Try a perk name, “charge”, “health” or “Pack-a-Punch”.'; results.append(empty);}
    results.hidden = false;
  });
  search.addEventListener('keydown', event => {if (event.key === 'ArrowDown' || event.key === 'Enter') {const first = results.querySelector('a'); if (first) {event.preventDefault(); first.focus();}}});
  menu.addEventListener('click', () => {const open = !sidebar.classList.contains('open'); sidebar.classList.toggle('open', open); sidebar.inert = narrow.matches && !open; menu.setAttribute('aria-expanded', String(open));});
  narrow.addEventListener('change', closeNavigation);
  document.querySelector('.skip').addEventListener('click', event => {event.preventDefault(); article.focus();});
  document.addEventListener('click', event => {if (!event.target.closest('.search-wrap')) results.hidden = true; if (sidebar.classList.contains('open') && !event.target.closest('.sidebar') && !event.target.closest('#menu-toggle')) closeNavigation();});
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {event.preventDefault(); search.focus();}
    if (event.key === 'Escape') {results.hidden = true; closeNavigation();}
  });
  window.addEventListener('hashchange', () => {render(); article.focus();});
  render();
})();
