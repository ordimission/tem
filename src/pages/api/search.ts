// src/pages/api/search.ts
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const searchData = posts
    .filter(post => !post.data.draft)
    .map(post => ({
      id: post.slug,
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags || [],
      category: post.data.category || '',
      content: post.body,
      url: `/blog/${post.slug}/`,
    }));

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
