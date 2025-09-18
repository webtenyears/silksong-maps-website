'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface SearchProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function Search({ placeholder = "Search guides, bosses, areas...", onSearch }: SearchProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          className="input pl-10 pr-4 py-2 w-full"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  )
}
