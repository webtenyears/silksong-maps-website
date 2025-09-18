export interface MapLocation {
  id: string
  name: string
  description: string
  type: 'boss' | 'collectible' | 'area' | 'secret' | 'bench' | 'shop'
  coordinates: [number, number]
  area: string
  requirements?: string[]
  rewards?: string[]
  image?: string
}

export interface Area {
  id: string
  name: string
  description: string
  connections: string[]
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  unlockRequirements: string[]
  collectibles: string[]
  bosses: string[]
}

export interface Guide {
  id: string
  title: string
  slug: string
  description: string
  content: string
  category: 'boss' | 'area' | 'collectible' | 'general'
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  tags: string[]
  publishedAt: string
  updatedAt: string
  featured: boolean
  image?: string
}

export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt: string
  featured: boolean
  image?: string
  tags: string[]
}

