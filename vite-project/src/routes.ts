import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('./Marketing/pages/Home/Home.tsx'),
  route('pricing/', './Marketing/pages/Pricing/Pricing.tsx'),
  route('career/', './Marketing/pages/Career/Career.tsx'),
  route('*', './Marketing/pages/NotFound/NotFound.tsx'),
] satisfies RouteConfig
