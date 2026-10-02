import imageUrlBuilder from '@sanity/image-url'
import { SANITY_DATASET, SANITY_PROJECT_ID } from './project'

const builder = imageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
})

export function urlFor(source: string, width: number, height?: number) {
  const url = builder.image(source)
  if (height) return url.width(width).height(height).fit('crop').auto('format').url()
  return url.width(width).auto('format').url()
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
