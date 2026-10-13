import { getCollection } from 'astro:content';
import { tools } from '../data/tools';
export async function GET() {
  const arts = await getCollection('articles', (a) => !a.data.draft);
  const items = arts.map((a) => ({
    t: a.data.title, d: a.data.description, s: a.data.section, l: a.data.lang,
    u: `${a.data.lang === 'ru' ? '/ru' : ''}/${a.data.section}/${a.id.replace(/^ru\//, '')}/`, i: a.data.image ?? '',
  }));
  for (const t of tools) items.push({ t: t.name, d: `${t.price}. ${t.note}`, s: 'software', l: 'all', u: `/reviews/${t.slug}-review/`, i: '' });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
