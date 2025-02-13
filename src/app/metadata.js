export const defaultMetadata = {
  title: 'Know[ledge] - Uncover Hidden Histories',
  description: 'Discover untold stories of race, gender, and LGBTQ+ history through interactive learning. Join our revolutionary platform for uncensored, engaging historical education.',
  keywords: 'history education, interactive learning, untold stories, LGBTQ history, racial history, gender history, historical education app, diversity education, inclusive history',
  authors: [{ name: 'Know[ledge]' }],
  creator: 'Know[ledge]',
  publisher: 'Know[ledge]',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Know[ledge]',
    title: 'Know[ledge] - Uncover Hidden Histories',
    description: 'Revolutionary platform revealing overlooked histories through immersive storytelling and interactive learning.',
    images: [
      {
        url: '/images/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Know[ledge] App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Know[ledge] - Uncover Hidden Histories',
    description: 'Revolutionary platform revealing overlooked histories through immersive storytelling and interactive learning.',
    creator: '@KnowledgeApp',
    images: ['/images/twitter-image.jpg'], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
} 