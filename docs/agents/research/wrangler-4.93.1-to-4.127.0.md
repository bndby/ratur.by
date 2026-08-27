# Wrangler 4.93.1 → 4.127.0: breaking/behavior changes

**Вопрос:** какие breaking/behavior changes в официальных changelog Wrangler между 4.93.1 и 4.127.0 могут затронуть этот репозиторий (статический Astro, Cloudflare)?

**Вердикт:** в диапазоне **нет секций `Major Changes` / явных BREAKING** в changelog пакета `wrangler`. Для текущей конфигурации (asset-only Worker без `main`, без Pages, без `legacy_env`) апгрейд CLI **не требует правок `wrangler.jsonc`**. Единственные изменения с ненулевым эффектом — метаданные зависимостей при `wrangler deploy`, локальный runtime (Miniflare/workerd) и риск bump `compatibility_date`.

---

## Снимок репозитория

Сейчас репозиторий использует Wrangler так:

- `package.json`: `"wrangler": "^4.93.1"` (devDependency). Lockfile фиксирует `wrangler@4.93.1`. Скриптов `wrangler` нет: `dev`/`preview` идут через Astro.
- `wrangler.jsonc`: `name`, `compatibility_date: "2026-05-23"`, `assets.directory: "./dist"`. Нет `main`, `env`, `legacy_env`, `site`, `compatibility_flags`, `not_found_handling`.
- `astro.config.mjs`: `output: 'static'`.

Это **Workers Static Assets без Worker-скрипта** (asset-only). Cloudflare документирует именно эту форму: `name` + `compatibility_date` + `assets.directory`, без `main` и без `ASSETS` binding. Источники: [Configuration and Bindings](https://developers.cloudflare.com/workers/static-assets/binding/), [SSG routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/), Context7 `/websites/developers_cloudflare_workers` (страницы `static-assets/binding` и `migrate-from-pages`).

---

## Источники

Первичные источники (не вторичные обзоры):

| Источник | URL |
| --- | --- |
| Wrangler CHANGELOG (`packages/wrangler/CHANGELOG.md`) | [github.com/cloudflare/workers-sdk](https://github.com/cloudflare/workers-sdk/blob/main/packages/wrangler/CHANGELOG.md) |
| GitHub release `wrangler@4.93.1` | [releases/tag/wrangler@4.93.1](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.93.1) (2026-05-21) |
| GitHub release `wrangler@4.127.0` | [releases/tag/wrangler@4.127.0](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.127.0) (2026-08-27) |
| Wrangler docs index | [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler/) |
| Install / Node policy | [install-and-update](https://developers.cloudflare.com/workers/wrangler/install-and-update/) |
| Deprecations | [wrangler/deprecations](https://developers.cloudflare.com/workers/wrangler/deprecations/) |
| Environments | [wrangler/environments](https://developers.cloudflare.com/workers/wrangler/environments/) |
| Compatibility dates | [workers/configuration/compatibility-dates](https://developers.cloudflare.com/workers/configuration/compatibility-dates/) |
| Workers product changelog | [changelog/product/workers](https://developers.cloudflare.com/changelog/product/workers/) |
| npm `wrangler@4.93.1` / `4.127.0` | [registry.npmjs.org](https://registry.npmjs.org/wrangler/4.127.0) |

Диапазон: изменения **после** 4.93.1, включая 4.127.0 (36 релизов: 4.94.0 … 4.127.0). В этом срезе CHANGELOG **нет** заголовка `### Major Changes`.

---

## Runtime vs CLI

Поведение **уже задеплоенного** Worker задаёт `compatibility_date` / `compatibility_flags`, а не версия Wrangler. Cloudflare: обновления runtime не должны ломать уже задеплоенные Workers; несовместимые правки включаются через дату/флаги. Источник: [Compatibility dates](https://developers.cloudflare.com/workers/configuration/compatibility-dates/).

Версия Wrangler влияет на:

1. CLI (`deploy`, `dev`, валидация конфига).
2. Локальный bundled `workerd` / Miniflare (только `wrangler dev` / preview Wrangler).
3. То, что уходит в API при следующем `wrangler deploy`.

Продакшен-рантайм на Cloudflare **не** переключается сам при `pnpm add wrangler@4.127.0`, пока не меняют `compatibility_date` и не деплоят.

---

## Изменения, которые могут затронуть этот репозиторий

### 1. Нет major breaking в 4.94.0–4.127.0

В [CHANGELOG](https://github.com/cloudflare/workers-sdk/blob/main/packages/wrangler/CHANGELOG.md) между `## 4.127.0` и `## 4.93.1` нет `### Major Changes`. Релиз [4.127.0](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.127.0) — minor (Workflows concurrency) + patch (workerd, `wrangler preview` multipart). Релиз [4.93.1](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%404.93.1) — только patch.

Страница [Deprecations](https://developers.cloudflare.com/workers/wrangler/deprecations/) описывает **v4 vs v3/v2** (Workers Sites, Service Environments), не точечные breaking 4.93→4.127.

**Вывод:** апгрейд внутри Wrangler 4 не является major-миграцией.

### 2. `legacy_env` удалён (4.111.0) — конфиг этого репо не использует

Wrangler 4.111.0: Service environments удалены; поле `legacy_env` в конфиге **вызывает ошибку**; флаг `--legacy-env` снят. Поведение по умолчанию уже было `legacy_env = true` (отдельный Worker `name-env`). Источник: [CHANGELOG 4.111.0](https://github.com/cloudflare/workers-sdk/blob/main/packages/wrangler/CHANGELOG.md) ([#14620](https://github.com/cloudflare/workers-sdk/pull/14620)); docs: [Environments](https://developers.cloudflare.com/workers/wrangler/environments/), [Deprecations](https://developers.cloudflare.com/workers/wrangler/deprecations/).

С 4.114.0 поле молча вырезается только из **redirected** `.wrangler/deploy/config.json`; пользовательский конфиг по-прежнему падает. Источник: CHANGELOG 4.114.0 ([#14809](https://github.com/cloudflare/workers-sdk/pull/14809)).

`wrangler.jsonc` этого репо **не содержит** `legacy_env` и `env`. **На текущий конфиг не влияет.** Сломается только если кто-то добавит `legacy_env`.

### 3. Метаданные npm-зависимостей при deploy (4.110.0) — да, при `wrangler deploy`

С 4.110.0 Wrangler кладёт в upload metadata имена пакетов, range из `package.json` и установленные версии из `node_modules` (`dependencies` + `devDependencies`, до 200 записей). Opt-out: `dependencies_instrumentation.enabled = false`. Источники: CHANGELOG 4.110.0 ([#14591](https://github.com/cloudflare/workers-sdk/pull/14591)); [Workers changelog, 9 Jul 2026](https://developers.cloudflare.com/changelog/product/workers/).

Это **не ломает** раздачу статики, но меняет, какие данные уходят в Cloudflare API при деплое. Репозиторий не отключает инструментацию.

### 4. Asset-only deploy больше не пытается provision'ить ресурсы (4.101.0) — плюс

Раньше asset-only деплой мог создавать ресурсы без Worker-скрипта и на следующем деплое падать, потому что повторный provision не к чему биндить. Теперь provisioning для asset-only пропускается. Источник: CHANGELOG 4.101.0 ([#14304](https://github.com/cloudflare/workers-sdk/pull/14304)).

Этот репозиторий — как раз asset-only. Поведение **чинит** возможный блокер, не ломает.

### 5. Загрузка ассетов: новый per-file путь (4.107.1)

«Asset uploads now use a more efficient per-file upload path when the platform enables it. … Existing upload behavior is unchanged when the new path is not enabled.» Источник: CHANGELOG 4.107.1 ([#14305](https://github.com/cloudflare/workers-sdk/pull/14305)).

Конфиг менять не нужно. На статику Astro влияет только как транспорт загрузки.

### 6. Autoconfig стабилен и по умолчанию включён (4.101.0) — низкий риск при существующем `wrangler.jsonc`

Флаги `--experimental-autoconfig` / `--x-autoconfig` заменены на `--autoconfig`, default `true`; выключение: `--autoconfig=false` / `--no-autoconfig`. Источник: CHANGELOG 4.101.0 ([#14276](https://github.com/cloudflare/workers-sdk/pull/14276)).

Проект уже имеет полный `wrangler.jsonc` с `name`. Non-interactive overwrite без конфига, который **называет** Worker, не срабатывает (4.108.0 / 4.109.0, [#14312](https://github.com/cloudflare/workers-sdk/pull/14312)). **Риск для текущего деплоя низкий.** Имеет значение только деплой без этого файла или `wrangler pages deploy` (этот репозиторий Pages-команды не использует).

### 7. `nodejs_compat` по умолчанию с даты `2026-08-04` — только если поднять `compatibility_date`

С даты `2026-08-04` runtime включает `nodejs_compat` и `nodejs_compat_v2` по умолчанию. **Более ранняя дата не затрагивается.** Источники: [Node.js compatibility is now enabled by default](https://developers.cloudflare.com/changelog/post/2026-08-04-nodejs-compat-default/) (4 Aug 2026); CHANGELOG 4.122.0 ([#15123](https://github.com/cloudflare/workers-sdk/pull/15123)).

У репозитория `compatibility_date: "2026-05-23"`. Пока дату не двигают, **рантайм Node.js compat не включается**. Для asset-only Worker без `main` это почти неважно: скрипта нет. Опасно только будущее `wrangler setup` (перезаписывает дату на сегодняшнюю, CHANGELOG 4.122.0) или ручной bump даты.

Если и дату поднять, и оставить явный флаг `nodejs_compat`, workerd отказывается стартовать; Wrangler 4.122.0 начинает дропать избыточные флаги. Этот репозиторий флага не задаёт.

### 8. Bundled workerd / Miniflare / esbuild — только локальный Wrangler

| | 4.93.1 | 4.127.0 |
| --- | --- | --- |
| `workerd` | `1.20260520.1` | `1.20260826.1` |
| `miniflare` | `4.20260520.0` | `5.20260826.0-alpha` |
| `esbuild` | `0.27.3` | `0.28.1` |
| `engines.node` | `>=22.0.0` | `>=22.0.0` |

Источник: npm `wrangler@4.93.1` и `wrangler@4.127.0`.

С 4.117.0 Miniflare v5 переносит локальные тестовые пути `/cdn-cgi/*` → `/cdn-cgi/local/*`; Wrangler прозрачно редиректит старые. Источник: CHANGELOG 4.117.0 ([#14586](https://github.com/cloudflare/workers-sdk/pull/14586)).

`esbuild` 0.28.1 (4.102.0, [#14314](https://github.com/cloudflare/workers-sdk/pull/14314)) бандлит **Worker-скрипт**. Здесь `main` нет — бандлер Wrangler не участвует в сборке Astro.

Локальный превью сайта — `astro preview`, не `wrangler dev`. Смена bundled workerd/Miniflare **не меняет прод** и почти не меняет текущий dev-цикл.

`package.json` репозитория уже `"node": ">=22.12.0"`. Требование Wrangler не ужесточилось.

OS: Wrangler поддерживается на macOS 13.5+, Windows 11, Linux с glibc 2.35 ([install-and-update](https://developers.cloudflare.com/workers/wrangler/install-and-update/)). Это текущая политика docs, **не** отдельная запись breaking в 4.94–4.127.

### 9. Поведение статической раздачи (HTML / 404) в changelog не менялось

Документированные дефолты:

- `html_handling` по умолчанию `auto-trailing-slash`.
- Нет совпадения с файлом → 404; `not_found_handling: "404-page"` — опционально, ближайший `404.html`.

Источники: [SSG routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/); Context7 `/websites/developers_cloudflare_workers` (`static-assets/routing/static-site-generation`, `static-assets`).

В 4.94.0–4.127.0 нет записи, которая меняет эти дефолты. 4.101.0 чинит fallback в `wrangler dev` при **custom routes** ([#14282](https://github.com/cloudflare/workers-sdk/pull/14282)); у репо routes нет. В исходниках нет `404.html`.

### 10. CLI-депрекации, которые этот репозиторий не вызывает

| Версия | Что | Отношение к репо |
| --- | --- | --- |
| 4.98.0 | `--script` скрыт и deprecated; `wrangler deploy <dir>` = static assets. Directory в `--script` — ошибка. [#14153](https://github.com/cloudflare/workers-sdk/pull/14153) | Деплой идёт через `assets.directory` в jsonc, не через `--script`. |
| 4.96.0 | `unstable_dev` `experimental.testMode` удалён. [#13892](https://github.com/cloudflare/workers-sdk/pull/13892) | Программный API не используется. |
| 4.107.1 | `--experimental-vm-modules` удалён. [#14306](https://github.com/cloudflare/workers-sdk/pull/14306) | Флаг не используется. |
| 4.103.0 | Удалены `unstable_getWorkerNameFromProject` и experimental autoconfig exports. | Программный API не используется. |
| 4.108.0 | Agent-driven `wrangler pages deploy` для **нового** static проекта уходит в Workers assets. [#14312](https://github.com/cloudflare/workers-sdk/pull/14312) | Репо не вызывает Pages-команды; уже Workers assets. |
| 4.99.0 | Предупреждения о destructive config conflicts печатаются и в non-interactive (по-прежнему non-blocking без `--strict`). [#14163](https://github.com/cloudflare/workers-sdk/pull/14163) | Может добавить warning в CI, не fail. |
| 4.96.0 / 4.95.0 | `pipelines.pipeline` → `stream` (deprecated); Workflow `schedule` → `schedules`; `web_search` → `websearch`. | В конфиге нет. |
| 4.125.0 | Workflow bindings больше не принимают `remote`. | Нет workflows. |

Workers Sites (`site.bucket`) по-прежнему deprecated в Wrangler v4; docs рекомендуют Static Assets. Источник: [Deprecations](https://developers.cloudflare.com/workers/wrangler/deprecations/). Этот репозиторий уже на `assets.directory`.

---

## Что апгрейд **не** требует

- Менять `wrangler.jsonc` (форма asset-only валидна в актуальных docs).
- Поднимать `compatibility_date` вместе с CLI (это отдельный, сознательный шаг).
- Мигрировать на Pages или обратно: проект уже на Workers Static Assets.
- Менять Node: и 4.93.1, и 4.127.0 требуют `>=22`; репо уже `>=22.12.0`.

Имеет смысл после bump CLI прогнать один `wrangler deploy` (или `--dry-run`) на собранный `dist`, потому что 4.101.0 меняет asset-only provision, а 4.110.0 начинает слать dependency metadata.

---

## Краткий ответ на вопрос тикета

**Ломающих изменений для этого репозитория в 4.93.1→4.127.0 нет.** Удаление `legacy_env` (4.111.0) — единственный жёсткий break конфига в диапазоне, и поле здесь не используется. Поведение статической раздачи Astro→`dist` не переопределялось. Заслуживают внимания только: (1) npm-метаданные при deploy, (2) не поднимать `compatibility_date` «за компанию» без учёта `nodejs_compat` с `2026-08-04`, (3) не запускать `wrangler setup` без нужды — он переписывает дату в jsonc.
