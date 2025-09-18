import Navigation from '@/components/Navigation'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: January 2024
          </p>
        </div>

        <div className="card">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-400 mb-6">
              By accessing and using Silksong Maps, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p className="text-gray-400 mb-6">
              Permission is granted to temporarily download one copy of Silksong Maps for personal, 
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p className="text-gray-400 mb-6">
              The materials on Silksong Maps are provided on an 'as is' basis. Silksong Maps makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
            <p className="text-gray-400 mb-6">
              In no event shall Silksong Maps or its suppliers be liable for any damages arising out 
              of the use or inability to use the materials on Silksong Maps.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Accuracy of Materials</h2>
            <p className="text-gray-400 mb-6">
              The materials appearing on Silksong Maps could include technical, typographical, or 
              photographic errors. We do not warrant that any of the materials are accurate, 
              complete, or current.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
            <p className="text-gray-400 mb-6">
              Silksong Maps has not reviewed all of the sites linked to our website and is not 
              responsible for the contents of any such linked site.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
            <p className="text-gray-400 mb-6">
              Silksong Maps may revise these terms of service at any time without notice. By using 
              this website, you are agreeing to be bound by the then current version of these terms.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-6">
              If you have any questions about these terms of service, please contact us at 
              <a href="mailto:legal@silksong-maps.com" className="text-primary-500 hover:text-primary-400">
                legal@silksong-maps.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}