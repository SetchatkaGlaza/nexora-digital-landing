import { $, $$, reduceMotion } from './utils.js';

// Видео для hero. Файл: src/assets/video/hero-loop.mp4, кадр-заставка: images/hero/hero-video-poster.webp.
// Если видео нет, показывается обычная картинка.
const videos = import.meta.glob('../assets/video/hero-loop.mp4', { eager: true, query: '?url', import: 'default' });
const posters = import.meta.glob('../assets/images/hero/hero-video-poster.webp', { eager: true, query: '?url', import: 'default' });

export function initAnimations() {
  // появление блоков при прокрутке
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$('.rv').forEach((el) => ro.observe(el));

  // активный шаг процесса (без анимации все шаги видны)
  const steps = $$('#steps li');
  steps.forEach((l) => l.classList.add('on'));
  if (!reduceMotion) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.6 });
    steps.forEach((l) => { l.classList.remove('on'); so.observe(l); });
  }

  // лёгкое смещение hero-картинки за указателем (только мышь, только широкие экраны)
  const img = $('.hero-pic img');
  const wide = matchMedia('(min-width:1024px) and (pointer:fine)');
  if (img && !reduceMotion) {
    addEventListener('pointermove', (e) => {
      if (!wide.matches) return;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      img.style.transform = `translate3d(${(-x * 16).toFixed(1)}px, ${(-y * 10).toFixed(1)}px, 0) scale(1.03)`;
    }, { passive: true });
  }

  initHeroVideo();
}

function initHeroVideo() {
  const url = Object.values(videos)[0];
  const hero = $('.hero');
  const wide = matchMedia('(min-width:1024px)');
  const saveData = navigator.connection && navigator.connection.saveData;
  if (!url || !hero || reduceMotion || saveData) return;

  let video = null;
  const remove = () => {
    if (video) { video.remove(); video = null; }
    hero.classList.remove('hero--video');
  };
  const create = () => {
    const v = document.createElement('video');
    v.className = 'hero-video';
    v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
    v.preload = 'auto';
    const poster = Object.values(posters)[0];
    if (poster) v.poster = poster;
    v.setAttribute('aria-hidden', 'true');
    v.setAttribute('tabindex', '-1');
    v.src = url;
    // при ошибке возвращаем обычную картинку
    v.addEventListener('error', remove, { once: true });
    hero.appendChild(v);
    hero.classList.add('hero--video');
    v.play().catch(() => {});
    video = v;
  };
  // видео только на широких экранах: создаём и убираем при изменении ширины окна
  const sync = () => {
    if (wide.matches && !video) create();
    if (!wide.matches) {
      remove();
      const img = $('.hero-pic img');
      if (img) img.style.transform = '';
    }
  };
  wide.addEventListener('change', sync);
  sync();
}
