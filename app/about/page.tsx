import Navigation from '@/components/Navigation'
import { MapIcon, BookOpenIcon, NewspaperIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Silksong Maps</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your comprehensive guide to exploring the mysterious world of Pharloom in Hollow Knight: Silksong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              We&apos;re dedicated to providing the most comprehensive and accurate guides for Hollow Knight: Silksong. 
              Our interactive map helps players discover every secret, collectible, and challenge in Pharloom.
            </p>
            <p className="text-gray-400">
              Whether you&apos;re a newcomer to the series or a veteran explorer, our guides are designed to enhance 
              your journey through this beautiful and challenging world.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <MapIcon className="w-5 h-5 text-primary-500 mr-3" />
                Interactive map with all locations
              </li>
              <li className="flex items-center">
                <BookOpenIcon className="w-5 h-5 text-primary-500 mr-3" />
                Detailed boss strategies
              </li>
              <li className="flex items-center">
                <NewspaperIcon className="w-5 h-5 text-primary-500 mr-3" />
                Latest game news and updates
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            Have questions, suggestions, or found something we missed? We&apos;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@silksong-maps.com" className="btn-primary">
              Email Us
            </a>
            <a href="https://twitter.com/silksongmaps" className="btn-secondary">
              Follow on Twitter
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

