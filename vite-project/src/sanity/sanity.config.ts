import { codeInput } from '@sanity/code-input'
import { structureTool } from 'sanity/structure'
import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from './project'

export const sanityConfig = defineConfig({
  name: 'samisher',
  title: 'Samisher Blog',
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  plugins: [structureTool(), codeInput(), visionTool()],
  schema: { types: schemaTypes },
})
