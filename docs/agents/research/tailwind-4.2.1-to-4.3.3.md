# Tailwind CSS 4.2.1 → 4.3.3: breaking / behavior changes vs this repo

**Question:** какие breaking/behavior changes в Tailwind CSS и `@tailwindcss/vite` между 4.2.1 и 4.3.3 (и `@tailwindcss/typography` 0.5.19 → 0.5.20) могут затронуть этот репозиторий?

**Ответ:** в официальных GitHub-релизах `v4.2.2`…`v4.3.3` нет секций Breaking / Removed. Upgrade guide на tailwindcss.com описывает только breaking changes **v3 → v4.0**, не 4.2 → 4.3. Единственная секция **Changed** в диапазоне — упрощение CSS для `*-0` / `*-1` в 4.3.1. Единственное изменение с подтверждённым визуальным эффектом по умолчанию — смена стека `--font-sans` в **4.3.3** (в changelog как Fixed; пользователи и мейнтейнер признают, что это меняет типографику). Для этого репозитория риск низкий: шрифты переопределены через `--font-body` / `--font-heading` и класс `font-body`. `@tailwindcss/typography` 0.5.20 не меняет CSS — только peer range под стабильный Tailwind v4; для pnpm это релевантно.

Промежуточные релизы, которые входят в апгрейд: **4.2.2, 4.2.3, 4.2.4, 4.3.0, 4.3.1, 4.3.2, 4.3.3**. Пакеты `tailwindcss` и `@tailwindcss/vite` публикуются из одного монорепо с одним changelog.

---

## Что сейчас в репозитории

Зафиксировано по дереву, не по changelog:

| Место | Использование |
| --- | --- |
| `package.json` | `tailwindcss` ^4.2.1, `@tailwindcss/vite` ^4.2.1, `@tailwindcss/typography` ^0.5.19 |
| `pnpm-lock.yaml` | `tailwindcss@4.2.1`, `@tailwindcss/vite@4.2.1`, `@tailwindcss/typography@0.5.19(tailwindcss@4.2.1)`; Vite **7.3.1** (через Astro) |
| `astro.config.mjs` | `vite.plugins: [tailwindcss()]`, `cssMinify: 'lightningcss'` |
| `src/styles/global.css` | `@import "tailwindcss";` `@import "./theme.css";` `@plugin "@tailwindcss/typography";` `@layer base { … }` |
| `src/styles/theme.css` | `@theme { --color-*, --radius-*, --text-*, --container-site, --spacing-section }` и `@theme inline { --font-heading, --font-body }` |
| разметка | кастомные утилиты (`text-h1`, `max-w-site`, `py-section`, `bg-primary/10`, `font-heading`, `font-body`); `prose` только в `src/layouts/PostLayout.astro` |
| не используется | `font-sans`, `placeholder-*`, `start-*`/`end-*`, `@source`, `@utility`, `@variant`, `@apply`, Vite `resolve.alias` |

`html` получает `lang` из `brand.locale` (`ru_RU` → `ru`). `body` несёт `font-body`. В `theme.css` fallback после Inter/Oswald всё ещё `ui-sans-serif, system-ui` — это **наш** стек, не дефолт Tailwind.

Playwright (`tests/homepage.spec.ts`, `tests/performance.spec.ts`) не делает screenshot-сравнения шрифтов.

---

## Официальный статус breaking

- [Upgrade guide](https://tailwindcss.com/docs/upgrade-guide): «Here's a comprehensive list of all the breaking changes in Tailwind CSS **v4.0**». Документ про миграцию с v3 (директивы `@tailwind`, PostCSS → Vite plugin, удалённые утилиты). Для 4.2 → 4.3 отдельного upgrade guide нет.
- [Блог v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3) (8 May 2026): описывает additive-фичи 4.2 и 4.3 (палитры, scrollbar, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`, `--default(…)`). Про breaking changes не сказано. Команда апгрейда для Vite: `npm install tailwindcss@latest @tailwindcss/vite@latest`.
- [CHANGELOG.md @ v4.3.3](https://github.com/tailwindlabs/tailwindcss/blob/v4.3.3/CHANGELOG.md) и [релизы](https://github.com/tailwindlabs/tailwindcss/releases): в `## [4.2.2]` … `## [4.3.3]` есть Added / Fixed / **Changed** (только 4.3.1). Нет Breaking / Removed. Deprecation `start-*`/`end-*` была в **4.2.0** — уже в текущем 4.2.1; в разметке репо эти классы не встречаются.
- npm: `tailwindcss@4.2.1` опубликован 2026-02-23; `tailwindcss@4.3.3` и `@tailwindcss/vite@4.3.3` — 2026-07-16. Engines у пакетов не заданы. Peer `@tailwindcss/vite`: 4.2.1 = `vite: ^5.2.0 \|\| ^6 \|\| ^7`; 4.3.3 добавляет `\|\| ^8` ([#19790](https://github.com/tailwindlabs/tailwindcss/pull/19790) в 4.2.2). Vite 7.3.1 в lockfile остаётся в диапазоне.

---

## Изменения, которые могут затронуть этот репозиторий

Ранжировано по вероятности эффекта при прямом прыжке 4.2.1 → 4.3.3 (минуя промежуточные баги 4.2.3).

### 1. Дефолтный `--font-sans` (4.3.3) — визуальное поведение, не помечено Breaking

[v4.3.3 Fixed](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3): «Use explicit platform fonts instead of `system-ui` and `ui-sans-serif` so CJK text respects the page's `lang` attribute on Windows» ([#20318](https://github.com/tailwindlabs/tailwindcss/pull/20318)).

Было: `ui-sans-serif, system-ui, sans-serif, …`. Стало: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, …`. Текущие docs это подтверждают: [font-family](https://tailwindcss.com/docs/font-family) и [theme](https://tailwindcss.com/docs/theme) показывают новый стек.

[Issue #20348](https://github.com/tailwindlabs/tailwindcss/issues/20348) (закрыт): апгрейд 4.3.2 → 4.3.3 менял типографику и метрики текста. Мейнтейнер Robin Malfait: bugfix «_can_ be a breaking change if you somehow relied on the broken behavior»; workaround — вернуть старый `--font-sans` в `@theme`. Репорты visual-diff на Ubuntu CI при дефолтных шрифтах; на macOS часто без разницы.

**Этот репо:** класс `font-sans` не используется. `body` имеет `font-body`; `--font-heading` / `--font-body` заданы в `@theme inline` с Inter/Oswald. Preflight по-прежнему вешает `--font-sans` на `html` ([Preflight](https://tailwindcss.com/docs/preflight) инжектится через `@import "tailwindcss"`). Наследование с `body { font-family: var(--font-body) }` перекрывает видимый текст. Эффект возможен только если какой-то элемент не наследует `body` (редко) или если webfont не загрузился и сработает fallback — а наш fallback в `theme.css` всё ещё `ui-sans-serif, system-ui`, то есть **не** следует новому дефолту Tailwind.

### 2. `@plugin` + `@tailwindcss/vite` resolver (4.2.3 регрессия, починено к 4.3.0)

Цепочка:

- **4.2.3** начал резолвить Vite aliases. При `resolve.alias` вида `{ find: '@', … }` `@plugin "@tailwindcss/typography"` мог резолвиться в локальный путь и падать: `Cannot find module '…/@tailwindcss/typography'` ([#19946](https://github.com/tailwindlabs/tailwindcss/issues/19946)). Воспроизводилось и на Astro 6.
- **4.2.4** [#19947](https://github.com/tailwindlabs/tailwindcss/pull/19947): fallback, если Vite-alias не даёт абсолютный путь к пакету.
- **4.3.0** [#19949](https://github.com/tailwindlabs/tailwindcss/pull/19949): JS-плагины не резолвить в `browser` CSS entry (`Unknown file extension ".css"`, типично daisyUI).
- **4.3.0** [#19965](https://github.com/tailwindlabs/tailwindcss/pull/19965): относительные `@import` / `@plugin` относительно **текущего .css файла**, не parent `base`. Регрессия с 4.2.3 ([#19956](https://github.com/tailwindlabs/tailwindcss/issues/19956)).

Docs: [`@plugin "@tailwindcss/typography"`](https://tailwindcss.com/docs/functions-and-directives) — штатный способ подключить JS-плагин.

**Этот репо:** как раз `@plugin "@tailwindcss/typography"` + `@tailwindcss/vite`. Vite-alias `@` в `astro.config.mjs` нет. Прямой прыжок на 4.3.3 **включает фиксы** и минует окно 4.2.3. Не останавливаться на 4.2.3.

### 3. Peer `@tailwindcss/typography` 0.5.19 → 0.5.20

[Релиз 0.5.20](https://github.com/tailwindlabs/tailwindcss-typography/releases/tag/v0.5.20) / [CHANGELOG](https://github.com/tailwindlabs/tailwindcss-typography/blob/v0.5.20/CHANGELOG.md): только «Support installing with stable versions of Tailwind CSS v4» ([#424](https://github.com/tailwindlabs/tailwindcss-typography/pull/424)). CSS/API непрозе.

npm peer:

- 0.5.19: `>=3.0.0 || insiders || >=4.0.0-alpha.20 || >=4.0.0-beta.1`
- 0.5.20: `>=3.0.0 || >=4.0.0 || insiders`

PR #424: `pnpm peers check` считал `tailwindcss@4.2.4` unmet peer у 0.5.19. Репо на **pnpm**. Имеет смысл бампать typography вместе с 4.3.3. CSS `prose` / `prose-headings:` / `prose-a:` в `PostLayout.astro` от 0.5.20 не должен измениться.

### 4. Preflight: `iframe:focus-visible` в Firefox (4.3.3)

[v4.3.3](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3): «Prevent Preflight from overriding Firefox's native `iframe:focus-visible` outline styles» ([#20292](https://github.com/tailwindlabs/tailwindcss/pull/20292), [#19795](https://github.com/tailwindlabs/tailwindcss/issues/19795)).

**Этот репо:** два `<iframe>` на `src/pages/contact/index.astro` (карты). Изменение только в Firefox при фокусе iframe: лишний `outline: auto` уйдёт. Желаемый фикс, не поломка layout.

### 5. CSS output `*-0` / `*-1` (4.3.1 Changed)

[v4.3.1 Changed](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.1) [#20196](https://github.com/tailwindlabs/tailwindcss/pull/20196): `m-0` / `left-0` → `0` вместо `calc(var(--spacing) * 0)`; `m-1` / `left-1` → `var(--spacing)` вместо `calc(var(--spacing) * 1)`.

**Этот репо:** `top-0`, `inset-0` есть (Header, Gallery, blog). Визуально эквивалентно; может чуть сжаться CSS. Не breaking layout.

### 6. Vite HMR / sourcemaps (dev-only, фиксы)

- 4.2.2 [#19745](https://github.com/tailwindlabs/tailwindcss/pull/19745): не full-reload для server-only модулей.
- 4.3.1 [#20103](https://github.com/tailwindlabs/tailwindcss/pull/20103): «Sourcemap is likely to be incorrect» с `@tailwindcss/vite`.
- 4.3.2 [#20259](https://github.com/tailwindlabs/tailwindcss/pull/20259): не крашиться в HMR при удалении scanned files.
- 4.3.3 [#20336](https://github.com/tailwindlabs/tailwindcss/pull/20336): не full page reload, когда scanned files обработаны Vite, но ещё не загружены как модули.

На прод-CSS не влияет. Для `astro dev` — плюс.

---

## Изменения, которые этот репозиторий почти наверняка не затронут

Проверено по changelog + использованию в дереве.

| Изменение | Где | Почему не бьёт |
| --- | --- | --- |
| Hue `none` вместо `0` у achromatic oklch (gray/neutral/zinc/mauve) | 4.3.3 [#20314](https://github.com/tailwindlabs/tailwindcss/pull/20314) | Правка **дефолтной** палитры в `theme.css` Tailwind. Цвета репо — свои hex в `@theme`. Классов `bg-gray-*` / `text-slate-*` нет. Opacity вроде `bg-primary/10` идёт через `color-mix` своих `--color-*`. |
| `placeholder-*` читает `--placeholder-color` | 4.2.3 [#19843](https://github.com/tailwindlabs/tailwindcss/pull/19843) | `placeholder-*` нет. |
| `text-[--spacing(…)]` → `font-size`, не `color` | 4.3.2 [#20260](https://github.com/tailwindlabs/tailwindcss/pull/20260) | Размер текста — `text-h1` и т.п. из `--text-*`, не `text-[--spacing()]`. |
| `--value(…)` обязателен в functional `@utility` | 4.3.0 [#20005](https://github.com/tailwindlabs/tailwindcss/pull/20005) | Своих `@utility` нет. |
| Новые утилиты scrollbar / zoom / tab / `@container-size` | 4.3.0, [блог](https://tailwindcss.com/blog/tailwindcss-v4-3) | Additive. В разметке не используются. |
| `start`/`end` без значения не генерируют CSS | 4.3.0 [#20003](https://github.com/tailwindlabs/tailwindcss/pull/20003) | Эти утилиты не используются. |
| `@source` scanning / gitignore / `.env` | 4.2.3–4.3.3 | Явных `@source` нет; дефолтный content scan Astro-файлов. |
| Canonicalization (IDE/upgrade tool) | 4.2.2–4.3.3 | Меняет подсказки/миграции, не runtime CSS, пока не гоняют `@tailwindcss/upgrade`. |
| CLI / webpack / postcss / Deno / Node 26 `Module#registerHooks` | 4.3.1+ | Стек: Vite через Astro, не CLI/webpack. Node engines репо `>=22.12.0`. |
| Vite 8 peer | 4.2.2 | Additive. Lockfile на Vite 7. |

---

## Практический вывод для апгрейда

1. **Прыгать сразу на 4.3.3** у `tailwindcss` и `@tailwindcss/vite` **одной версией**. Не останавливаться на 4.2.3: там ломался `@plugin "@tailwindcss/typography"` при Vite-alias `@`.
2. **Поднять `@tailwindcss/typography` до 0.5.20** вместе с этим: CSS не меняется, peer range чинится для pnpm.
3. **Визуально** ждать сюрприз только если webfont не загрузился (наши fallback всё ещё `system-ui`) или если где-то всплывёт Preflight `--font-sans` без `font-body`. На контактной странице в Firefox проверить фокус iframe (ожидается *меньше* outline).
4. После bump: `astro build` + существующие Playwright-тесты. Screenshot-регрессий в репо нет.

Это исследование, не апгрейд: `package.json` / lockfile здесь не менялись.
