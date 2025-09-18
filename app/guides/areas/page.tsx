import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { MapIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function AreasGuide() {
  const areas = [
    {
      title: "Moss Grotto",
      description: "The starting area of Pharloom. Learn the basics of movement and combat in this lush, green environment.",
      href: "/guides/areas/moss-grotto",
      difficulty: "easy",
      collectibles: 8,
      bosses: 1,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
      featured: true
    },
    {
      title: "Greymoor",
      description: "A mysterious area shrouded in mist. Discover ancient secrets and face challenging enemies.",
      href: "/guides/areas/greymoor",
      difficulty: "medium",
      collectibles: 12,
      bosses: 2,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Deep Docks",
      description: "Navigate the treacherous docks filled with mechanical enemies and hidden passages.",
      href: "/guides/areas/deep-docks",
      difficulty: "hard",
      collectibles: 15,
      bosses: 3,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Crystal Peak",
      description: "Ascend the crystal formations and discover the secrets of the crystal guardians.",
      href: "/guides/areas/crystal-peak",
      difficulty: "hard",
      collectibles: 18,
      bosses: 4,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "Weaver's Den",
      description: "Enter the domain of the Weaver Queen. Master the art of silk-based combat.",
      href: "/guides/areas/weavers-den",
      difficulty: "expert",
      collectibles: 20,
      bosses: 5,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
      featured: true
    },
    {
      title: "Void Sanctum",
      description: "The final area where you'll face the ultimate challenge. Prepare for the most difficult encounters.",
      href: "/guides/areas/void-sanctum",
      difficulty: "expert",
      collectibles: 25,
      bosses: 6,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    }
  ]

  const difficultyLevels = [
    { name: "All Areas", count: 12 },
    { name: "Easy", count: 3 },
    { name: "Medium", count: 4 },
    { name: "Hard", count: 3 },
    { name: "Expert", count: 2 }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-500'
      case 'medium': return 'text-yellow-500'
      case 'hard': return 'text-orange-500'
      case 'expert': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Area</span> Walkthroughs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete walkthroughs for every area in Pharloom. Discover secrets, 
            find collectibles, and master each region's unique challenges.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search areas..." />
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {difficultyLevels.map((level) => (
            <button
              key={level.name}
              className="px-6 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-white rounded-lg transition-colors"
            >
              {level.name} ({level.count})
            </button>
          ))}
        </div>

        {/* Featured Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {areas.filter(area => area.featured).map((area) => (
              <div key={area.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <MapIcon className="w-16 h-16 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(area.difficulty)}`}>
                    {area.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      {area.collectibles} collectibles
                    </span>
                    <span className="flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-1" />
                      {area.bosses} bosses
                    </span>
                  </div>
                </div>
                <a href={area.href} className="btn-primary">
                  View Walkthrough
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* All Areas */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">All Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <MapIcon className="w-12 h-12 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(area.difficulty)}`}>
                    {area.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{area.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      {area.collectibles}
                    </span>
                    <span className="flex items-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-1" />
                      {area.bosses}
                    </span>
                  </div>
                </div>
                <a href={area.href} className="btn-primary text-sm">
                  View Walkthrough
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Exploration Tips */}
        <div className="card mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Exploration Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Take Your Time</h3>
                <p className="text-gray-400">Each area has hidden secrets. Don't rush through - explore every corner carefully.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <StarIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Use Your Map</h3>
                <p className="text-gray-400">Purchase maps from Shakra to reveal hidden areas and secret passages.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ClockIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Plan Your Route</h3>
                <p className="text-gray-400">Some areas are easier to navigate with specific abilities. Plan your exploration route accordingly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Prepare for Bosses</h3>
                <p className="text-gray-400">Each area has unique boss encounters. Make sure you're well-equipped before challenging them.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}