import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['best', 'compare', 'reviews', 'business-tools', 'guides', 'gear', 'news']),
    updated: z.coerce.date(),
    lang: z.enum(['en', 'ru']).default('en'),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    officialUrl: z.string().optional(),
    vendor: z.string().optional(),
  }),
});

export const collections = { articles };
