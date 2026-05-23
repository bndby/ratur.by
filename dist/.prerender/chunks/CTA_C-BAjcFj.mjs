import { c as createComponent, d as client } from './Footer_pFfB5kot.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender_BXd3ENYn.mjs';

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CTA;
  const {
    title = "Готовы начать?",
    description = "Свяжитесь с нами сегодня, чтобы получить бесплатную, без обязательств консультацию. Мы здесь, чтобы помочь с любым проектом — большим или маленьким.",
    buttonText = "Контакты",
    buttonHref = "/contact"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24"> <div class="mx-auto max-w-site px-4 text-center sm:px-6"> <h2 class="font-heading text-h2 font-bold uppercase text-primary-fg"> ${title} </h2> <p class="mx-auto mt-4 max-w-xl text-primary-fg/80 leading-relaxed"> ${description} </p> <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"> <a${addAttribute(buttonHref, "href")} class="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-8 py-3 text-base font-bold text-accent-fg shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"> ${buttonText} </a> <a${addAttribute(`tel:${client.phoneForTel}`, "href")} class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border-2 border-primary-fg/30 px-8 py-3 text-base font-bold text-primary-fg transition-colors hover:border-primary-fg hover:bg-primary-fg/10"> <svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Звоните нам ${client.phoneFormatted} </a> </div> </div> </section>`;
}, "/home/by/work/ratur.by/src/components/CTA.astro", void 0);

export { $$CTA as $ };
