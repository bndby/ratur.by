import { c as createComponent, $ as $$BaseLayout, a as $$Header, b as $$Footer, d as client, e as brand, s as services } from './Footer_pFfB5kot.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, F as Fragment } from './prerender_BXd3ENYn.mjs';
import { g as getCollection, _ as _page$9 } from './_...slug__DDbmIdQn.mjs';
import { $ as $$CTA } from './CTA_C-BAjcFj.mjs';
import { _ as _page$8 } from './success_3QXPQ4IJ.mjs';
import { g as getReviewsData, $ as $$Gallery, _ as _page$7 } from './index_BrvHasWQ.mjs';

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get default () { return $$Index; },
  get file () { return $$file; },
  get pageTitle () { return pageTitle; },
  get url () { return $$url; }
}, Symbol.toStringTag, { value: 'Module' }));

const pageTitle$6 = "Contact Us";
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": `Get in touch with ${brand.name}. Request a free quote or ask us a question.` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$6 })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto grid max-w-site grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14"> <!-- Form --> <div class="lg:col-span-3"> <h2 class="font-heading text-h2 font-bold uppercase text-text">Send us a message</h2> <p class="mt-2 mb-8 text-text-muted">
Fill out the form below and we'll get back to you within one business day.
</p> <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/success" class="flex flex-col gap-5"> <input type="hidden" name="form-name" value="contact"> <p class="hidden" aria-hidden="true"> <label>Leave this empty: <input name="bot-field" tabindex="-1" autocomplete="off"></label> </p> <label class="flex flex-col gap-1.5"> <span class="text-sm font-medium text-text">Name <span class="text-accent" aria-hidden="true">*</span></span> <input type="text" name="name" required autocomplete="name" class="min-h-[44px] rounded-md border border-border bg-background px-4 py-2.5 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"> </label> <label class="flex flex-col gap-1.5"> <span class="text-sm font-medium text-text">Email <span class="text-accent" aria-hidden="true">*</span></span> <input type="email" name="email" required autocomplete="email" class="min-h-[44px] rounded-md border border-border bg-background px-4 py-2.5 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"> </label> <label class="flex flex-col gap-1.5"> <span class="text-sm font-medium text-text">Phone</span> <input type="tel" name="phone" autocomplete="tel" inputmode="tel" class="min-h-[44px] rounded-md border border-border bg-background px-4 py-2.5 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"> </label> <label class="flex flex-col gap-1.5"> <span class="text-sm font-medium text-text">Message <span class="text-accent" aria-hidden="true">*</span></span> <textarea name="message" rows="5" required class="min-h-[120px] rounded-md border border-border bg-background px-4 py-2.5 text-text transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"></textarea> </label> <button type="submit" class="mt-2 inline-flex min-h-[44px] cursor-pointer items-center justify-center self-start rounded-md bg-accent px-8 py-3 text-base font-bold text-accent-fg shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
Send Message
</button> </form> </div> <!-- Contact info sidebar --> <aside class="space-y-8 lg:col-span-2"> <div> <h3 class="font-heading text-lg font-semibold text-text">Call Us</h3> <a${addAttribute(`tel:${client.phoneForTel}`, "href")} class="mt-1 block text-primary-light font-medium transition-colors hover:text-primary"> ${client.phoneFormatted} </a> </div> <div> <h3 class="font-heading text-lg font-semibold text-text">Email Us</h3> <a${addAttribute(`mailto:${client.email}`, "href")} class="mt-1 block text-primary-light font-medium transition-colors hover:text-primary"> ${client.email} </a> </div> <div> <h3 class="font-heading text-lg font-semibold text-text">Visit Us</h3> <a${addAttribute(client.address.mapLink, "href")} target="_blank" rel="noopener noreferrer" class="mt-1 block text-text-muted transition-colors hover:text-text"> ${client.address.lineOne}<br> ${client.address.lineTwo} ${client.address.city}, ${client.address.state} ${client.address.zip} </a> </div> <div> <h3 class="font-heading text-lg font-semibold text-text">Hours</h3> <p class="mt-1 text-text-muted">
Mon – Fri: 7:00 AM – 6:00 PM<br>
Sat: 8:00 AM – 2:00 PM<br>
Sun: Closed<br> <span class="font-medium text-accent">24/7 Emergency Service Available</span> </p> </div> </aside> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/contact/index.astro", void 0);

const $$file$6 = "/home/by/work/ratur.by/src/pages/contact/index.astro";
const $$url$6 = "/contact";

const _page$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$6,
  pageTitle: pageTitle$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const pageTitle$5 = "Оборудование";
const $$Equipment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Оборудование", "description": `Explore the full range of services offered by ${brand.name}. From repairs to remodeling, we do it all.` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$5 })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="font-heading text-h2 font-bold uppercase text-text">Продажа бурового оборудования</h2> <p class="mt-3 text-text-muted leading-relaxed">
Мы продаем буровое оборудование для бурения скважин и обустройства скважин.
</p> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/equipment.astro", void 0);

const $$file$5 = "/home/by/work/ratur.by/src/pages/equipment.astro";
const $$url$5 = "/equipment";

const _page$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equipment,
  file: $$file$5,
  pageTitle: pageTitle$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$ReviewCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ReviewCards;
  const { reviews, emptyMessage } = Astro2.props;
  return renderTemplate`${reviews.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">${reviews.map(({ quote, name, location, rating = 5, date }) => renderTemplate`<article class="flex flex-col rounded-lg border border-border bg-background p-6 shadow-sm"><div class="mb-4 flex gap-0.5"${addAttribute(`Оценка ${rating} из 5`, "aria-label")}>${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(["size-5", i < rating ? "text-accent" : "text-border"], "class:list")} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`)}</div><blockquote class="flex-1 text-text-muted leading-relaxed">
&ldquo;${quote}&rdquo;
</blockquote><div class="mt-4 border-t border-border pt-4"><p class="font-semibold text-text">${name}</p>${location && renderTemplate`<p class="text-sm text-text-muted">${location}</p>`}${date && renderTemplate`<p class="text-sm text-text-muted">${date}</p>`}</div></article>`)}</div>` : emptyMessage && renderTemplate`<p class="mx-auto max-w-xl text-center text-text-muted leading-relaxed">${emptyMessage}</p>`}`;
}, "/home/by/work/ratur.by/src/components/ReviewCards.astro", void 0);

const pageTitle$4 = "Отзывы";
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const yandex = await getReviewsData();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Отзывы", "description": `Отзывы клиентов ${brand.name} на Яндекс Картах.`, "schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: client.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(yandex.aggregateRating.ratingValue),
      reviewCount: String(yandex.aggregateRating.reviewCount),
      bestRating: "5"
    }
  } }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$4 })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="font-heading text-h2 font-bold uppercase text-text">Яндекс Карты</h2> <p class="mt-3 text-text-muted leading-relaxed">
Рейтинг ${yandex.aggregateRating.ratingValue} · ${yandex.aggregateRating.reviewCount} отзывов.
<a${addAttribute(client.socials.yandex, "href")} class="ml-1 text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
Открыть на Яндекс Картах
</a> </p> </div> ${renderComponent($$result2, "ReviewCards", $$ReviewCards, { "reviews": yandex.reviews })} <p class="mt-10 text-center"> <a${addAttribute(client.socials.yandex, "href")} class="inline-flex items-center gap-2 font-semibold text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
Все отзывы на Яндекс Картах
<span aria-hidden="true">→</span> </a> </p> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/reviews.astro", void 0);

const $$file$4 = "/home/by/work/ratur.by/src/pages/reviews.astro";
const $$url$4 = "/reviews";

const _page$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reviews,
  file: $$file$4,
  pageTitle: pageTitle$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const pageTitle$3 = "Бурение на воду";
const $$Burenie = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Services", "description": `Explore the full range of services offered by ${brand.name}. From repairs to remodeling, we do it all.` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$3 })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="font-heading text-h2 font-bold uppercase text-text">What we can do for you</h2> <p class="mt-3 text-text-muted leading-relaxed">
No job is too big or too small. Here's a look at the services we offer.
</p> </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/services/burenie.astro", void 0);

const $$file$3 = "/home/by/work/ratur.by/src/pages/services/burenie.astro";
const $$url$3 = "/services/burenie";

const _page$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Burenie,
  file: $$file$3,
  pageTitle: pageTitle$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const pageTitle$2 = "Услуги буровой";
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />',
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />'
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Услуги буровой", "description": `Explore the full range of services offered by ${brand.name}. From repairs to remodeling, we do it all.` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$2 })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="font-heading text-h2 font-bold uppercase text-text">Наши услуги</h2> <p class="mt-3 text-text-muted leading-relaxed">
Мы производим работы по бурению скважин, обустройству скважин, обслуживанию и ремонту скважин, канализации, водоснабжению, бурению под фундамент, забивке свай под фундамент, геотермальному отоплению, телеинспекции скважин.
</p> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-2"> ${services.map((service, i) => renderTemplate`<a${addAttribute(`${service.href}`, "href")} class="flex gap-5 rounded-lg border border-border bg-background p-6 shadow-sm transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-primary"> <div class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"> <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${unescapeHTML(icons[i % icons.length])}</svg> </div> <div> <h3 class="font-heading text-h3 font-semibold text-text">${service.title}</h3> <p class="mt-2 text-text-muted leading-relaxed">${service.description}</p> </div> </a>`)} </div> </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/services/index.astro", void 0);

const $$file$2 = "/home/by/work/ratur.by/src/pages/services/index.astro";
const $$url$2 = "/services";

const _page$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$2,
  pageTitle: pageTitle$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const pageTitle$1 = "Наши работы";
const $$Works = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Наши работы", "description": `Explore the full range of services offered by ${brand.name}. From repairs to remodeling, we do it all.` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle$1 })} ${renderComponent($$result2, "Gallery", $$Gallery, { "ctaLabel": "" })} ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/works.astro", void 0);

const $$file$1 = "/home/by/work/ratur.by/src/pages/works.astro";
const $$url$1 = "/works";

const _page$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Works,
  file: $$file$1,
  pageTitle: pageTitle$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const pageModules = /* #__PURE__ */ Object.assign({"../pages/blog/[...slug].astro": _page$9,"../pages/blog/index.astro": _page,"../pages/contact/index.astro": _page$6,"../pages/contact/success.astro": _page$8,"../pages/equipment.astro": _page$5,"../pages/index.astro": _page$7,"../pages/reviews.astro": _page$4,"../pages/services/burenie.astro": _page$3,"../pages/services/index.astro": _page$2,"../pages/works.astro": _page$1

});
function astroFileToPath(file) {
  const match = file.match(/\/pages\/(.+)\.astro$/);
  if (!match) return null;
  let route = match[1];
  if (route.includes("[")) return null;
  if (route === "index") return "/";
  route = route.replace(/\/index$/, "");
  return `/${route}`;
}
async function getPageTitleByPath() {
  const titles = {};
  for (const [file, mod] of Object.entries(pageModules)) {
    const path = astroFileToPath(file);
    if (path && path !== "/" && mod.pageTitle) {
      titles[path] = mod.pageTitle;
    }
  }
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  for (const post of posts) {
    titles[`/blog/${post.id}`] = post.data.title;
  }
  return titles;
}

const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Banner;
  const { title } = Astro2.props;
  const pageTitleByPath = await getPageTitleByPath();
  const pathParts = Astro2.url.pathname.replace(/\/$/, "").split("/").filter(Boolean);
  const segments = pathParts.map((_, i) => {
    const href = "/" + pathParts.slice(0, i + 1).join("/");
    const isLast = i === pathParts.length - 1;
    return {
      label: isLast ? title : pageTitleByPath[href] ?? pathParts[i],
      href,
      isLast
    };
  });
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary py-14 sm:py-16 lg:py-20"> <div class="mx-auto max-w-site px-4 sm:px-6"> <!-- Breadcrumb --> <nav aria-label="Breadcrumb" class="mb-4"> <ol class="flex flex-wrap items-center gap-1.5 text-sm text-primary-fg/60"> <li> <a href="/" class="transition-colors hover:text-primary-fg">Ратур+</a> </li> ${segments.map(({ label, href, isLast }) => renderTemplate`<li class="flex items-center gap-1.5"> <svg class="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> ${isLast ? renderTemplate`<span aria-current="page" class="text-primary-fg">${label}</span>` : renderTemplate`<a${addAttribute(href, "href")} class="transition-colors hover:text-primary-fg">${label}</a>`} </li>`)} </ol> </nav> <h1 class="font-heading text-h1 font-bold uppercase text-primary-fg"> ${title} </h1> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/Banner.astro", void 0);

const pageTitle = "Blog";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": `Tips, guides, and news from ${brand.name}. Stay informed about home maintenance and improvement.` }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": pageTitle })} ${maybeRenderHead()}<section class="py-section"> <div class="mx-auto max-w-site px-4 sm:px-6"> ${posts.length === 0 ? renderTemplate`<p class="text-center text-text-muted">No posts yet. Check back soon!</p>` : renderTemplate`<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => {
    const formattedDate = post.data.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return renderTemplate`<article class="group flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-shadow hover:shadow-md"> <div class="flex flex-1 flex-col p-6"> <div class="flex items-center gap-2 text-sm text-text-muted"> <time${addAttribute(post.data.date.toISOString(), "datetime")}>${formattedDate}</time> ${post.data.tags.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span aria-hidden="true">&bull;</span> <span>${post.data.tags[0]}</span> ` })}`} </div> <h2 class="mt-3 font-heading text-h3 font-semibold text-text group-hover:text-primary transition-colors"> <a${addAttribute(`/blog/${post.id}`, "href")} class="after:absolute after:inset-0 relative"> ${post.data.title} </a> </h2> <p class="mt-2 flex-1 text-sm leading-relaxed text-text-muted"> ${post.data.description} </p> <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
Read more
<svg class="size-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </div> </article>`;
  })} </div>`} </div> </section> ${renderComponent($$result2, "CTA", $$CTA, {})}  `, "footer": async ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": async ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/blog/index.astro", void 0);

const $$file = "/home/by/work/ratur.by/src/pages/blog/index.astro";
const $$url = "/blog";

export { _page as _, _page$6 as a, _page$5 as b, _page$4 as c, _page$3 as d, _page$2 as e, _page$1 as f };
