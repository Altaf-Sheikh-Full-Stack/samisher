import { Link, useLoaderData } from 'react-router'
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from '@portabletext/react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import CTA from '../../Components/CTA/CTA'
import Footer from '../../Components/Footer/Footer'
import { getSanityClient } from '../../../sanity/client'
import { postBySlugQuery } from '../../../sanity/queries'
import { formatDate, urlFor } from '../../../sanity/helpers'
import './BlogPost.css'

const FALLBACK_IMAGE = 'https://samisher.com/S.svg'

interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  body: PortableTextBlock[]
  publishedAt: string
  _updatedAt: string
  readingTime?: number
  mainImage?: { alt?: string; caption?: string; assetId?: string }
  categories?: { title: string; slug: string }[]
  author?: {
    name: string
    role?: string
    bio?: PortableTextBlock[]
    picture?: { alt?: string; assetId?: string }
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    ogImage?: { alt?: string; assetId?: string }
  }
  related?: {
    _id: string
    title: string
    slug: string
    excerpt: string
    publishedAt: string
    mainImage?: { alt?: string; assetId?: string }
  }[]
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.assetId) return null
      const src = urlFor(value.assetId, 1200)
      const srcSet = [640, 960, 1200, 1600]
        .map((w) => `${urlFor(value.assetId, w)} ${w}w`)
        .join(', ')
      return (
        <figure className="post-figure">
          <img
            src={src}
            srcSet={srcSet}
            sizes="(max-width: 720px) 100vw, 720px"
            alt={value.alt || ''}
            loading="lazy"
            width={1200}
            height={Math.round(1200 * ((value.height || 2) / (value.width || 3)))}
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      )
    },
    code: ({ value }) => (
      <pre className="post-code">
        <code>{value?.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 id={slugify(String(children))}>
        <a href={`#${slugify(String(children))}`} className="post-anchor" aria-label="Link to section">
          #
        </a>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 id={slugify(String(children))}>{children}</h3>,
    h4: ({ children }) => <h4 id={slugify(String(children))}>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const internal = href.startsWith('/')
      return internal ? (
        <Link to={href}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },
    code: ({ children }) => <code className="post-inline-code">{children}</code>,
  },
}

export async function loader({ params }: { params: { slug?: string } }) {
  const client = getSanityClient()
  const post = client
    ? await client.fetch<Post | null>(postBySlugQuery, { slug: params.slug })
    : null
  // Return null instead of throwing a 404 Response: React Router's data-file
  // prerendering requires a 200 status, and meta()/the component below already
  // render a noindexed "Post not found" state when there is no post.
  return { post }
}

export function meta({ data }: { data?: { post?: Post } }) {
  const post = data?.post
  if (!post) {
    return [
      { title: 'Post not found | Samisher' },
      { name: 'robots', content: 'noindex' },
    ]
  }

  const canonical =
    post.seo?.canonicalUrl || `https://samisher.com/blogs/${post.slug}/`
  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const ogAsset = post.seo?.ogImage?.assetId || post.mainImage?.assetId
  const ogImage = ogAsset ? urlFor(ogAsset, 1200, 630) : FALLBACK_IMAGE

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonical },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: ogImage },
    { property: 'article:published_time', content: new Date(post.publishedAt).toISOString() },
    { property: 'article:modified_time', content: new Date(post._updatedAt).toISOString() },
    ...(post.author?.name
      ? [{ property: 'article:author', content: post.author.name }]
      : []),
    ...(post.categories ?? []).map((c) => ({
      property: 'article:tag',
      content: c.title,
    })),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ]
}

function PostNotFound() {
  return (
    <section className="Blogs">
      <div className="blogs-empty">
        <h1>Post not found</h1>
        <p>
          This article doesn&apos;t exist or has been removed.{' '}
          <Link to="/blogs/">Browse all posts →</Link>
        </p>
      </div>
    </section>
  )
}

export function ErrorBoundary() {
  return (
    <>
      <Banner />
      <Navbar />
      <PostNotFound />
      <Footer />
    </>
  )
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>()

  if (!post) {
    return (
      <>
        <Banner />
        <Navbar />
        <PostNotFound />
        <Footer />
      </>
    )
  }

  const heroImage = post.mainImage?.assetId
    ? urlFor(post.mainImage.assetId, 1600)
    : FALLBACK_IMAGE
  const authorPicture = post.author?.picture?.assetId
    ? urlFor(post.author.picture.assetId, 96, 96)
    : null

  // Only surface the "Updated" date when it differs meaningfully from publish date.
  const DAY_MS = 24 * 60 * 60 * 1000
  const wasUpdated = new Date(post._updatedAt).getTime() - new Date(post.publishedAt).getTime() > DAY_MS

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt,
    image: post.mainImage?.assetId ? urlFor(post.mainImage.assetId, 1200, 630) : FALLBACK_IMAGE,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post._updatedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author?.name,
      ...(authorPicture ? { image: authorPicture } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Samisher',
      logo: { '@type': 'ImageObject', url: 'https://samisher.com/S.svg' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.seo?.canonicalUrl || `https://samisher.com/blogs/${post.slug}/`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://samisher.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://samisher.com/blogs/' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: post.seo?.canonicalUrl || `https://samisher.com/blogs/${post.slug}/`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Banner />
      <Navbar />
      <article className="Post">
        <header className="post-header">
          <Link to="/blogs/" className="post-back">
            ← All posts
          </Link>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="post-standfirst">{post.excerpt}</p>}
          <div className="post-chips">
            {post.categories && post.categories.length > 0 && (
              <span className="post-chip">
                {post.categories.map((category) => category.title).join(' / ')}
              </span>
            )}
            <span className="post-chip">
              <time dateTime={new Date(post.publishedAt).toISOString()}>
                {formatDate(post.publishedAt)}
              </time>
            </span>
            {typeof post.readingTime === 'number' && (
              <span className="post-chip">{Math.max(post.readingTime, 1)} min read</span>
            )}
            {wasUpdated && <span className="post-chip">Updated {formatDate(post._updatedAt)}</span>}
          </div>
        </header>

        <figure className="post-hero">
          <img
            src={heroImage}
            srcSet={
              post.mainImage?.assetId
                ? [640, 960, 1200, 1600]
                    .map((w) => `${urlFor(post.mainImage!.assetId!, w)} ${w}w`)
                    .join(', ')
                : undefined
            }
            sizes="(max-width: 820px) 100vw, 820px"
            alt={post.mainImage?.alt || post.title}
            width={1600}
            height={900}
            fetchPriority="high"
          />
          {post.mainImage?.caption && (
            <figcaption className="post-hero-caption">{post.mainImage.caption}</figcaption>
          )}
        </figure>

        <div className="post-body">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {post.related && post.related.length > 0 && (
          <section className="post-related">
            <span className="post-related-label">Keep reading</span>
            <div className="post-related-list">
              {post.related.map((rel) => (
                <Link key={rel._id} to={`/blogs/${rel.slug}/`} className="post-related-item">
                  <span className="post-related-title">{rel.title}</span>
                  <span className="post-related-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {post.author?.name && (
          <section className="post-author" aria-label="About the author">
            <div className="post-author-head">
              <div className="post-author-avatar">
                {authorPicture ? (
                  <img
                    src={authorPicture}
                    alt={post.author.picture?.alt || post.author.name}
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                ) : (
                  <span className="post-author-avatar-fallback" aria-hidden="true">
                    {post.author.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="post-author-id">
                <h2 className="post-author-name">{post.author.name}</h2>
                {post.author.role && <p className="post-author-role">{post.author.role}</p>}
              </div>
            </div>
            {post.author.bio && post.author.bio.length > 0 && (
              <div className="post-author-bio">
                <PortableText value={post.author.bio} />
              </div>
            )}
          </section>
        )}
      </article>
      <CTA />
      <Footer />
    </>
  )
}
