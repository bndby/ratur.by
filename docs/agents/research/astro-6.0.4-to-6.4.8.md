# Astro 6.0.4 → 6.4.8: breaking / behavior changes for this repo

**Question:** какие breaking/behavior changes в официальных changelog и docs Astro между 6.0.4 и 6.4.8 могут сломать этот репозиторий (Astro 6 static, Tailwind 4 через `@tailwindcss/vite`, `@astrojs/sitemap`, `astro-robots-txt`, sharp, Cloudflare static)?

**Короткий ответ:** между 6.0.4 и 6.4.8 **нет `Major Changes`**. Единственное явно помеченное breaking change — отключение rasterization SVG по умолчанию в 6.3.0. Для текущего кода ratur.by апгрейд **скорее безопасен**: локальные JPG через `<Image>`, inline SVG (не image pipeline), Fonts API без программного доступа, sitemap без i18n, Cloudflare как static `assets`, без `@astrojs/cloudflare`. Единственные реальные точки внимания: Vite 7 vs hoist Vite 8 с `@tailwindcss/vite`, редиректы remote `<Image>` (сейчас не используются), и что live docs.astro.build уже описывают дефолты Astro 7.

## Этот репозиторий (контекст)

- `astro`: `^6.0.4`, `output: 'static'`, `site: 'https://ratur.by'`
- Tailwind 4: `@tailwindcss/vite` + `tailwindcss` `^4.2.1`, `vite.build.cssMinify: 'lightningcss'`
- Fonts API: `fontProviders.google()` + `<Font />` с `preload`
- View Transitions: `<ClientRouter />`, `prefetch.prefetchAll: true`
- Картинки: `<Image>` из `astro:assets` и `astro/components/Image.astro`; локальные `.jpg`; SVG — inline в компонентах и `public/favicon.svg`
- Content: `glob()` loader, `.md` без `markdown.remarkPlugins`
- `@astrojs/sitemap` `^3.7.1`, `astro-robots-txt` `^1.0.0`, `sharp` `^0.34.5`
- Деплой: `wrangler.jsonc` → `assets.directory: "./dist"` (static, **без** `@astrojs/cloudflare`)
- Node: `engines.node: ">=22.12.0"`

## Verdict по этому репо

| Риск | Изменение | Версия | Этот репо |
| --- | --- | --- | --- |
| Низкий | SVG больше не растеризуется Sharp по умолчанию | 6.3.0 | Нет SVG в image pipeline |
| Низкий (условный) | Remote image redirects: ошибка вместо silent skip | 6.3.0 | Hero/About — локальные JPG; gallery placeholders — сырой `<img>` |
| Низкий (условный) | Vite 8 hoist → crash `require_dist is not a function` | 6.1.0 | Astro 6.4.8 тянет Vite `^7.3.2`; `@tailwindcss/vite@4.2.1` peer — Vite 5/6/7 |
| Нет | `experimental.svgo` удалён, заменён `svgOptimizer` | 6.2.0 | Флаг не используется |
| Нет | `markdown.processor`; top-level remark/rehype **deprecated**, default в 6.4.8 — `unified()` | 6.4.0 | Нет кастомных remark/rehype |
| Нет | Node 20 убран из `engines` | 6.0.6 | Уже `>=22.12.0` |
| Нет в prod | URL-decoding / CVE-2026-59731 | 6.3.2–6.4.8 | Static Cloudflare assets, нет middleware |
| Нет | Cloudflare adapter / `prerenderEnvironment` | разные | Адаптера нет |
| Нет | sitemap lastmod / i18n fallback | sitemap 3.7.2–3.7.3 | Нет i18n |
| Нет | `astro-robots-txt` API | 1.0.0 (2023) | Уже работает на 6.0.4 |
| Нет | sharp peer | optional `^0.34.0` | Репо `^0.34.5` |

## Breaking / behavior (Astro core)

Источники changelog: [`packages/astro/CHANGELOG.md` @ `astro@6.4.8`](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md). Релизы: [6.1.0](https://github.com/withastro/astro/releases/tag/astro%406.1.0), [6.3.0](https://github.com/withastro/astro/releases/tag/astro%406.3.0), [6.4.0](https://github.com/withastro/astro/releases/tag/astro%406.4.0), [6.4.8](https://github.com/withastro/astro/releases/tag/astro%406.4.8).

Между 6.0.5 и 6.4.8 секций `### Major Changes` нет. Все ниже — `Minor`/`Patch`, плюс одно явно названное breaking.

### 1. SVG rasterization выключена по умолчанию (6.3.0) — единственное явная breaking

Astro больше не растеризует SVG-источники в default image service / endpoint. Чтобы вернуть обработку: `image.dangerouslyProcessSVG: true`. Changelog называет это breaking для тех, кто полагался на rasterize SVG. ([astro@6.3.0](https://github.com/withastro/astro/releases/tag/astro%406.3.0), [changelog 6.3.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#630))

Docs: `image.dangerouslyProcessSVG` — `boolean`, default `false`, added `astro@6.3.0`. Выключено, потому что специально сформированные SVG дороги в обработке и годятся для DoS. ([configuration reference](https://docs.astro.build/en/reference/configuration-reference/#imagedangerouslyprocesssvg))

6.3.6: remote SVG больше не падают с ошибкой без флага — Sharp определяет формат и пропускает SVG untouched; workaround — `format="svg"`. ([changelog 6.3.6](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#636), [release 6.3.6](https://github.com/withastro/astro/releases/tag/astro%406.3.6))

Upgrade-to-v6 описывает *добавление* SVG rasterization в 6.0 (противоположное направление). Для интервала 6.0.4→6.4.8 ориентир — changelog 6.3.0, не v6 upgrade guide. ([upgrade to v6 — Changed: SVG rasterization](https://docs.astro.build/en/guides/upgrade-to/v6/#changed-svg-rasterization))

**Этот репо:** SVG только inline (`<svg>`) и `public/favicon.svg`. `<Image>` получает `.jpg`. Риска нет, пока SVG не попадёт в `src` у `<Image>`/`getImage()` без `format="svg"`.

### 2. Remote image redirects (6.3.0) — behavior, может сломать сборку

Раньше редирект remote URL для оптимизации игнорировался молча. Теперь до 10 редиректов; если хост не в `image.remotePatterns` / `image.domains` — **ошибка**. ([astro@6.3.0](https://github.com/withastro/astro/releases/tag/astro%406.3.0))

**Этот репо:** Hero/About импортируют локальные JPG. Gallery Unsplash placeholders идут через сырой `<img>`, не через `<Image>`. Fallback Unsplash в Hero (`images.unsplash.com`) попадёт в `<Image>` только если убрать локальный файл. `image.domains` не задан. Если снова включить remote `<Image>` на Unsplash (часто с редиректами) — билд может упасть, пока не добавить `image.domains` / `remotePatterns`.

### 3. Vite 8 vs Astro Vite 7 + `@tailwindcss/vite` (6.1.0)

Astro 6.1.0 предупреждает, если на top-level проекта Vite 8, и при `astro add cloudflare` пишет `overrides.vite: "^7"`. Причина: split Vite 7 (Astro) vs Vite 8 (hoist от пакетов вроде `@tailwindcss/vite`) → crash `require_dist is not a function`. ([changelog 6.1.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#610), [release 6.1.0](https://github.com/withastro/astro/releases/tag/astro%406.1.0))

Зависимости:

- astro@6.0.4: `"vite": "^7.3.1"`, engines `"node": "^20.19.1 || >=22.12.0"` ([package.json @ 6.0.4](https://github.com/withastro/astro/blob/astro@6.0.4/packages/astro/package.json))
- astro@6.4.8: `"vite": "^7.3.2"`, engines `"node": ">=22.12.0"`, optional `"sharp": "^0.34.0"`, export `./components/*` сохранён ([package.json @ 6.4.8](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/package.json))
- `@tailwindcss/vite@4.2.1`: `peerDependencies.vite`: `"^5.2.0 || ^6 || ^7"` ([npm `@tailwindcss/vite@4.2.1`](https://registry.npmjs.org/@tailwindcss/vite/4.2.1))

**Этот репо:** при текущих пинах Vite 8 не должен подтянуться. Риск — если позже поднять `@tailwindcss/vite` до версии с peer Vite 8, не трогая Astro 6.

### 4. `experimental.svgo` удалён (6.2.0)

Флаг заменён на `experimental.svgOptimizer` + `svgoOptimizer()`. Старый `svgo: true` больше не валиден. ([changelog 6.2.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#620), [experimental SVG optimization](https://docs.astro.build/en/reference/experimental-flags/svg-optimization/))

**Этот репо:** не используется.

### 5. Markdown processor (6.4.0) — deprecation, не breaking в 6.4.8

Новый `markdown.processor`. **В 6.4.8 default — `unified()`**; remark/rehype продолжают работать. Top-level `markdown.remarkPlugins` / `rehypePlugins` / `remarkRehype` / `gfm` / `smartypants` **deprecated**, удаление в будущем major. Опционально — Sätteri (`@astrojs/markdown-satteri`), без remark/rehype. ([astro@6.4.0](https://github.com/withastro/astro/releases/tag/astro%406.4.0), [Markdown guide](https://docs.astro.build/en/guides/markdown-content/))

**Caveat по live docs:** текущий [configuration reference](https://docs.astro.build/en/reference/configuration-reference/#markdownprocessor) пишет, что default — Sätteri. Это расходится с changelog 6.4.0 и совпадает с [upgrade-to-v7](https://docs.astro.build/en/guides/upgrade-to/v7/). Для интервала **6.0.4→6.4.8** источник истины — changelog @ `astro@6.4.8`.

**Этот репо:** `glob()` + `.md`, без remark/rehype в `astro.config.mjs`. Поведение Markdown не должно смениться.

### 6. Node 20 убран (6.0.6)

«Removes temporary support for Node >=20.19.1». ([changelog 6.0.6](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#606)) В 6.4.8 `engines.node` = `>=22.12.0`.

**Этот репо:** уже `>=22.12.0`. CI/хостинг на Node 20 сломались бы; здесь нет.

### 7. URL decoding / CVE-2026-59731 (6.3.2 → 6.4.8)

- 6.3.2: double-encoded paths → 400 вместо partial decode. ([changelog 6.3.2](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#632))
- 6.4.7: iterative decoding до канонической формы (вместо безусловного 400), с сохранением фикса CVE-2025-66202. ([changelog 6.4.7](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#647))
- 6.4.8: «Harden the limits on the number of decoding on the URL» — патч [GHSA-vj59-8hwv-xxmv](https://github.com/withastro/astro/security/advisories/GHSA-vj59-8hwv-xxmv) / CVE-2026-59731. Затронута только **6.4.7**. Эксплуатация: pathname-based middleware + `next(context.url)` rewrite. ([astro@6.4.8](https://github.com/withastro/astro/releases/tag/astro%406.4.8))

**Этот репо:** static `dist` на Cloudflare Assets. Astro request pipeline в проде нет, middleware нет. Актуально только для `astro dev` / `astro preview`. 6.4.8 безопаснее, чем остановиться на 6.4.7.

### 8. Fonts API (additive / visual)

- 6.2.0: `experimental_getFontFileURL()` из `astro:assets`. ([changelog 6.2.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#620), [fonts guide](https://docs.astro.build/en/guides/fonts/#accessing-font-data-programmatically))
- 6.4.3: «Improves optimized fallbacks generation when using the Fonts API by using better metrics for bold variants». ([changelog 6.4.3](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#643))

Конфиг `fonts` + `<Font cssVariable preload />` в docs без breaking. ([fonts guide](https://docs.astro.build/en/guides/fonts/), [configuration / fontProviders](https://docs.astro.build/en/reference/configuration-reference/))

**Этот репо:** Google Oswald/Inter через CSS variables, без `fontData` / `experimental_getFontFileURL`. Возможен едва заметный сдвиг fallback-метрик для bold (6.4.3), не ломающий сборку.

### 9. ClientRouter (6.1.0)

Client router пропускает view-transition анимации, если браузер уже даёт свою (например swipe). ([changelog 6.1.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#610))

**Этот репо:** `<ClientRouter />` есть. Поведение навигации может измениться на жестах; это фикс, не поломка.

### 10. lightningcss + Tailwind `space-*` (6.2.2) — фикс, не break

Исправлено: scoped styles на неверный элемент при `vite.css.transformer: 'lightningcss'` и вложенном `&` внутри `:where(...)` (Tailwind v4 `space-x-*` / `space-y-*` / `divide-*`). ([changelog 6.2.2](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#622))

**Этот репо:** много `space-y-*`, но minify — `vite.build.cssMinify: 'lightningcss'`, не `vite.css.transformer`. Баг 6.2.2 к этому конфигу не относится. Если когда-нибудь включить transformer `lightningcss`, 6.2.2+ как раз нужен.

### 11. Прочее, что не бьёт этот стек

- `compressHTML: 'jsx'` (6.2.0) — opt-in.
- `image.service.config` codec defaults для Sharp (6.1.0) — opt-in. ([changelog 6.1.0](https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md#610), [config: image.service.config.png](https://docs.astro.build/en/reference/configuration-reference/))
- `astro/jsx/rehype.js` восстановлен в 6.4.1 для старого `@astrojs/mdx`, удаление в 7.0. MDX нет.
- `addAttribute` выкидывает имена атрибутов с `" ' > / =` и whitespace (6.4.6). Легитимных таких атрибутов в репо нет.
- TypeScript v6 как devDependency astro (6.3.4): «No changes are needed from users».
- Adapter-only: `preserveBuildServerDir`, `astro preview` + adapter `previewEntrypoint`, Cloudflare `prerenderEnvironment`, server islands.
- 6.3.3 reflected XSS в slot names hydrated islands — islands нет.

## Интеграции и деплой

### `@astrojs/sitemap`

Changelog интеграции @ tag `astro@6.4.8`: [sitemap CHANGELOG](https://github.com/withastro/astro/blob/astro@6.4.8/packages/integrations/sitemap/CHANGELOG.md).

- 3.7.1 (уже в `package.json`): Astro 6, свой zod, отказ от deprecated route API.
- 3.7.2: i18n fallback pages при `fallbackType: 'rewrite'` (Astro 6.1.0 `fallbackRoutes`).
- 3.7.3: `lastmod` в sitemap index по самой свежей URL дочернего файла. npm latest: `3.7.3` ([registry `@astrojs/sitemap`](https://registry.npmjs.org/@astrojs/sitemap/latest)).

Breaking для апгрейда Astro нет. i18n fallbacks репо не использует. 3.7.3 — косметика SEO, не блокер.

### `astro-robots-txt`

npm: `1.0.0`, last publish 2023-09-08, README требует корневой `site`, default `Sitemap: …/sitemap-index.xml`. DevDependency в пакете: `astro ^3.0.11`. ([npm astro-robots-txt](https://www.npmjs.com/package/astro-robots-txt), [upstream README](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt))

Между 6.0.4 и 6.4.8 новых Integration API removals, которые бы впервые сломали пакет, changelog Astro не фиксирует (крупные removals `astro:build:done.routes` — это 6.0.0). Репо уже на 6.0.4 с этой интеграцией. Риск регрессии низкий; пакет официально не тестировался на Astro 6.4.

### sharp

astro@6.0.4 и 6.4.8: `optionalDependencies.sharp: ^0.34.0`. Репо: `^0.34.5`. Codec config (6.1.0) opt-in. 6.2.2: animated AVIF больше не роняет build (passthrough). Локальные JPG/gallery glob без AVIF animation — без эффекта.

### Cloudflare static

Репо не ставит `@astrojs/cloudflare`. `wrangler.jsonc`: `assets.directory: "./dist"`. Продакшен — статика, не Astro SSR.

Патчи changelog про Cloudflare adapter (`prerenderEnvironment: 'node'`, miniflare restart, server islands, build-time `isNode` regress/revert в 6.4.5) **не применяются**. 6.4.0 preview-изменения для adapter `previewEntrypoint` тоже нет.

`astro add cloudflare` в 6.1.0 сам пишет Vite 7 override — этот репо команду не использует.

## Что проверить после bump (не меняя код заранее)

1. `astro build` и `astro preview` — Fonts, `<Image>` JPG, sitemap, robots.txt.
2. В lockfile одна копия Vite major 7; нет Vite 8 рядом с `@tailwindcss/vite`.
3. Страницы с `space-y-*` визуально (на случай если когда-нибудь включат `vite.css.transformer: 'lightningcss'`).
4. Не останавливаться на 6.4.7.

## Источники

- Changelog: https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/CHANGELOG.md
- Релизы: https://github.com/withastro/astro/releases/tag/astro%406.1.0 · https://github.com/withastro/astro/releases/tag/astro%406.2.0 · https://github.com/withastro/astro/releases/tag/astro%406.3.0 · https://github.com/withastro/astro/releases/tag/astro%406.4.0 · https://github.com/withastro/astro/releases/tag/astro%406.4.8
- package.json: https://github.com/withastro/astro/blob/astro@6.0.4/packages/astro/package.json · https://github.com/withastro/astro/blob/astro@6.4.8/packages/astro/package.json
- Docs: https://docs.astro.build/en/guides/upgrade-to/v6/ · https://docs.astro.build/en/reference/configuration-reference/ · https://docs.astro.build/en/guides/images/ · https://docs.astro.build/en/guides/fonts/ · https://docs.astro.build/en/guides/markdown-content/ · https://docs.astro.build/en/reference/experimental-flags/svg-optimization/
- Security: https://github.com/withastro/astro/security/advisories/GHSA-vj59-8hwv-xxmv
- Sitemap changelog: https://github.com/withastro/astro/blob/astro@6.4.8/packages/integrations/sitemap/CHANGELOG.md
- npm: https://registry.npmjs.org/@tailwindcss/vite/4.2.1 · https://registry.npmjs.org/@astrojs/sitemap/latest · https://www.npmjs.com/package/astro-robots-txt
