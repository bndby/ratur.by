import { c as createComponent, e as brand, d as client, f as $$Image, r as renderScript, $ as $$BaseLayout, a as $$Header, b as $$Footer, s as services } from './Footer_pFfB5kot.mjs';
import { m as maybeRenderHead, a as renderTemplate, b as addAttribute, n as renderTransition, r as renderComponent, u as unescapeHTML } from './prerender_BXd3ENYn.mjs';
import { $ as $$CTA } from './CTA_C-BAjcFj.mjs';

const _2 = new Proxy({"src":"/_astro/2.C-mmIhN1.jpg","width":1400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/by/work/ratur.by/src/assets/images/gallery/2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/by/work/ratur.by/src/assets/images/gallery/2.jpg");
							return target[name];
						}
					});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: _2
}, Symbol.toStringTag, { value: 'Module' }));

const _3 = new Proxy({"src":"/_astro/3.C-LEQBon.jpg","width":1400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/by/work/ratur.by/src/assets/images/gallery/3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/by/work/ratur.by/src/assets/images/gallery/3.jpg");
							return target[name];
						}
					});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: _3
}, Symbol.toStringTag, { value: 'Module' }));

const localHeroImage = new Proxy({"src":"/_astro/hero.DOg_4ev9.jpg","width":1400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/by/work/ratur.by/src/assets/images/hero/hero.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/by/work/ratur.by/src/assets/images/hero/hero.jpg");
							return target[name];
						}
					});

const localAboutImage = new Proxy({"src":"/_astro/about.DV2xgI20.jpg","width":864,"height":1152,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/by/work/ratur.by/src/assets/images/about/about.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("/home/by/work/ratur.by/src/assets/images/about/about.jpg");
							return target[name];
						}
					});

const discovered = Object.entries(
  /* #__PURE__ */ Object.assign({"../assets/images/gallery/2.jpg": __vite_glob_0_0,"../assets/images/gallery/3.jpg": __vite_glob_0_1


})
).map(([path, mod]) => ({
  src: mod.default,
  alt: path.split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  // Title Case
}));
const placeholders = [
  { src: "https://images.unsplash.com/photo-1772567732969-c1506edf80a0?w=600&q=80", alt: "Completed kitchen renovation" },
  { src: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&q=80", alt: "Bathroom remodel with modern fixtures" },
  { src: "https://images.unsplash.com/photo-1761166518480-49279513d65f?w=600&q=80", alt: "Fresh landscaping and walkway installation" },
  { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80", alt: "Interior painting and trim work" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Electrical panel upgrade" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", alt: "Deck construction and staining" }
];
const galleryImages = discovered.length > 0 ? discovered : placeholders;

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const PLACEHOLDER = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80";
  const {
    topper = "Гарантия качества",
    heading = brand.tagline,
    description = brand.description,
    ctaLabel = "Контакты",
    ctaHref = "/contact",
    secondaryLabel = "Наши услуги",
    secondaryHref = "/services",
    imageSrc = localHeroImage ?? PLACEHOLDER,
    imageAlt = "Буровая компания РАТУР+"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-24"> <div class="mx-auto grid max-w-site grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12"> <!-- Copy --> <div class="order-2 space-y-5 lg:order-1 lg:space-y-6"> ${topper && renderTemplate`<span class="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-topper font-bold uppercase tracking-widest text-accent"> ${topper} </span>`} <h1 class="font-heading text-display font-bold uppercase leading-none tracking-tight text-text"${addAttribute(renderTransition($$result, "6hy5w3rc", "", "hero-heading"), "data-astro-transition-scope")}> ${heading} </h1> <p class="max-w-lg text-lead text-text-muted leading-relaxed"> ${description} </p> <!-- CTA row --> <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4"> <a${addAttribute(ctaHref, "href")} class="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-accent-fg shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"> ${ctaLabel} </a> <a${addAttribute(secondaryHref, "href")} class="inline-flex min-h-[44px] items-center justify-center rounded-md border-2 border-primary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"> ${secondaryLabel} </a> </div> <!-- Tap-to-call --> <a${addAttribute(`tel:${client.phoneForTel}`, "href")} class="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-text-muted transition-colors hover:text-primary"> <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${client.phoneFormatted} </a> </div> <!-- Hero image --> <div class="relative order-1 overflow-hidden rounded-lg shadow-xl aspect-4/3 lg:order-2"${addAttribute(renderTransition($$result, "qdyuwk4z", "", "hero-image"), "data-astro-transition-scope")}> ${typeof imageSrc === "string" ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")}${addAttribute(800, "width")}${addAttribute(600, "height")} loading="eager" decoding="async" class="size-full object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": imageAlt, "width": 800, "height": 600, "loading": "eager", "decoding": "async", "class": "size-full object-cover" })}`} </div> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/Hero.astro", "self");

const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TrustBar;
  const { items = [
    { label: "Лицензированная компания" },
    { label: "Работы под ключ" },
    { label: "лет опыта", value: "12+" },
    { label: "завершенных проектов", value: "100+" }
  ] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="border-y border-border bg-surface" aria-label="Trust signals"> <div class="mx-auto max-w-site overflow-x-auto px-4 py-5 sm:px-6 sm:py-6"> <ul class="flex flex-wrap items-center justify-between gap-6 sm:gap-8 lg:justify-center lg:gap-16" role="list"> ${items.map(({ label, value }) => renderTemplate`<li class="flex shrink-0 items-center gap-2.5 text-sm sm:text-base"> <svg class="size-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="font-heading font-semibold text-text"> ${value && renderTemplate`<span class="text-primary">${value} </span>`} ${label} </span> </li>`)} </ul> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/TrustBar.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Services;
  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
  ];
  const {
    topper = "Гарантия качества",
    heading = "Наши услуги",
    description = "Бурение скважин и продажа бурового оборудования в Витебске и Витебской области",
    services
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-surface py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <span class="text-topper font-bold uppercase tracking-widest text-accent">${topper}</span> <h2 class="mt-2 font-heading text-h2 font-bold uppercase text-text">${heading}</h2> <p class="mt-3 text-text-muted leading-relaxed">${description}</p> </div> <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list"> ${services?.map((service, i) => renderTemplate`<li> <a${addAttribute(service.href, "href")}${addAttribute(`Learn more about ${service.title}`, "aria-label")} class="group flex h-full cursor-pointer flex-col rounded-lg border border-border bg-background p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"> <div class="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-fg"> <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${unescapeHTML(icons[i % icons.length])}</svg> </div> <h3 class="font-heading text-h3 font-semibold text-text">${service.title}</h3> <p class="mt-2 flex-1 text-sm leading-relaxed text-text-muted">${service.description}</p> </a> </li>`)} </ul> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/Services.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const PLACEHOLDER = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80";
  const {
    topper = "О нас",
    heading = "Нам доверяют уже более 12 лет",
    body = [
      "Мы - витебская компания, которая занимается бурением скважин и продажей бурового оборудования в Витебске и Витебской области. Мы работаем с 2014 года и имеем большой опыт в этой области.",
      "Мы работаем с 2014 года и имеем большой опыт в этой области."
    ],
    benefits = [
      "Лицензированная компания",
      "Работы под ключ",
      "Гарантия качества"
    ],
    ctaLabel = "Подробнее о нас",
    ctaHref = "/about",
    imageSrc = localAboutImage ?? PLACEHOLDER,
    imageAlt = "Буровая компания РАТУР+"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-section"> <div class="mx-auto grid max-w-site grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14"> <!-- Image --> <div class="overflow-hidden rounded-lg shadow-lg"> ${typeof imageSrc === "string" ? renderTemplate`<img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")}${addAttribute(700, "width")}${addAttribute(525, "height")} loading="lazy" decoding="async" class="size-full object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": imageAlt, "width": 700, "height": 525, "loading": "lazy", "decoding": "async", "class": "size-full object-cover" })}`} </div> <!-- Content --> <div class="space-y-5"> <span class="text-topper font-bold uppercase tracking-widest text-accent">${topper}</span> <h2 class="font-heading text-h2 font-bold uppercase text-text">${heading}</h2> ${body.map((paragraph) => renderTemplate`<p class="text-text-muted leading-relaxed">${paragraph}</p>`)} <!-- Benefits list --> <ul class="space-y-3 pt-2" role="list"> ${benefits.map((benefit) => renderTemplate`<li class="flex items-start gap-3"> <svg class="mt-0.5 size-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-text">${benefit}</span> </li>`)} </ul> <div class="pt-2"> <a${addAttribute(ctaHref, "href")} class="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-bold text-primary-fg shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"> ${ctaLabel} <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/About.astro", void 0);

const reviews = [{"quote":"Очень доволен работой Артёма и его коллеги.\nХорошо объясняют процесс и ценообразование.\nПробурили нам скважину 17 метров за один рабочий день. Промыли. Теперь на участке есть вода.\nВыдали паспорт скважины, подробно расписали какое оборудование надо приобрести.\nСпасибо им большое.","name":"Leonid Orlik","location":"Знаток города 4 уровня","rating":5,"date":"1 мая 2025"},{"quote":"Заказал пробурить скважину на даче, в р-не Лужесно.  Приехал мастер Артем, он все подробно рассказал, объяснил. Видно, что человек разбирается в своем деле. Договорились, что приступят к работе через 2 недели, приехали даже на пару дней раньше.  В том месте где попросил, они пробурили скважину, хотя место было ограниченное. Напор воды радует, насос поставили хороший. За 3 дня справились, все аккуратно сделали, составили договор, дали гарантию. Работой доволен, рекомендую.","name":"Стас А.","location":"Знаток города 2 уровня","rating":5,"date":"22 мая 2024"},{"quote":"Спасибо большое ребятам за хорошо выполненную работу. За три дня решили нашу проблему с водой. Мы сами не могли присутствовать при выполнении процесса бурения,но и тут не возникло трудностей. Мы получали фото и видео отчёт. Вода чистая, и всё работает отлично. Также есть гарантия и уверенность что всегда можно обращаться с любыми вопросами.","name":"Наталья Хрущ","location":"Знаток города 2 уровня","rating":5,"date":"3 апреля 2024"},{"quote":"Спасибо огромное за проделанную работу, ребята просто супер, сделано качественно быстро и без проблем, рекомендую всем","name":"Дмитрий Б","location":"Знаток города 2 уровня","rating":5,"date":"27 апреля 2025"},{"quote":"Заказ по бурению скважины и вводу водопровода в дачный дом выполнен в стесненных условиях за три рабочих дня с отличным качеством работ и воды.","name":"Tatsiana","location":"Знаток города 4 уровня","rating":5,"date":"15 ноября 2023"},{"quote":"За 2 дня пробурили скважину, цена качества, очень доволен работой и чистой водичкой )","name":"Никита С.","location":"Знаток города 3 уровня","rating":5,"date":"5 ноября 2023"},{"quote":"Ребята!!!!\nВы лучшие!!!!!","name":"Александр Станкевич","location":"Знаток города 2 уровня","rating":5,"date":"13 апреля 2026"}];
const aggregateRating = {"ratingValue":4.4,"reviewCount":7};
const yandexReviewsData = {
  reviews,
  aggregateRating};

const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
function isCaptchaPage(html) {
  return html.includes("smart-captcha") || html.includes("checkbox-captcha") || /Вы не робот|не робат/i.test(html);
}
function reviewsPageUrl(orgId, lang = "ru") {
  return `https://yandex.by/maps/org/-/${orgId}/reviews/?lang=${lang}`;
}
function extractReviewsJson(html) {
  const marker = '"reviews":[';
  const start = html.indexOf(marker);
  if (start === -1) return [];
  const chunk = html.slice(start);
  const arrayStart = chunk.indexOf("[");
  let depth = 0;
  for (let i = arrayStart; i < chunk.length; i++) {
    const char = chunk[i];
    if (char === "[") depth++;
    else if (char === "]") {
      depth--;
      if (depth === 0) {
        return JSON.parse(chunk.slice(arrayStart, i + 1));
      }
    }
  }
  return [];
}
function extractAggregateRating(html) {
  const match = html.match(
    /"ratingValue"\s*:\s*([\d.]+)[\s\S]{0,200}?"reviewCount"\s*:\s*(\d+)/
  );
  if (!match) {
    return { ratingValue: 5, reviewCount: 0 };
  }
  return {
    ratingValue: Math.round(parseFloat(match[1]) * 10) / 10,
    reviewCount: parseInt(match[2], 10)
  };
}
function formatReviewDate(iso) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(iso));
}
function mapReview(raw) {
  const quote = raw.text?.trim();
  const name = raw.author?.name?.trim();
  if (!quote || !name) return null;
  return {
    quote,
    name,
    location: raw.author?.professionLevel?.trim() ?? "",
    rating: raw.rating ?? 5,
    date: raw.updatedTime ? formatReviewDate(raw.updatedTime) : void 0
  };
}
async function fetchYandexReviews(orgId) {
  const url = reviewsPageUrl(orgId);
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" }
  });
  if (!response.ok) {
    throw new Error(`Yandex reviews fetch failed: ${response.status} ${url}`);
  }
  const html = await response.text();
  if (isCaptchaPage(html)) {
    throw new Error(
      `Yandex captcha blocked fetch for ${url}. Run "npm run sync:reviews" locally instead.`
    );
  }
  const rawReviews = extractReviewsJson(html);
  const reviews = rawReviews.map(mapReview).filter((review) => review !== null);
  if (reviews.length === 0) {
    throw new Error(`No reviews parsed from ${url}`);
  }
  const aggregateRating = extractAggregateRating(html);
  aggregateRating.reviewCount = Math.max(aggregateRating.reviewCount, reviews.length);
  return { reviews, aggregateRating };
}

const fallbackData = {
  reviews: [
    {
      quote: "Очень доволен работой Артёма и его коллеги. Хорошо объясняют процесс и ценообразование. Пробурили нам скважину 17 метров за один рабочий день.",
      name: "Leonid Orlik",
      location: "Яндекс Карты",
      rating: 5
    }
  ],
  aggregateRating: { ratingValue: 4.4, reviewCount: 1 }
};
function fromJsonFile() {
  const { reviews, aggregateRating } = yandexReviewsData;
  return { reviews, aggregateRating };
}
let cached;
async function getReviewsData() {
  if (cached) return cached;
  if (process.env.YANDEX_REVIEWS_LIVE === "1") {
    try {
      cached = await fetchYandexReviews(client.yandexOrgId);
      console.info(
        `[reviews] Загружено ${cached.reviews.length} отзывов с Яндекс Карт (рейтинг ${cached.aggregateRating.ratingValue}).`
      );
      return cached;
    } catch (error) {
      console.warn("[reviews] Live-загрузка не удалась, используется JSON.", error);
    }
  }
  try {
    cached = fromJsonFile();
  } catch {
    cached = fallbackData;
  }
  return cached;
}

const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Reviews;
  const {
    topper = "Отзывы",
    heading = "Что клиенты говорят о нас",
    showYandexLink = true
  } = Astro2.props;
  const { reviews, aggregateRating } = Astro2.props.reviews ? {
    reviews: Astro2.props.reviews,
    aggregateRating: {
      ratingValue: Astro2.props.reviews.reduce((sum, { rating }) => sum + rating, 0) / Astro2.props.reviews.length,
      reviewCount: Astro2.props.reviews.length
    }
  } : await getReviewsData();
  return renderTemplate`${maybeRenderHead()}<section class="bg-surface py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <span class="text-topper font-bold uppercase tracking-widest text-accent">${topper}</span> <h2 class="mt-2 font-heading text-h2 font-bold uppercase text-text">${heading}</h2> <p class="mt-3 text-text-muted">
Рейтинг ${aggregateRating.ratingValue} на
<a${addAttribute(client.socials.yandex, "href")} class="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
Яндекс Картах
</a>
· ${aggregateRating.reviewCount} отзывов
</p> </div> <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" role="list"> ${reviews.map(({ quote, name, location, rating = 5, date }) => renderTemplate`<li class="flex flex-col rounded-lg border border-border bg-background p-6 shadow-sm"> <div class="mb-4 flex gap-0.5"${addAttribute(`Оценка ${rating} из 5`, "aria-label")}> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(["size-5", i < rating ? "text-accent" : "text-border"], "class:list")} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <blockquote class="flex-1 text-text-muted leading-relaxed">
&ldquo;${quote}&rdquo;
</blockquote> <div class="mt-4 border-t border-border pt-4"> <p class="font-semibold text-text">${name}</p> ${location && renderTemplate`<p class="text-sm text-text-muted">${location}</p>`} ${date && renderTemplate`<p class="text-sm text-text-muted">${date}</p>`} </div> </li>`)} </ul> ${showYandexLink && renderTemplate`<p class="mt-10 text-center"> <a${addAttribute(client.socials.yandex, "href")} class="inline-flex items-center gap-2 font-semibold text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
Все отзывы на Яндекс Картах
<span aria-hidden="true">→</span> </a> </p>`} </div> </section>`;
}, "/home/by/work/ratur.by/src/components/Reviews.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Gallery;
  const {
    topper = "Наша работа",
    heading = "Недавние проекты",
    description = "Посмотрите качество и внимание к деталям, которые мы приносим в каждый проект.",
    images = galleryImages,
    ctaLabel = "Посмотреть все проекты",
    ctaHref = "/works"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <span class="text-topper font-bold uppercase tracking-widest text-accent">${topper}</span> <h2 class="mt-2 font-heading text-h2 font-bold uppercase text-text"> ${heading} </h2> <p class="mt-3 text-text-muted leading-relaxed">${description}</p> </div> <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"> ${images.map(({ src, alt }) => renderTemplate`<div class="group relative overflow-hidden rounded-lg aspect-4/3 bg-surface" data-gallery-item>  <div class="absolute inset-0 animate-pulse bg-linear-to-r from-surface via-border to-surface" aria-hidden="true" data-skeleton></div> ${typeof src === "string" ? renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(600, "width")}${addAttribute(450, "height")} loading="lazy" decoding="async" class="relative size-full object-cover opacity-0 transition-all duration-300 group-hover:scale-105">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 600, "height": 450, "loading": "lazy", "decoding": "async", "class": "relative size-full object-cover opacity-0 transition-all duration-300 group-hover:scale-105", "data-gallery-img": true })}`}  <div class="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-surface text-sm text-text-muted" data-error-state aria-label="Image unavailable"> <svg class="size-8 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="text-xs">Image unavailable</span> </div>  <div class="absolute inset-0 flex items-end bg-linear-to-t from-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <p class="p-3 text-sm font-medium text-white sm:p-4">${alt}</p> </div> </div>`)} </div> ${ctaLabel && renderTemplate`<div class="mt-10 text-center"> <a${addAttribute(ctaHref, "href")} class="inline-flex min-h-[44px] items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-fg"> ${ctaLabel} <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div>`} </div> </section> ${renderScript($$result, "/home/by/work/ratur.by/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/by/work/ratur.by/src/components/Gallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": brand.name, "description": brand.description, "schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: client.name,
    telephone: client.phoneForTel,
    email: client.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: client.address.lineOne,
      addressLocality: client.address.city,
      addressRegion: client.address.state,
      postalCode: client.address.zip,
      addressCountry: client.address.country
    },
    url: client.domain
  } }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TrustBar", $$TrustBar, {})} ${renderComponent($$result2, "Services", $$Services, { "services": services })} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Reviews", $$Reviews, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/index.astro", void 0);

const $$file = "/home/by/work/ratur.by/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Gallery as $, _page as _, getReviewsData as g };
