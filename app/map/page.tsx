import Navigation from '@/components/Navigation'
import InteractiveMapWrapper from '@/components/InteractiveMapWrapper'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { MapIcon, BookOpenIcon, NewspaperIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { generateMetadata, seoConfigs, structuredDataSchemas } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  ...seoConfigs.map,
  canonical: '/map',
  structuredData: structuredDataSchemas.breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Interactive Map', url: '/map' }
  ])
})

export default function Map() {
  const mapFeatures = [
    {
      title: "Interactive Locations",
      description: "Click on any location to see detailed information, collectibles, and secrets.",
      icon: MapIcon,
      color: "text-blue-500"
    },
    {
      title: "Collectible Tracking",
      description: "Track your progress with mask shards, spools, memory charms, and more.",
      icon: StarIcon,
      color: "text-yellow-500"
    },
    {
      title: "Boss Locations",
      description: "Find all boss encounters with detailed strategies and rewards.",
      icon: BookOpenIcon,
      color: "text-red-500"
    },
    {
      title: "Area Guides",
      description: "Complete walkthroughs for every area in Pharloom.",
      icon: ClockIcon,
      color: "text-green-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-gradient">Silksong Map</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore every corner of Pharloom with our comprehensive interactive map. 
            Discover hidden secrets, track collectibles, and master every area.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search locations, bosses, or collectibles..." />
          </div>
        </div>

        {/* Map Container */}
        <div className="card mb-12">
          <div className="aspect-video bg-dark-700 rounded-lg overflow-hidden">
            <InteractiveMapWrapper />
          </div>
        </div>

        {/* Map Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mapFeatures.map((feature, index) => (
            <div key={index} className="card text-center">
              <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Map Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-500">280+</div>
              <div className="text-gray-400">Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">40+</div>
              <div className="text-gray-400">Bosses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">150+</div>
              <div className="text-gray-400">Collectibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">12</div>
              <div className="text-gray-400">Areas</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}