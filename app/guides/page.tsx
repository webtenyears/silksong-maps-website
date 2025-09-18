import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { generateMetadata, seoConfigs, structuredDataSchemas } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  ...seoConfigs.guides,
  canonical: '/guides',
  structuredData: structuredDataSchemas.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/guides' }
  ])
})

export default function Guides() {
  const featuredGuides = [
    {
      title: "Complete Boss Guide",
      description: "Master every boss encounter in Pharloom with detailed strategies, attack patterns, and reward information.",
      href: "/guides/bosses",
      image: "/images/boss-guide.jpg",
      featured: true
    },
    {
      title: "Collectibles Locations",
      description: "Find all mask shards, spools, memory charms, and other collectibles scattered throughout the kingdom.",
      href: "/guides/collectibles",
      image: "/images/collectibles.jpg"
    },
    {
      title: "Area Walkthroughs",
      description: "Detailed exploration guides for every area in Pharloom, including hidden secrets and shortcuts.",
      href: "/guides/areas",
      image: "/images/areas.jpg"
    },
    {
      title: "Beginner's Guide",
      description: "New to Silksong? Start here with essential tips, controls, and early game strategies.",
      href: "/guides/beginner",
      image: "/images/beginner.jpg"
    }
  ]

  const categories = [
    { name: "All Guides", count: 25 },
    { name: "Bosses", count: 8 },
    { name: "Areas", count: 12 },
    { name: "Collectibles", count: 5 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Guides</span> & Walkthroughs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides to help you master every aspect of Hollow Knight: Silksong.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search guides, bosses, or areas..." />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-6 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-white rounded-lg transition-colors"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Card key={guide.title} {...guide} />
            ))}
          </div>
        </div>

        {/* All Guides */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">All Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Card key={guide.title} {...guide} />
            ))}
            {/* Add more guides here */}
          </div>
        </div>
      </main>
    </div>
  )
}

