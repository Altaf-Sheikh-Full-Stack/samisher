import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('./Marketing/pages/Home/Home.tsx'),
  route('pricing/', './Marketing/pages/Pricing/Pricing.tsx'),
  route('career/', './Marketing/pages/Career/Career.tsx'),
  route('blogs/', './Marketing/pages/Blogs/Blogs.tsx'),
  route('blogs/:slug/', './Marketing/pages/BlogPost/BlogPost.tsx'),
  route('studio', './sanity/studio-route.tsx'),
  route('*', './Marketing/pages/NotFound/NotFound.tsx'),
] satisfies RouteConfig
