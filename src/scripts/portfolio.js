import { $, $$ } from './utils.js';

const urls = import.meta.glob('../assets/images/projects/*.webp', { eager: true, query: '?url', import: 'default' });
const img = (name) => urls[`../assets/images/projects/${name}.webp`];

const PROJECTS = {
  nova: {
    cat: 'SaaS-платформа', title: 'NOVA',
    text: 'Задача: показать сложный интерфейс сервиса так, чтобы данные читались с первого взгляда.',
    tech: ['HTML5', 'CSS Grid', 'JavaScript'],
    done: 'Реализовано: тёмная панель, переключаемые виды данных, адаптивная сетка.',
    shots: [['nova-cover', 'Обложка', 'Тёмная панель аналитики с графиками'], ['nova-screen-1', 'Дашборд', 'Экран дашборда с карточками показателей и графиком'], ['nova-screen-2', 'Команда', 'Экран настроек и списка участников команды']],
  },
  forma: {
    cat: 'E-commerce', title: 'FORMA',
    text: 'Задача: собрать визуальную систему магазина со светлой палитрой и крупными карточками товаров.',
    tech: ['HTML5', 'CSS-переменные', 'JavaScript'],
    done: 'Реализовано: каталог, состояния карточек, мобильная навигация.',
    shots: [['forma-cover', 'Обложка', 'Светлая страница интернет-магазина'], ['forma-screen-1', 'Каталог', 'Каталог товаров с сеткой карточек'], ['forma-screen-2', 'Товар', 'Страница товара с выбором размера']],
  },
  mono: {
    cat: 'Брендовая презентация', title: 'MONO',
    text: 'Задача: сделать минималистичный сайт для креативного бизнеса, где работает типографика.',
    tech: ['HTML5', 'CSS Animations', 'Vite'],
    done: 'Реализовано: крупная типографика, спокойные переходы, одна колонка на мобильных.',
    shots: [['mono-cover', 'Обложка', 'Минималистичная презентация бренда'], ['mono-screen-1', 'Главная', 'Главная страница креативной студии'], ['mono-screen-2', 'Кейс', 'Страница кейса с описанием']],
  },
};

export function initPortfolio() {
  const dlg = $('#dlg');
  const view = $('#dv');
  const thumbs = $('#dth');
  let opener = null;

  const show = (p, i) => {
    const [name, , alt] = p.shots[i];
    view.src = img(name);
    view.alt = alt;
    $$('button', thumbs).forEach((b, j) => b.setAttribute('aria-pressed', j === i));
  };

  $$('.pc').forEach((card) => card.addEventListener('click', () => {
    opener = card;
    const p = PROJECTS[card.dataset.p];
    $('#dcat').textContent = p.cat;
    $('#dt').textContent = p.title;
    $('#dd').textContent = p.text;
    $('#dg2').textContent = p.done;
    $('#dch').innerHTML = p.tech.map((t) => `<span>${t}</span>`).join('');
    thumbs.innerHTML = '';
    p.shots.forEach(([name, label, alt], i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Показать: ${label}`);
      b.innerHTML = `<img src="${img(name)}" alt="" loading="lazy">`;
      b.addEventListener('click', () => show(p, i));
      thumbs.appendChild(b);
    });
    show(p, 0);
    document.body.classList.add('lock');
    dlg.showModal();
  }));

  const close = () => dlg.close();
  $('#dx').addEventListener('click', close);
  dlg.addEventListener('click', (e) => {
    const r = dlg.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close();
  });
  dlg.addEventListener('close', () => {
    document.body.classList.remove('lock');
    if (opener) opener.focus();
  });
}
