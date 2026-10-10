# Промпты для ассетов NEXORA DIGITAL

Каждый промпт самодостаточен: общий стиль уже внутри. Промпты на английском, так генераторы понимают их лучше. Генерируйте по 3–4 варианта и выбирайте лучший.

**Общий стиль (для справки):** premium dark tech aesthetic; graphite background #101113 and panels #191B1F; one acid-lime accent #B9FF66; off-white #F4F4F0; muted grey #92959D; matte black metal and frosted dark glass with thin glowing lime edges; soft studio rim light; minimal composition, big negative space; sharp geometric forms; subtle film grain.

**Для всех:** без текста, логотипов, людей и водяных знаков. Фон ровный #101113 (где не сказано иное), так он сольётся со страницей. Если генератор не умеет прозрачность, оставляйте тёмный фон.

Негативный промпт (если поддерживается): text, letters, logo, watermark, people, faces, purple, blue, pink, rainbow gradient, clutter, low quality, blurry.

---

## 1. hero-object.png — 1600×1600 (1:1) → images/hero/
Premium 3D render of an abstract sculptural object made of interlocking geometric blocks with quarter-circle cutouts, forming a cube-like monument, centered on a solid flat #101113 background. Matte black graphite metal body with brushed texture, one inner face glowing acid-lime #B9FF66 like a lit core, thin lime emissive edge lines, soft studio rim light from top-left, subtle reflections, soft contact shadow below. Minimal composition with large negative space around the object, sharp geometric forms, subtle film grain, ultra-detailed, 8k. No text, no logos, no people, no watermark.

## 2. hero-poster.png — 1920×1080 (16:9) → images/hero/ (запасной кадр для видео и мобильных)
Same abstract interlocking geometric cube sculpture in matte black graphite metal with a glowing acid-lime #B9FF66 core, placed on the right third of a solid dark #101113 frame, left two thirds empty for a headline. Soft studio rim light, thin lime emissive edges, shallow reflections on a dark floor, minimal composition, big negative space, subtle film grain, cinematic, ultra-detailed. No text, no logos, no people, no watermark.

## 3. hero-loop.mp4 — 1080×1080 или 1920×1080, 6–8 с, без звука → src/assets/video/ (НЕОБЯЗАТЕЛЬНО)
Видео не обязательно: сайт полноценно работает с одной картинкой, а CSS-куб уже вращается. Если хотите видео, это единственное, которое имеет смысл.
Prompt: Slow seamless looping rotation of an abstract interlocking geometric cube sculpture, matte black graphite metal with a glowing acid-lime #B9FF66 inner core and thin lime emissive edges, on a solid #101113 background. Camera static, object rotates 360 degrees smoothly at constant speed, soft studio rim light, subtle reflections, minimal, premium dark tech aesthetic, no text, no logos, no people, no camera shake, no cuts. Loop-friendly, first and last frame identical.
Файл: до 2 МБ, H.264, 24–30 fps, без звука.

## 4. about-ui.png — 1600×1200 (4:3) → images/about/
Abstract composition of floating interface fragments on a solid #101113 background: a code editor window with colored blank lines, a pill toggle switch, a primary button in acid-lime #B9FF66, a small bar chart card, a thin grid of lines behind, all drawn as clean flat panels in #191B1F with 1px light borders and 12px rounded corners, slight isometric depth, soft shadows, one lime highlight only. Premium dark tech aesthetic, minimal, big negative space, NO real text or letters (use blank bars instead), subtle film grain, ultra-detailed 3D render. No logos, no people, no watermark.

## 5–8. Иконки услуг — по 512×512 (1:1) → images/services/
Генерируйте все четыре подряд, чтобы серия была в одном стиле.
- **5. service-design.png:** Premium 3D icon of a website wireframe layout (header bar, hero block, three cards), matte black graphite with thin acid-lime #B9FF66 edges, floating, centered on a solid #101113 background, soft rim light, minimal, sharp geometric forms, subtle grain, no text, no logos, no watermark.
- **6. service-development.png:** Premium 3D icon of angle brackets and a slash (code symbol) as solid geometric shapes, matte black graphite with a glowing acid-lime #B9FF66 inner edge, floating, centered on a solid #101113 background, soft rim light, minimal, sharp geometric forms, subtle grain, no text, no logos, no watermark.
- **7. service-redesign.png:** Premium 3D icon of two overlapping rounded frames with a circular refresh arrow between them, matte black graphite with thin acid-lime #B9FF66 edges, floating, centered on a solid #101113 background, soft rim light, minimal, sharp geometric forms, subtle grain, no text, no logos, no watermark.
- **8. service-interaction.png:** Premium 3D icon of a cursor arrow pressing a pill toggle switch, matte black graphite with the switch glowing acid-lime #B9FF66, floating, centered on a solid #101113 background, soft rim light, minimal, sharp geometric forms, subtle grain, no text, no logos, no watermark.

## Кейсы (images/projects/)
Нейросеть плохо рисует читаемый интерфейс. Для настоящего портфолио лучше положить сюда реальные скриншоты ваших работ. Если используете сгенерированные картинки, подписывайте их как «концепт», а текст на макетах накладывайте уже в вёрстке.

### 9. nova-cover.png — 1600×1200 (4:3)
Dark SaaS dashboard concept floating at a slight angle on a solid #0D1A12 dark green-black background: a wide analytics screen with a sidebar, line chart and bar chart, panels in #191B1F, one bright acid-lime #B9FF66 data line, thin borders, 12px rounded corners, soft rim light, frosted dark glass feel, minimal, premium dark tech aesthetic, no readable text (blank bars instead), subtle film grain, ultra-detailed 3D render. No logos, no people, no watermark.

### 10. nova-screen-1.png — 1920×1200 (16:10)
Flat front view of a dark SaaS analytics dashboard UI: left sidebar with icon placeholders, top bar, four stat cards, a large line chart with one acid-lime #B9FF66 line, a table with blank rows. Background #101113, panels #191B1F, thin 1px borders, 12px rounded corners, premium dark tech aesthetic, clean, no readable text (use blank bars), no logos, no people, no watermark.

### 11. nova-screen-2.png — 1920×1200 (16:10)
Flat front view of a dark SaaS settings and team page UI: tabs row, a list of users as blank rows with round avatar placeholders, toggle switches, one primary acid-lime #B9FF66 button. Background #101113, panels #191B1F, thin borders, 12px rounded corners, premium dark tech aesthetic, clean, no readable text, no logos, no real faces, no watermark.

### 12. forma-cover.png — 1600×1200 (4:3)
Light e-commerce concept: a clean store product page floating at a slight angle on a warm off-white #E8E4DA background, large rounded product image block, a black pill add-to-cart button, small acid-lime #B9FF66 badge, grid of three product cards below, soft natural shadows, matte paper-like feel, minimal premium editorial aesthetic, no readable text, no logos, no people, no watermark, subtle grain, ultra-detailed.

### 13. forma-screen-1.png — 1920×1200 (16:10)
Flat front view of a light, minimal online store catalog UI: top navigation with blank pills, a hero banner with a large abstract product still life (ceramic vase, matte black object), grid of six product cards with blank captions, off-white #F4F4F0 background, black text placeholders as blank bars, one acid-lime #B9FF66 accent button, 12px rounded corners, clean editorial aesthetic, no readable text, no logos, no people, no watermark.

### 14. forma-screen-2.png — 1920×1200 (16:10)
Flat front view of a light online store product page UI: large product image on the left, on the right blank text bars, size selector pills, a black add-to-cart button, a small acid-lime #B9FF66 badge, off-white #F4F4F0 background, 12px rounded corners, clean editorial aesthetic, no readable text, no logos, no people, no watermark.

### 15. mono-cover.png — 1600×1200 (4:3)
Ultra-minimal brand presentation concept: a huge heavy abstract black glyph shape (no real letters) with a small acid-lime #B9FF66 square beside it, on a solid #101113 background, large negative space, thin horizontal divider lines, subtle film grain, premium dark editorial aesthetic, high contrast, no text, no logos, no people, no watermark.

### 16. mono-screen-1.png — 1920×1200 (16:10)
Flat front view of a minimal creative studio website: giant empty typographic block area made of thick dark-grey bars on #101113, a thin line grid, one small acid-lime #B9FF66 square marker, a horizontal row of three blank image tiles below, lots of negative space, premium dark editorial aesthetic, no readable text, no logos, no people, no watermark.

### 17. mono-screen-2.png — 1920×1200 (16:10)
Flat front view of a minimal dark case-study page: a wide image placeholder with an abstract matte black sculpture photo, below it two columns of blank text bars, a thin divider line, a small acid-lime #B9FF66 link bar, #101113 background, lots of negative space, premium dark editorial aesthetic, no readable text, no logos, no people, no watermark.

## 18. og-image.png — 1200×630 → images/seo/ и public/
Только фон: заголовок и название добавите сами в Figma или коде. Prompt: Wide dark banner background, solid #101113, the interlocking geometric cube sculpture in matte black graphite with glowing acid-lime #B9FF66 core placed at the far right, soft rim light, thin horizontal grid lines, left 60% empty for a headline, minimal, subtle film grain, premium dark tech aesthetic, no text, no logos, no people, no watermark.

## 19. cta-bg.png — 2400×1000 (24:10) → images/backgrounds/
Abstract wide background for a call-to-action section: dark #101113 field with a soft elongated acid-lime #B9FF66 light streak and a few thin curved lines passing diagonally, large calm negative space in the center for a headline, subtle film grain, frosted glass depth, premium dark tech aesthetic, low contrast so text stays readable, no text, no logos, no people, no watermark.

---

Логотип и favicon лучше делать векторными. В проекте уже есть `public/favicon.svg` (ромб). Нейросети плохо рисуют логотипы, поэтому финальный знак стоит нарисовать как SVG.
