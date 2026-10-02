import { Studio } from 'sanity'
import { sanityConfig } from './sanity.config'
import './Studio.css'

export default function SanityStudio() {
  if (!sanityConfig.projectId) {
    return (
      <div className="studio-setup">
        <h1>Set up your Sanity project</h1>
        <ol>
          <li>
            Create a free project at <a href="https://www.sanity.io/get-started" target="_blank" rel="noreferrer">sanity.io</a>
          </li>
          <li>
            Copy <code>.env.example</code> to <code>.env.local</code> and fill in{' '}
            <code>VITE_SANITY_PROJECT_ID</code> and <code>VITE_SANITY_DATASET</code>
          </li>
          <li>Restart the dev server and reload this page</li>
        </ol>
      </div>
    )
  }

  return (
    <div className="studio-shell">
      <Studio config={sanityConfig} />
    </div>
  )
}
