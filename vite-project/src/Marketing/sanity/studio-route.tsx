import { lazy, Suspense } from 'react'

const SanityStudio = lazy(() => import('./SanityStudio'))

export default function StudioRoute() {
  return (
    <Suspense fallback={<div style={{ padding: 48 }}>Loading studio…</div>}>
      <SanityStudio />
    </Suspense>
  )
}
