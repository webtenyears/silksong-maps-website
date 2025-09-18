import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { MapIcon, BookOpenIcon, NewspaperIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { generateMetadata, seoConfigs, structuredDataSchemas } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  ...seoConfigs.news,
  canonical: '/news',
  ogType: 'website',
  structuredData: structuredDataSchemas.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'News', url: '/news' }
  ])
})

export default function News() {
  const newsArticles = [
    {
      title: "Silksong Release Date Confirmed",
      description: "Team Cherry has officially announced the release date for Hollow Knight: Silksong. Get ready for the adventure of a lifetime!",
      date: "2024-01-15",
      category: "Release",
      featured: true,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      href: "/news/silksong-release-date-confirmed"
    },
    {
      title: "New Boss Revealed: The Weaver Queen",
      description: "Discover the secrets of the Weaver Queen, one of the most challenging bosses in Pharloom. Learn her attack patterns and strategies.",
      date: "2024-01-12",
      category: "Boss",
      featured: false,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&q=80",
      href: "/news/new-boss-weaver-queen"
    },
    {
      title: "Collectible Guide: Mask Shards Locations",
      description: "Complete guide to finding all mask shards scattered throughout Pharloom. Increase your health and survive longer!",
      date: "2024-01-10",
      category: "Guide",
      featured: false,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&q=80",
      href: "/news/collectible-guide-mask-shards"
    },
    {
      title: "Community Discoveries: Hidden Areas",
      description: "The community has discovered several hidden areas in Pharloom. Explore these secret locations and their rewards.",
      date: "2024-01-08",
      category: "Community",
      featured: false,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=450&fit=crop&q=80",
      href: "/news/community-discoveries-hidden-areas"
    }
  ]

  const categories = [
    { name: "All News", count: 24 },
    { name: "Release", count: 3 },
    { name: "Boss", count: 8 },
    { name: "Guide", count: 7 },
    { name: "Community", count: 6 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-gradient">Silksong News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest news, updates, and community discoveries about Hollow Knight: Silksong.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search news articles..." />
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

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {newsArticles.filter(article => article.featured).map((article) => (
              <Card key={article.title} {...article} />
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.title} {...article} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card text-center mt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest Silksong news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}