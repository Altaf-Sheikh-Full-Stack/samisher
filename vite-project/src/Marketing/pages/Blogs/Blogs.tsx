import { Link, useLoaderData } from 'react-router'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import CTA from '../../Components/CTA/CTA'
import Footer from '../../Components/Footer/Footer'
import { getSanityClient } from '../../../sanity/client'
import { postsQuery } from '../../../sanity/queries'
import { formatDate, urlFor } from '../../../sanity/helpers'
import './Blogs.css'

const FALLBACK_IMAGE = 'https://samisher.com/S.svg'

export async function loader() {
  const client = getSanityClient()
  const posts = client ? await client.fetch<PostCard[]>(postsQuery) : []
  return { posts }
}

export function meta() {
  const title = 'Blog — B2B Sales Playbooks & Growth Guides | Samisher'
  const description =
    'Practical guides for outbound sales, better meetings, qualified leads, and pipeline growth. Learn how to focus on meetings that convert.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/blogs/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/blogs/' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: FALLBACK_IMAGE },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: FALLBACK_IMAGE },
  ]
}

interface PostCard {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  readingTime?: number
  mainImage?: { alt?: string; assetId?: string }
  categories?: { title: string; slug: string }[]
}

function PostImage({
  post,
  width,
  height,
}: {
  post: PostCard
  width: number
  height: number
}) {
  return (
    <img
      src={post.mainImage?.assetId ? urlFor(post.mainImage.assetId, width, height) : FALLBACK_IMAGE}
      alt={post.mainImage?.alt || post.title}
      loading="lazy"
      width={width}
      height={height}
    />
  )
}

function PostMeta({ post }: { post: PostCard }) {
  return (
    <div className="post-meta">
      <time dateTime={new Date(post.publishedAt).toISOString()}>
        {formatDate(post.publishedAt)}
      </time>
      {typeof post.readingTime === 'number' && post.readingTime > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min read</span>
        </>
      )}
    </div>
  )
}

function FeaturedPost({ post }: { post: PostCard }) {
  return (
    <Link to={`/blogs/${post.slug}/`} className="featured">
      <div className="featured-media">
        <PostImage post={post} width={960} height={640} />
      </div>
      <div className="featured-body">
        <h2>{post.title}</h2>
        <PostMeta post={post} />
      </div>
    </Link>
  )
}

function PostCardItem({ post }: { post: PostCard }) {
  return (
    <article className="blog-card">
      <Link to={`/blogs/${post.slug}/`} className="blog-card-link">
        <div className="blog-card-media">
          <PostImage post={post} width={800} height={500} />
        </div>
        <div className="blog-card-body">
          <h3>{post.title}</h3>
          <PostMeta post={post} />
        </div>
      </Link>
    </article>
  )
}

export default function Blogs() {
  const { posts } = useLoaderData<typeof loader>()
  const [featured, ...rest] = posts

  return (
    <>
      <Banner />
      <Navbar />
      <section className="Blogs">
        <header className="blogs-intro">
          <span className="chip">Blog</span>
          <h1>Sales playbooks that deliver results.</h1>
        </header>

        {posts.length === 0 ? (
          <p className="blogs-empty">
            No posts yet. Publish your first post in the Sanity studio at /studio.
          </p>
        ) : (
          <div className="blogs-content">
            {featured && <FeaturedPost post={featured} />}
            {rest.length > 0 && (
              <div className="blogs-grid">
                {rest.map((post: PostCard) => (
                  <PostCardItem key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
      <CTA />
      <Footer />
    </>
  )
}
