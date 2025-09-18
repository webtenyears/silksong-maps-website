import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Search from '@/components/Search'
import { BookOpenIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function BossGuides() {
  const bossGuides = [
    {
      title: "The Weaver Queen",
      description: "Master the Weaver Queen's complex attack patterns and discover her weaknesses. Complete strategy guide with phase breakdown.",
      href: "/guides/bosses/weaver-queen",
      difficulty: "expert",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
      featured: true
    },
    {
      title: "The Moss Knight",
      description: "Learn how to defeat the Moss Knight in the early game. Essential strategies for new players.",
      href: "/guides/bosses/moss-knight",
      difficulty: "easy",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop",
    },
    {
      title: "The Clockwork Knight",
      description: "Navigate the Clockwork Knight's mechanical attacks and timing-based patterns.",
      href: "/guides/bosses/clockwork-knight",
      difficulty: "hard",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop",
    },
    {
      title: "The Shadow Weaver",
      description: "Conquer the Shadow Weaver's shadow-based attacks and teleportation abilities.",
      href: "/guides/bosses/shadow-weaver",
      difficulty: "hard",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "The Crystal Guardian",
      description: "Defeat the Crystal Guardian and learn about crystal-based combat mechanics.",
      href: "/guides/bosses/crystal-guardian",
      difficulty: "medium",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&q=80",
    },
    {
      title: "The Void Knight",
      description: "Face the ultimate challenge with the Void Knight. End-game boss strategies and tips.",
      href: "/guides/bosses/void-knight",
      difficulty: "expert",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=450&fit=crop",
      featured: true
    }
  ]

  const difficultyLevels = [
    { name: "All Bosses", count: 40 },
    { name: "Easy", count: 8 },
    { name: "Medium", count: 15 },
    { name: "Hard", count: 12 },
    { name: "Expert", count: 5 }
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
            Boss <span className="text-gradient">Strategy Guides</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master every boss encounter in Pharloom with our detailed strategy guides. 
            Learn attack patterns, weaknesses, and optimal strategies.
          </p>
          <div className="max-w-2xl mx-auto">
            <Search placeholder="Search boss guides..." />
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

        {/* Featured Bosses */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Boss Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bossGuides.filter(guide => guide.featured).map((guide) => (
              <div key={guide.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <ShieldCheckIcon className="w-16 h-16 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{guide.description}</p>
                <a href={guide.href} className="btn-primary">
                  Read Guide
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* All Boss Guides */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">All Boss Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bossGuides.map((guide) => (
              <div key={guide.title} className="card hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                    <ShieldCheckIcon className="w-12 h-12 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{guide.description}</p>
                <a href={guide.href} className="btn-primary text-sm">
                  Read Guide
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Boss Tips */}
        <div className="card mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">General Boss Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <BookOpenIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Study Attack Patterns</h3>
                <p className="text-gray-400">Take time to observe each boss's attack patterns before attempting to counter-attack.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ClockIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Timing is Everything</h3>
                <p className="text-gray-400">Perfect your timing for dodges and attacks. Patience often leads to victory.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <StarIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Upgrade Your Gear</h3>
                <p className="text-gray-400">Make sure you have the best available weapons and charms before challenging difficult bosses.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ShieldCheckIcon className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">Learn from Defeats</h3>
                <p className="text-gray-400">Each defeat is a learning opportunity. Analyze what went wrong and adjust your strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}