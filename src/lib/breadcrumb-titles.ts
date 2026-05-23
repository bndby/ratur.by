import { getCollection } from 'astro:content';

const pageModules = import.meta.glob<{ pageTitle?: string }>('../pages/**/*.astro', {
  eager: true,
});

function astroFileToPath(file: string): string | null {
  const match = file.match(/\/pages\/(.+)\.astro$/);
  if (!match) return null;

  let route = match[1];
  if (route.includes('[')) return null;
  if (route === 'index') return '/';

  route = route.replace(/\/index$/, '');
  return `/${route}`;
}

export async function getPageTitleByPath(): Promise<Record<string, string>> {
  const titles: Record<string, string> = {};

  for (const [file, mod] of Object.entries(pageModules)) {
    const path = astroFileToPath(file);
    if (path && path !== '/' && mod.pageTitle) {
      titles[path] = mod.pageTitle;
    }
  }

  const posts = await getCollection('blog', ({ data }) => !data.draft);
  for (const post of posts) {
    titles[`/blog/${post.id}`] = post.data.title;
  }

  return titles;
}
