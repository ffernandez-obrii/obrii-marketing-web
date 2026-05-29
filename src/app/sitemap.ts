import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://obriiconsulting.com'

  const staticRoutes = ['', '/servicios', '/obrii-app', '/privacidad', '/terminos', '/cookies', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.slug}`,
    // Usamos la fecha del post si existe, si no, la fecha actual
    lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
