import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Moony Flames – Handgjorda Doftljus från Småland',
    template: '%s | Moony Flames',
  },
  description:
    'Handgjorda veganska doftljus med unika marmorerade mönster. Tillverkade i Strömby, Småland med svenskt sojavax och ftalatfria dofter. Fri frakt över 500 kr.',
  keywords: [
    'doftljus',
    'handgjorda ljus',
    'veganska ljus',
    'sojavax',
    'marmorerade ljus',
    'doftvax',
    'vaxsmältare',
    'svenska doftljus',
    'Småland',
    'Moony Flames',
  ],
  authors: [{ name: 'Katrin, Moony Flames' }],
  creator: 'Moony Flames',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://moonyflames.se',
    siteName: 'Moony Flames',
    title: 'Moony Flames – Handgjorda Doftljus från Småland',
    description:
      'Handgjorda veganska doftljus med unika marmorerade mönster. Tillverkade i Strömby, Småland.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moony Flames – Handgjorda Doftljus från Småland',
    description:
      'Handgjorda veganska doftljus med unika marmorerade mönster. Tillverkade i Strömby, Småland.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-brand-bg text-brand-text antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
