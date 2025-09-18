'use client'

import dynamic from 'next/dynamic'

// 动态导入InteractiveMap，禁用SSR
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-dark-700 rounded-lg flex items-center justify-center">
      <div className="text-center text-gray-400">
        <div className="w-16 h-16 mx-auto mb-4 bg-dark-600 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🗺️</span>
        </div>
        <p>Loading map...</p>
      </div>
    </div>
  )
})

export default InteractiveMap
