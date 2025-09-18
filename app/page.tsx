import Link from 'next/link'
import { MapIcon, BookOpenIcon, NewspaperIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Navigation */}
      <nav className="border-b border-dark-700 bg-dark-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gradient">
                Silksong Maps
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/map" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Interactive Map
                </Link>
                <Link href="/guides" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Guides
                </Link>
                <Link href="/news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  News
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore <span className="text-gradient">Pharloom</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover every secret, collectible, and boss location in Hollow Knight: Silksong with our comprehensive interactive map and detailed guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/map" className="btn-primary text-lg px-8 py-3">
              <MapIcon className="w-5 h-5 inline mr-2" />
              Explore Map
            </Link>
            <Link href="/guides" className="btn-secondary text-lg px-8 py-3">
              <BookOpenIcon className="w-5 h-5 inline mr-2" />
              Read Guides
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <MapIcon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
            <p className="text-gray-400">
              Explore Pharloom with our detailed interactive map featuring all locations, collectibles, and secrets.
            </p>
          </div>
          
          <div className="card text-center">
            <BookOpenIcon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Guides</h3>
            <p className="text-gray-400">
              Detailed walkthroughs for every area, boss strategies, and collectible locations.
            </p>
          </div>
          
          <div className="card text-center">
            <NewspaperIcon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Latest News</h3>
            <p className="text-gray-400">
              Stay updated with the latest Silksong news, updates, and community discoveries.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-dark-800 rounded-lg p-8">
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
              <div className="text-3xl font-bold text-primary-500">100%</div>
              <div className="text-gray-400">Completion</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-700 bg-dark-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Silksong Maps. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

