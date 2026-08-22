import { index, route, type RouteConfig } from '@react-router/dev/routes'

// The blog post route exports a `loader`, which is only valid when the route
// has prerendered paths. Without Sanity credentials there are no paths, so
// the route must not be registered at all — otherwise the build fails with
// "Invalid route export ... `loader` when pre-rendering with ssr:false".
const buildEnv =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {}
const hasSanity = Boolean(
  buildEnv.SANITY_PROJECT_ID || buildEnv.VITE_SANITY_PROJECT_ID
)

export default [
  index('./Marketing/pages/Home/Home.tsx'),
  route('pricing/', './Marketing/pages/Pricing/Pricing.tsx'),
  route('about/', './Marketing/pages/About/About.tsx'),
  route('career/', './Marketing/pages/Career/Career.tsx'),
  route('blogs/', './Marketing/pages/Blogs/Blogs.tsx'),
  ...(hasSanity
    ? [route('blogs/:slug/', './Marketing/pages/BlogPost/BlogPost.tsx')]
    : []),
  route('studio', './sanity/studio-route.tsx'),
  route('*', './Marketing/pages/NotFound/NotFound.tsx'),
] satisfies RouteConfig
