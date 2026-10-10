import { $, $$ } from './utils.js';

export function initNavigation() {
  const header = $('header');
  const burger = $('#burger');
  const nav = $('#nav');

  const onScroll = () => header.classList.toggle('sc', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('lock', open);
  };
  const isOpen = () => burger.getAttribute('aria-expanded') === 'true';

  burger.addEventListener('click', () => setMenu(!isOpen()));
  $$('#nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { setMenu(false); burger.focus(); }
  });
  addEventListener('resize', () => { if (innerWidth > 859) setMenu(false); });

  // подсветка текущего раздела
  const links = $$('#nav a');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['services', 'projects', 'approach', 'contact'].forEach((id) => io.observe(document.getElementById(id)));
}
