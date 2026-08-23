import { useEffect, type ReactNode } from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import './index.css'
import  clarity  from '@microsoft/clarity';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Samisher',
  url: 'https://samisher.com/',
  logo: 'https://samisher.com/S.svg',
}



export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/svg+xml" href="/S.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap"
        />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

      </body>
      <script>
        const projectId = "y6uz31uuvq"
        Clarity.init(projectId);
      </script>
    </html>
  )
}

export default function Root() {

  useEffect(() => {
    const projectId = "y6uz31uuvq"
    clarity.init(projectId);
  })

  return <Outlet />
}
