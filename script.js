/* WACH RECORDS — site behavior + central content loader */

const menu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.mobile-menu .close');
openBtn?.addEventListener('click',()=>menu?.classList.add('open'));
closeBtn?.addEventListener('click',()=>menu?.classList.remove('open'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const imagePath = name => `assets/images/${name}`;
const imagePair = name => ({ jpg: imagePath(`${name}.jpg`), webp: imagePath(`${name}.webp`) });

function setPicture(picture, name, alt = '') {
  if (!picture || !name) return;
  const pair = imagePair(name);
  const source = picture.querySelector('source');
  const img = picture.querySelector('img');
  if (source) source.srcset = pair.webp;
  if (img) {
    img.src = pair.jpg;
    img.alt = alt;
  }
}

function setCaption(el, item) {
  if (!el || !item?.number) return;
  const spans = el.querySelectorAll('span');
  if (spans[0]) spans[0].textContent = `${item.number} — ${item.title || ''}`;
  if (spans[1]) spans[1].textContent = item.subtitle || '';
}

function loadHome(c) {
  const hero = document.querySelector('.hero');
  if (hero) {
    setPicture(hero.querySelector('picture'), c.hero.image, c.hero.title);
    hero.querySelector('h1').textContent = c.hero.title;
    hero.querySelector('p').textContent = c.hero.subtitle;
  }
  const intro = document.querySelector('.intro');
  if (intro) {
    intro.querySelector('.kicker').textContent = c.introKicker;
    intro.querySelector('p').textContent = c.intro;
  }
  const figures = [...document.querySelectorAll('.gallery figure')];
  const items = c.gallery;
  figures.forEach((figure, i) => {
    const item = items[i];
    if (!item) return;
    setPicture(figure.querySelector('picture'), item.image, figure.querySelector('img')?.alt || 'Fotografische Arbeit');
    setCaption(figure.querySelector('.caption'), item);
  });
  const pairs = [...document.querySelectorAll('.editorial-pair')];
  pairs.forEach((pair, pairIndex) => {
    const start = pairIndex === 0 ? 5 : 9;
    [...pair.querySelectorAll('figure')].forEach((figure, j) => {
      const item = items[start + j];
      if (!item) return;
      setPicture(figure.querySelector('picture'), item.image, figure.querySelector('img')?.alt || 'Fotografische Arbeit');
      setCaption(figure.querySelector('.caption'), item);
    });
  });
  const quote = document.querySelector('.quote p');
  if (quote) quote.textContent = c.quote;
  const mag = c.magazine;
  const magSection = document.querySelector('.magazine');
  if (magSection) {
    magSection.querySelector('.section-kicker').textContent = mag.kicker;
    magSection.querySelector('h2').innerHTML = mag.title.replace('\n','<br>');
    magSection.querySelector('.reveal p').textContent = mag.text;
    magSection.querySelector('.meta').innerHTML = mag.meta.join('<br>');
    magSection.querySelector('.text-link').textContent = mag.linkText;
    magSection.querySelector('.mock-sub').textContent = mag.coverSub;
  }
}

function loadWork(c) {
  const grid = document.querySelector('#work-grid');
  if (!grid) return;

  grid.innerHTML = c.items.map((item) => `
    <figure class="work-card reveal">
      <picture>
        <source srcset="${imagePath(`${item.image}.webp`)}" type="image/webp">
        <img src="${imagePath(`${item.image}.jpg`)}" alt="${item.alt || item.title || 'Fotografische Arbeit'}" loading="lazy">
      </picture>
      <figcaption class="caption"><span>${item.title || ''}</span><span>${item.number || ''}</span></figcaption>
    </figure>
  `).join('');
}

function loadPage(page, c) {
  const hero = document.querySelector('.page-hero');
  if (!hero) return;
  hero.querySelector('.section-kicker').textContent = c.kicker;
  hero.querySelector('.page-title').textContent = c.title;
  hero.querySelector('p').textContent = c.intro;

  if (page === 'magazine') {
    document.querySelector('.text-page .mock-sub').textContent = c.coverSub;
    document.querySelector('.text-page h2:nth-of-type(1)').textContent = c.formatTitle;
    document.querySelector('.text-page h2:nth-of-type(1) + p').textContent = c.formatText;
    document.querySelector('.text-page h2:nth-of-type(2)').textContent = c.orderTitle;
    document.querySelector('.text-page h2:nth-of-type(2) + p').textContent = c.orderText;
  }
  if (page === 'exhibitions') {
    const hs = document.querySelectorAll('.text-page h2');
    const ps = document.querySelectorAll('.text-page p');
    hs[0].textContent = c.currentYear;
    ps[0].textContent = c.currentText;
    hs[1].textContent = c.archiveTitle;
    ps[1].textContent = c.archiveText;
  }
  if (page === 'about') {
    const sections = document.querySelectorAll('.text-page h2');
    const texts = document.querySelectorAll('.text-page h2 + p');
    c.sections.forEach((section, i) => {
      if (sections[i]) sections[i].textContent = section.title;
      if (texts[i]) texts[i].textContent = section.text;
    });
  }
  if (page === 'contact') {
    const block = document.querySelector('.contact-block');
    if (block) block.innerHTML = c.email.replace(/\n/g, '<br>');
    const note = document.querySelector('.text-page p');
    if (note) note.textContent = c.note;
  }
}

function initContent() {
  if (!window.siteContent) return;
  const path = location.pathname;
  if (path.endsWith('/index.html') || path.endsWith('/')) loadHome(siteContent.home);
  if (path.endsWith('/work.html')) loadWork(siteContent.work);
  if (path.endsWith('/magazine.html')) loadPage('magazine', siteContent.magazine);
  if (path.endsWith('/exhibitions.html')) loadPage('exhibitions', siteContent.exhibitions);
  if (path.endsWith('/about.html')) loadPage('about', siteContent.about);
  if (path.endsWith('/contact.html')) loadPage('contact', siteContent.contact);
}

initContent();

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
