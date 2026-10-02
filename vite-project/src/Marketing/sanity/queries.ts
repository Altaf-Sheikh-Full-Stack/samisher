const postCard = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featured,
  publishedAt,
  _updatedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200),
  mainImage { alt, caption, "assetId": asset._ref },
  "categories": categories[]->{ title, "slug": slug.current },
  "author": author->{ name, role, picture { alt, "assetId": asset._ref } }
}`

export const postsQuery = `*[
  _type == "post"
  && defined(slug.current)
  && (!defined(seo.noindex) || seo.noindex == false)
] | order(featured desc, publishedAt desc) ${postCard}`

export const postBySlugQuery = /* groq */ `
*[_type == "post" && slug.current == $slug && (!defined(seo.noindex) || seo.noindex == false)][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  "readingTime": round(length(pt::text(body)) / 5 / 200),
  publishedAt,
  _updatedAt,
  mainImage { alt, caption, "assetId": asset._ref },
  "categories": categories[]->{ title, "slug": slug.current },
  "author": author->{ name, role, bio, picture { alt, "assetId": asset._ref } },
  seo { metaTitle, metaDescription, canonicalUrl, noindex, "ogImage": ogImage { alt, "assetId": asset._ref } },
  "related": *[
    _type == "post"
    && slug.current != $slug
    && (!defined(seo.noindex) || seo.noindex == false)
  ] | order(publishedAt desc)[0...3] {
    _id, title, "slug": slug.current, excerpt, publishedAt,
    mainImage { alt, "assetId": asset._ref }
  }
}
`

export const postSlugsQuery = /* groq */ `
*[_type == "post" && defined(slug.current) && (!defined(seo.noindex) || seo.noindex == false)]{
  "slug": slug.current,
  "lastmod": coalesce(_updatedAt, publishedAt)
}
`
