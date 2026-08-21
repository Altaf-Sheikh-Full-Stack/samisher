import { createClient, type SanityClient } from '@sanity/client'
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from './project'

let client: SanityClient | null = null

export function getSanityClient(): SanityClient | null {
  if (!SANITY_PROJECT_ID) return null
  if (!client) {
    client = createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: true,
      perspective: 'published',
    })
  }
  return client
}
