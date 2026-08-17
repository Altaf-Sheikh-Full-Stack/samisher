export function meta() {
  return [
    { title: '404 — Page Not Found | Samisher' },
    { name: 'robots', content: 'noindex, nofollow' },
  ]
}

const NotFound = () => {
  return (
    <>
      <div style={{padding: '6rem', textAlign: 'center'}}>
        <h1>404 — Page Not Found</h1>
        <p>The page you requested could not be found.</p>
      </div>
    </>
  )
}

export default NotFound
