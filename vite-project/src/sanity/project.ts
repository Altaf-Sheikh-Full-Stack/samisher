export const SITE_URL = 'https://samisher.com'

const env = import.meta.env

export const SANITY_PROJECT_ID = (env.VITE_SANITY_PROJECT_ID as string) || ''
export const SANITY_DATASET = (env.VITE_SANITY_DATASET as string) || 'production'
export const SANITY_API_VERSION = '2024-10-01'
