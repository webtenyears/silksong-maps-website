import Navigation from '@/components/Navigation'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Privacy</span> Policy
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: January 2024
          </p>
        </div>

        <div className="card">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and personalize your experience.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
            <p className="text-gray-400 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this privacy policy.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-400 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website 
              and to analyze how our services are used.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-400 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 mb-6">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of certain communications from us.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-6">
              If you have any questions about this privacy policy, please contact us at 
              <a href="mailto:privacy@silksong-maps.com" className="text-primary-500 hover:text-primary-400">
                privacy@silksong-maps.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}