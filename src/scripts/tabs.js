import { $, $$ } from './utils.js';

export function initTabs() {
  const tabs = $$('[role=tab]');
  const select = (i, focus) => tabs.forEach((t, j) => {
    const on = i === j;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    $('#p' + j).hidden = !on;
    if (on && focus) t.focus();
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (k) { e.preventDefault(); select((i + k + tabs.length) % tabs.length, true); }
    });
  });
}
