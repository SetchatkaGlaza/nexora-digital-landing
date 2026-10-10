# NEXORA DIGITAL — лендинг digital-студии

Адаптивный тёмный лендинг: HTML5, CSS3, JavaScript (ES-модули), сборка на Vite.

## Запуск
Нужен Node.js 18+.
```
npm install
npm run dev      # локальный сервер (откройте адрес из консоли)
npm run build    # production-сборка в dist/
npm run preview  # проверка собранной версии
```
Открывать `index.html` двойным кликом нельзя: страница использует ES-модули и пути Vite. Запускайте через `npm run dev`.

## Структура
```
index.html                 разметка всех 12 секций
vite.config.js             настройки сборки
public/                    favicon.svg, images/og-image.jpg (копируются как есть)
src/main.js                точка входа: подключает стили и скрипты
src/styles/                variables, base, components, responsive
src/scripts/               navigation, tabs, portfolio, faq, form, animations, extras, utils
src/assets/images/         hero, about, services, projects, backgrounds, seo (WebP)
src/assets/video/          hero-loop.mp4 (необязательно, см. ниже)
docs/ASSETS_PROMPTS.md     промпты для изображений
TODO.md                    что осталось сделать
```

## Форма заявки
Сейчас демо-режим: данные проверяются, но никуда не отправляются. Чтобы подключить реальную отправку, замените блок `setTimeout` в `src/scripts/form.js` на `fetch` к вашему обработчику (Formspree, собственный сервер или серверная функция). Токены и ключи в репозиторий не добавляйте.

## Изображения
Все изображения в формате WebP. Новые картинки кладите в `src/assets/images/<раздел>/`. Для кейсов имена такие: `<проект>-cover.webp`, `<проект>-screen-1.webp`, `<проект>-screen-2.webp`, а список проектов задаётся в `src/scripts/portfolio.js`.

## Публикация
После `npm run build` загрузите содержимое `dist/` на хостинг (GitHub Pages, Netlify, Cloudflare Pages или обычный хостинг). В `index.html` замените `og:image` на полный адрес вида `https://ваш-домен/images/og-image.jpg`.

## Видео в hero
Видео `src/assets/video/hero-loop.mp4` стоит справа от заголовка, только на экранах от 1024 px, без режима «уменьшить движение» и без экономии трафика. На остальных экранах показывается картинка. Если видео нет или оно не загрузилось, тоже остаётся картинка.
Кадр-заставка лежит в `src/assets/images/hero/hero-video-poster.webp`. При замене видео обновите и его (первый кадр ролика): `ffmpeg -i hero-loop.mp4 -frames:v 1 -c:v libwebp -quality 80 hero-video-poster.webp`.
Сжатие нового ролика: `ffmpeg -i in.mp4 -an -vf scale=1104:-2 -c:v libx264 -crf 22 -preset slow -movflags +faststart hero-loop.mp4`.
