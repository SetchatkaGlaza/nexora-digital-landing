import { $ } from './utils.js';

// Полоса прокрутки, кнопка «наверх» (десктоп), плавающая кнопка связи (телефоны)
export function initExtras() {
  const bar = $('#progress');
  const top = $('#totop');
  const cta = $('#mcta');
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    const shown = scrollY > 600;
    top.classList.toggle('show', shown);
    cta.classList.toggle('show', shown);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', update);
  update();

  // у блока с формой плавающая кнопка не нужна
  const contact = document.getElementById('contact');
  new IntersectionObserver(([e]) => cta.classList.toggle('hide', e.isIntersecting), { threshold: 0.15 }).observe(contact);
}
