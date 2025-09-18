import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
  structuredData?: any
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noIndex = false
  } = config

  const fullTitle = title.includes('Silksong Maps') ? title : `${title} | Silksong Maps`
  const siteUrl = 'https://silksong-maps.com'

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Silksong Maps Team' }],
    creator: 'Silksong Maps',
    publisher: 'Silksong Maps',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonical ? `${siteUrl}${canonical}` : siteUrl,
      title: fullTitle,
      description,
      siteName: 'Silksong Maps',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`],
      creator: '@silksongmaps',
      site: '@silksongmaps',
    },
    alternates: {
      canonical: canonical ? `${siteUrl}${canonical}` : siteUrl,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}

// Structured Data Schemas
export const structuredDataSchemas = {
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Silksong Maps',
    description: 'Comprehensive interactive map and guides for Hollow Knight: Silksong',
    url: 'https://silksong-maps.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://silksong-maps.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Silksong Maps',
    url: 'https://silksong-maps.com',
    logo: 'https://silksong-maps.com/images/logo.png',
    description: 'The ultimate resource for Hollow Knight: Silksong players',
    sameAs: [
      'https://twitter.com/silksongmaps',
      'https://discord.gg/silksongmaps',
    ],
  },

  breadcrumbList: (items: Array<{name: string, url: string}>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://silksong-maps.com${item.url}`,
    })),
  }),

  article: (article: {
    title: string
    description: string
    author: string
    datePublished: string
    dateModified: string
    image?: string
    url: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Silksong Maps',
      logo: {
        '@type': 'ImageObject',
        url: 'https://silksong-maps.com/images/logo.png',
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || 'https://silksong-maps.com/images/og-default.jpg',
    url: `https://silksong-maps.com${article.url}`,
  }),

  game: {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Hollow Knight: Silksong',
    description: 'The sequel to the award-winning Hollow Knight, featuring Hornet as the protagonist',
    genre: 'Action, Adventure, Platformer',
    gamePlatform: ['PC', 'Nintendo Switch', 'PlayStation', 'Xbox'],
    publisher: {
      '@type': 'Organization',
      name: 'Team Cherry',
    },
    developer: {
      '@type': 'Organization',
      name: 'Team Cherry',
    },
  },
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: 'Silksong Maps - Interactive Map & Guides for Hollow Knight: Silksong',
    description: 'Explore Pharloom with our comprehensive interactive map. Find all collectibles, boss locations, and hidden secrets in Hollow Knight: Silksong.',
    keywords: [
      'hollow knight silksong',
      'silksong map',
      'pharloom map',
      'silksong guide',
      'hollow knight sequel',
      'silksong collectibles',
      'silksong bosses',
      'hornet game',
      'team cherry',
      'metroidvania'
    ],
  },

  map: {
    title: 'Interactive Silksong Map - Explore Pharloom',
    description: 'Interactive map of Pharloom with all locations, collectibles, and boss encounters marked. Click to discover secrets and plan your journey.',
    keywords: [
      'silksong interactive map',
      'pharloom locations',
      'silksong collectibles map',
      'silksong boss locations',
      'pharloom exploration',
      'silksong secrets'
    ],
  },

  guides: {
    title: 'Silksong Guides & Walkthroughs',
    description: 'Complete guides for Hollow Knight: Silksong. Boss strategies, collectible locations, area walkthroughs, and expert tips.',
    keywords: [
      'silksong guides',
      'silksong walkthrough',
      'silksong boss guide',
      'silksong collectibles guide',
      'silksong tips',
      'silksong strategies'
    ],
  },

  news: {
    title: 'Silksong News & Updates',
    description: 'Latest news, updates, and community discoveries about Hollow Knight: Silksong. Stay informed about the game\'s development and community findings.',
    keywords: [
      'silksong news',
      'silksong updates',
      'hollow knight silksong release',
      'team cherry news',
      'silksong community',
      'silksong discoveries'
    ],
  },
}
