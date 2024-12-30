import { defineCollection, z } from 'astro:content'
import { SupportedLanguages } from '@/i18n';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    category: z.string().optional().default(''),
    lang: z.enum(SupportedLanguages).default('zh-CN'),
    slug: z.string().optional(),
    TOC: z.boolean().default(false),
  }),
})

export const collections = {
  posts: postsCollection,
}