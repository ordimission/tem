import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(), //sphere
    place: z.string(),
    year: z.number(),
    description: z.string().optional(),
    pubDate: z.date().optional().default(new Date('Thu, 01 Jan 1970 00:00:00 +0000')),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    source: z.string().optional(),
    index: z.number().optional(),
    version: z.string().optional().default("00"),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = {
  blog: blogCollection
};
