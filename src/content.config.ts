import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['best', 'compare', 'reviews', 'business-tools', 'guides']),
    updated: z.coerce.date(),
    lang: z.enum(['en', 'ru']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
