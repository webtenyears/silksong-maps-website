import Navigation from '@/components/Navigation'
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions, suggestions, or found something we missed? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input w-full"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input w-full"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="input w-full resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <EnvelopeIcon className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:contact@silksong-maps.com" className="hover:text-primary-400">
                        contact@silksong-maps.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Community</h3>
                    <p className="text-gray-400">
                      Join our Discord server for real-time discussions and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">What We're Looking For</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-400">Bug reports and technical issues</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-400">Content suggestions and improvements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-400">Feature requests</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-400">General feedback and suggestions</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-white mb-6">Response Time</h2>
              <p className="text-gray-400">
                We typically respond to emails within 24-48 hours. For urgent issues, 
                please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}