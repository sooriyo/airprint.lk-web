import type { ReactNode } from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import './globals.css'

const sfUIDisplay = localFont({
  src: [
    {
      path: '../../fonts/SF UI Display Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/SF UI Display Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sf-ui',
  display: 'swap',
})

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={[sfUIDisplay.variable, GeistMono.variable].filter(Boolean).join(' ')}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={sfUIDisplay.className}>
        <Providers>
          <AdminBar />
          <LivePreviewListener />

          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
