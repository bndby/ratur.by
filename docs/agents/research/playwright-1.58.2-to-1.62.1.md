# Playwright Test 1.58.2 → 1.62.1: breaking / behavior changes for this repo

**Question:** какие breaking/behavior changes в официальных release notes Playwright Test между 1.58.2 и 1.62.1 требуют смены API, конфига или обязательного `playwright install` для этого репозитория?

**Короткий ответ:** в диапазоне **1.59.0–1.62.1** есть два блока Breaking Changes (1.59 и 1.60). Ни один не попадает в текущие тесты и `playwright.config.ts`. 1.61 и 1.62 breaking-секций не имеют. **`pnpm exec playwright install` обязателен**: bundled Chromium меняется с 145.0.7632.6 (1.58.2) на 151.0.7922.34 (1.62.x). Патч 1.62.1 чинит регрессии tsconfig/`page.evaluate` из 1.62.0 — цель bump именно **1.62.1**, не 1.62.0.

## Этот репозиторий (контекст)

- `@playwright/test`: `^1.58.2` (lockfile 1.58.2)
- `playwright.config.ts`: `testDir: './tests'`, `fullyParallel`, `retries` только в CI, `workers: CI ? 1 : undefined`, HTML reporter (`open: 'never'`), `baseURL: http://localhost:4321`, `trace: 'on-first-retry'`, один проект `chromium` + `devices['Desktop Chrome']`, `webServer: pnpm build && pnpm preview`
- `tests/homepage.spec.ts`: `page.goto`, `getByRole`, `toHaveTitle`, `locator('meta[name="description"]')`
- `tests/performance.spec.ts`: `page.evaluate` (Navigation Timing / PerformanceObserver), `page.waitForTimeout(1500)`, `page.on('response')`, `waitForLoadState('networkidle')`
- Не используется: WebKit, Firefox, junit reporter, component testing, `exposeBinding`, `ariaRef`, `recordVideo` / `videosPath`, `_react`/`_vue`/`:light`, скриншот-сравнения, `workers: 0`

Карта уже фиксирует: после bump — `pnpm exec playwright install`.

## Verdict по этому репо

| Риск | Изменение | Версия | Этот репо |
| --- | --- | --- | --- |
| **Обязательный шаг** | Новые browser binaries (Chromium 145 → 151) | каждый релиз | `pnpm exec playwright install` после bump |
| Нет | macOS 14 WebKit снят | 1.59.0 | Только Chromium |
| Нет | `@playwright/experimental-ct-svelte` удалён | 1.59.0 | CT не используется |
| Нет | junit различает error types | 1.59.0 | Reporter — html |
| Нет | `Locator.ariaRef()`, `exposeBinding.handle`, `logger` на connect, `videosPath`/`videoSize` | 1.60.0 | API не вызываются |
| Нет | `workers: 0` / override non-option fixture → ошибка | 1.60.0 | `workers` = `1` или `undefined` |
| Нет | Debian 11 больше не поддерживается | 1.62.0 | Не целевая OS |
| Нет | clipboard isolation в headless | 1.62.0 | Тесты clipboard не трогают |
| Низкий | `page.waitForTimeout` | — | Вызывается в perf-тесте; в 1.59–1.62 **не удалён** |
| Нет | tsconfig `extends` / project references ломались в 1.62.0 | 1.62.1 | Фикс в цели bump; отдельного tsconfig для тестов нет |

## Источники

Первичные:

| Источник | URL |
| --- | --- |
| Official release notes | [playwright.dev/docs/release-notes](https://playwright.dev/docs/release-notes) |
| GitHub `v1.58.2` | [releases/tag/v1.58.2](https://github.com/microsoft/playwright/releases/tag/v1.58.2) (2026-02-06) |
| GitHub `v1.59.0` | [releases/tag/v1.59.0](https://github.com/microsoft/playwright/releases/tag/v1.59.0) |
| GitHub `v1.60.0` | [releases/tag/v1.60.0](https://github.com/microsoft/playwright/releases/tag/v1.60.0) |
| GitHub `v1.61.0` | [releases/tag/v1.61.0](https://github.com/microsoft/playwright/releases/tag/v1.61.0) |
| GitHub `v1.62.0` | [releases/tag/v1.62.0](https://github.com/microsoft/playwright/releases/tag/v1.62.0) |
| GitHub `v1.62.1` | [releases/tag/v1.62.1](https://github.com/microsoft/playwright/releases/tag/v1.62.1) (2026-07-30) |
| Browsers / install | [playwright.dev/docs/browsers](https://playwright.dev/docs/browsers) |

Диапазон: изменения **после** 1.58.2, включая 1.62.1. Breaking Changes секции **1.58.0** (сняты `_react`/`_vue`/`:light`, `devtools`, macOS 13 WebKit) уже позади текущего пина и в апгрейд не входят.

## Breaking / behavior

### 1. Browser binaries — обязательный `playwright install`

Docs: «Each version of Playwright needs specific versions of browser binaries» и «every time you update Playwright, you might need to re-run the install CLI command». Команда апдейта в тех же docs: поставить пакет, затем `npx playwright install`. ([Browsers](https://playwright.dev/docs/browsers))

Bundled Chromium:

| Версия | Chromium |
| --- | --- |
| 1.58.2 | 145.0.7632.6 |
| 1.59.0 | 147.0.7727.15 |
| 1.60.0 | 148.0.7778.96 |
| 1.61.0 | 149.0.7827.55 |
| 1.62.0 / 1.62.1 | 151.0.7922.34 |

Источники: [release notes 1.58–1.62](https://playwright.dev/docs/release-notes), [v1.58.2](https://github.com/microsoft/playwright/releases/tag/v1.58.2), [v1.62.0](https://github.com/microsoft/playwright/releases/tag/v1.62.0).

**Этот репо:** проект `chromium` + `Desktop Chrome` (не `channel: 'chrome'`). После bump без `pnpm exec playwright install` тесты падают на несовпадении бинарника. Это уже стоит в Notes карты.

### 2. 1.59.0 Breaking

- Снят macOS 14 для **WebKit**. ([release notes 1.59](https://playwright.dev/docs/release-notes), [v1.59.0](https://github.com/microsoft/playwright/releases/tag/v1.59.0))
- Удалён пакет `@playwright/experimental-ct-svelte`.
- junit-репортер различает типы ошибок (`failure` vs `error`).

**Этот репо:** WebKit нет, CT нет, reporter — `html`. Не бьёт. junit не настроен.

### 3. 1.60.0 Breaking — сняты deprecated API

Удалены ([release notes 1.60](https://playwright.dev/docs/release-notes), [v1.60.0](https://github.com/microsoft/playwright/releases/tag/v1.60.0)):

- `Locator.ariaRef()` → `locator.ariaSnapshot()`
- опция `handle` у `BrowserContext.exposeBinding` / `Page.exposeBinding`
- опция `logger` у `BrowserType.connect` / `connectOverCDP`
- context options `videosPath` / `videoSize` → `recordVideo`

Поведение раннера: ошибка, если конфиг переопределяет non-option fixture, или `workers: 0` / отрицательное.

**Этот репо:** ни один из удалённых API не вызывается. `workers` — `1` в CI, иначе `undefined`. HTML reporter, `show-report` — в 1.60 умеет `.zip` напрямую; скрипт `test:report` от этого не ломается.

### 4. 1.61.0 — без Breaking

Additive: WebAuthn Credentials, `page.localStorage` / `sessionStorage`, расширенные video modes для `testOptions.video`, `expect.soft.poll`, Ubuntu 26.04. ([release notes 1.61](https://playwright.dev/docs/release-notes), [v1.61.0](https://github.com/microsoft/playwright/releases/tag/v1.61.0))

Конфиг репо `video` не задаёт (только `trace: 'on-first-retry'`). Менять ничего не нужно.

### 5. 1.62.0 — без Breaking-секции; 1.62.1 — патч

1.62 добавляет stories/galleries component testing, `AbortSignal` на assertion/action, WebP screenshots, `retryStrategy`, HTML `mergeFiles`. Announcement: Debian 11 больше не поддерживается; clipboard в headless изолирован от OS. ([release notes 1.62](https://playwright.dev/docs/release-notes), [v1.62.0](https://github.com/microsoft/playwright/releases/tag/v1.62.0))

1.62.1 — bugfix: tsconfig `extends` bare specifier и directory-form project references (fatal с 1.62); branded primitive в `page.evaluate()`; a11y snapshot. ([v1.62.1](https://github.com/microsoft/playwright/releases/tag/v1.62.1))

**Этот репо:** скриншот-сравнений нет; component testing нет; Debian 11 не целевая. Perf-тесты передают в `page.evaluate` нульаргументную функцию — не branded types. Цель **1.62.1**, чтобы не ловить 1.62.0-регрессии, даже если своего tsconfig у тестов нет.

### 6. `page.waitForTimeout` в perf-тесте

`tests/performance.spec.ts` ждёт 1500 ms перед CLS. В release notes 1.59–1.62 метод **не помечен removed**. На API/конфиг bump не влияет. (Отдельный вопрос качества теста — не этот тикет.)

## Что не нужно менять в конфиге

- `webServer.command: 'pnpm build && pnpm preview'` — раннер это не трогал.
- HTML reporter с `outputFolder` / `open: 'never'` — совместим; `mergeFiles` опционален и по умолчанию выключен.
- `devices['Desktop Chrome']` без `channel` — по-прежнему bundled Chromium (не branded Chrome).
- `trace: 'on-first-retry'` — валидный mode; новые video/trace modes не обязательны.

## Для тикета «Поднять @playwright/test до 1.62.1»

1. Поднять пакет до 1.62.1 (не останавливаться на 1.62.0).
2. Сразу `pnpm exec playwright install` (достаточно chromium / дефолтных браузеров).
3. Правки `playwright.config.ts` и spec-файлов **не требуются** из-за breaking API.
4. Gate карты: `pnpm build` + `pnpm test`. `pnpm test:perf` по-прежнему не критерий отката.

**Ломающих изменений API/конфига для этого репозитория в 1.58.2→1.62.1 нет.** Единственный обязательный побочный шаг — переустановка browser binaries.
