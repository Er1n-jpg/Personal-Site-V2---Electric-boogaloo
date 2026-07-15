import {
  Outlet,
  Scripts,
  ScrollRestoration,
  Meta,
  Links,
} from 'react-router'
import Navbar from './components/nav'
import './index.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <div className="relative w-full">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}