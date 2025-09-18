'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface CardProps {
  title: string
  description: string
  href: string
  image?: string
  featured?: boolean
}

export default function Card({ title, description, href, image, featured = false }: CardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href={href} className="group">
      <div className={`card hover:border-primary-500/50 transition-all duration-300 ${featured ? 'ring-2 ring-primary-500/20' : ''}`}>
        {image && !imageError && (
          <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {image && imageError && (
          <div className="aspect-video bg-dark-700 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-dark-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-primary-500 font-medium">
          Read more
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
