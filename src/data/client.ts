/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'ЧТУП «Ратур-Плюс»',
  email: 'info@ratur.by',
  phoneForTel: '+375298974934',
  phoneFormatted: '+375 (29) 897-49-34',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'УНП',
  address: {
    lineOne: 'ул. 3-я Чепинская, 40Д',
    lineTwo: '',
    city: 'г. Витебск',
    state: '',
    zip: '',
    country: 'BY',
    mapLink: 'https://maps.app.goo.gl/puTLdJ3oG4sBwWDNA',
  },
  /** ID организации в Яндекс Картах (для загрузки отзывов). */
  yandexOrgId: '143671883234',
  socials: {
    // facebook: 'https://www.facebook.com/',
    // instagram: 'https://www.instagram.com/',
    google:
      'https://www.google.com/maps/place/%D0%91%D1%83%D1%80%D0%B5%D0%BD%D0%B8%D0%B5+%D1%81%D0%BA%D0%B2%D0%B0%D0%B6%D0%B8%D0%BD+%22%D0%A0%D0%90%D0%A2%D0%A3%D0%A0%22/@55.2116993,30.1260457,17z/data=!4m8!3m7!1s0x46c573cd3bd5a8cd:0xa11c233a7f80a5ce!8m2!3d55.2116993!4d30.1260457!9m1!1b1!16s%2Fg%2F11vl7nw555?hl=ru',
    yandex: 'https://yandex.by/profile/143671883234?lang=ru',
  },
  domain: 'https://ratur.by',
} as const;

export type Client = typeof client;
