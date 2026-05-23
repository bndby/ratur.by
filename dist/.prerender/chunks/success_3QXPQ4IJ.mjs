import { c as createComponent, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_pFfB5kot.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_BXd3ENYn.mjs';

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Message Sent", "description": "Your message has been received." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="flex min-h-[60vh] items-center justify-center px-4"> <div class="mx-auto max-w-md text-center"> <div class="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-accent/10"> <svg class="size-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h1 class="font-heading text-h1 font-bold uppercase text-text">
Message Received
</h1> <p class="mt-4 text-text-muted leading-relaxed">
Thank you for reaching out. We'll get back to you within one business day.
</p> <a href="/" class="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-bold text-primary-fg shadow-sm transition-opacity hover:opacity-90">
Back to Home
</a> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })}`;
}, "/home/by/work/ratur.by/src/pages/contact/success.astro", void 0);

const $$file = "/home/by/work/ratur.by/src/pages/contact/success.astro";
const $$url = "/contact/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
