import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The H1 of the article. Aim for 50–60 characters.',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL will be https://samisher.com/blog/{slug}/',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog index and in search results fallback (150–160 chars).',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for SEO and screen readers.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Featured posts appear first on the blog index.',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Overrides for how this post appears on Google and social media.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta title',
          type: 'string',
          description: 'Defaults to the post title. Keep under 60 characters.',
          validation: (rule) => rule.max(70),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 2,
          description: 'Defaults to the excerpt. Keep between 120–158 characters.',
          validation: (rule) => rule.max(200),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social share image',
          type: 'image',
          description: '1200×630 recommended. Defaults to the main image.',
          options: { hotspot: true },
        }),
        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Only set if this content is syndicated from another source.',
        }),
        defineField({
          name: 'noindex',
          title: 'Hide from search engines',
          type: 'boolean',
          description: 'Adds noindex, excludes from sitemap and blog index.',
          initialValue: false,
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Publish date, newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'mainImage',
    },
  },
})
