import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sebagreen.com'),
  title: {
    default: 'Sebastian Green | Full-Stack Developer & CS Student',
    template: '%s | Sebastian Green',
  },
  description:
    'Sebastian Green — CS student at the University of Nottingham (1st class) and full-stack developer specialising in Python, TypeScript, FastAPI, and AI-driven systems.',
  authors: [{ name: 'Sebastian Green', url: 'https://sebagreen.com' }],
  keywords: [
    'Sebastian Green',
    'full-stack developer',
    'CS student',
    'University of Nottingham',
    'Python',
    'TypeScript',
    'FastAPI',
    'software engineer',
  ],
  alternates: {
    canonical: 'https://sebagreen.com',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_GB',
    url: 'https://sebagreen.com',
    siteName: 'Sebastian Green',
    title: 'Sebastian Green | Full-Stack Developer & CS Student',
    description:
      'CS student at the University of Nottingham and full-stack developer specialising in Python, TypeScript, FastAPI, and AI-driven systems.',
    firstName: 'Sebastian',
    lastName: 'Green',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sebastian Green — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Green | Full-Stack Developer & CS Student',
    description:
      'CS student at the University of Nottingham and full-stack developer specialising in Python, TypeScript, FastAPI, and AI-driven systems.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sebastian Green',
              url: 'https://sebagreen.com',
              email: 'contact@sebagreen.com',
              jobTitle: 'Full-Stack Developer',
              description:
                'CS student at the University of Nottingham specialising in full-stack development, AI systems, and backend engineering.',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Nottingham',
                url: 'https://www.nottingham.ac.uk',
              },
              sameAs: [
                'https://github.com/SebGreen24',
                'https://www.linkedin.com/in/sebagreen',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-base-light dark:bg-base-dark text-ink-light dark:text-ink-dark antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
