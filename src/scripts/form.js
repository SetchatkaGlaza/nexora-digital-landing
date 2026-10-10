import { $, reduceMotion } from './utils.js';

// Поля: [id поля, id сообщения, функция проверки]
const FIELDS = [
  ['n', 'en', (v) => (v.trim().length < 2 ? 'Введите имя (минимум 2 символа)' : '')],
  ['e', 'ee', (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Введите почту в формате name@example.com')],
  ['t', 'et', (v) => (v ? '' : 'Выберите тип проекта')],
  ['m', 'em', (v) => (v.trim().length < 10 ? 'Опишите задачу хотя бы в 10 символах' : '')],
];

function check([id, errId, rule]) {
  const el = $('#' + id);
  const msg = rule(el.value);
  $('#' + errId).textContent = msg;
  if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
  el.setAttribute('aria-describedby', errId);
  return !msg;
}

export function initForm() {
  const form = $('#form');
  FIELDS.forEach((f) => {
    const el = $('#' + f[0]);
    el.addEventListener('blur', () => check(f));
    el.addEventListener('input', () => { if (el.getAttribute('aria-invalid')) check(f); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const consent = $('#c');
    let ok = FIELDS.map(check).every(Boolean);
    $('#ec').textContent = consent.checked ? '' : 'Подтвердите согласие, чтобы продолжить';
    if (!consent.checked) ok = false;
    if (!ok) { ($('[aria-invalid=true]') || consent).focus(); return; }

    const btn = $('#sb');
    btn.disabled = true;
    btn.textContent = 'Проверяем…';
    // TODO: заменить на реальную отправку (fetch на ваш обработчик), см. README
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Обсудить проект';
      form.reset();
      $('#res').innerHTML = '<p class="ok">Форма заполнена верно. Демо-режим: заявка не отправлена и нигде не сохранена.</p>';
    }, reduceMotion ? 0 : 800);
  });
}
