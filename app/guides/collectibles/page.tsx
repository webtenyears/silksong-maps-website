import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { StarIcon, MapIcon, ClockIcon, GiftIcon } from '@heroicons/react/24/outline'

export default function CollectiblesGuide() {
  const collectibles = [
    {
      title: "Mask Shards",
      description: "Increase your maximum health by collecting all mask shards scattered throughout Pharloom.",
      href: "/guides/collectibles/mask-shards",
      count: 12,
      type: "health",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
      featured: true
    },
    {
      title: "Spools",
      description: "Collect spools to upgrade your needle and unlock new abilities for Hornet.",
      href: "/guides/collectibles/spools",
      count: 8,
      type: "upgrade",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Memory Charms",
      description: "Discover memory charms that provide unique passive abilities and stat bonuses.",
      href: "/guides/collectibles/memory-charms",
      count: 15,
      type: "charm",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Lost Jumpfleas",
      description: "Find and rescue the lost jumpfleas to unlock new areas and receive valuable rewards.",
      href: "/guides/collectibles/lost-jumpfleas",
      count: 6,
      type: "quest",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Shakra Maps",
      description: "Purchase maps from Shakra to reveal hidden areas and secret locations.",
      href: "/guides/collectibles/shakra-maps",
      count: 10,
      type: "map",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
    },
    {
      title: "Hidden Relics",
      description: "Discover ancient relics that provide lore insights and special abilities.",
      href: "/guides/collectibles/hidden-relics",
      count: 5,
      type: "lore",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
      featured: true
    }
  ]

  const categories = [
    { name: "All Collectibles", count: 56 },
    { name: "Health", count: 12 },
    { name: "Upgrades", count: 8 },
    { name: "Charms", count: 15 },
    { name: "Quests", count: 6 },
    { name: "Maps", count: 10 },
    { name: "Lore", count: 5 }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'health': return 'text-red-500'
      case 'upgrade': return 'text-blue-500'
      case 'charm': return 'text-purple-500'
      case 'quest': return 'text-green-500'
      case 'map': return 'text-yellow-500'
      case 'lore': return 'text-indigo-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Collectibles</span> Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover every collectible in Pharloom. From mask shards to hidden relics, 
            find everything you need to complete your journey.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search collectibles..." />
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

        {/* Featured Collectibles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Collectibles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {collectibles.filter(item => item.featured).map((item) => (
              <div key={item.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <GiftIcon className="w-16 h-16 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getTypeColor(item.type)}`}>
                    {item.count} items
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a href={item.href} className="btn-primary">
                  View Guide
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* All Collectibles */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">All Collectibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectibles.map((item) => (
              <div key={item.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <GiftIcon className="w-12 h-12 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getTypeColor(item.type)}`}>
                    {item.count}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                <a href={item.href} className="btn-primary text-sm">
                  View Guide
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Tips */}
        <div className="card mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Collection Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Explore Thoroughly</h3>
                <p className="text-gray-400">Many collectibles are hidden in secret areas. Check every corner and breakable wall.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <StarIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Track Your Progress</h3>
                <p className="text-gray-400">Use our interactive map to track which collectibles you've found and which you still need.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ClockIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Return Later</h3>
                <p className="text-gray-400">Some collectibles require abilities you'll gain later. Don't worry if you can't reach them immediately.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <GiftIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Check Shops</h3>
                <p className="text-gray-400">Some collectibles can be purchased from merchants. Always check what they have for sale.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}