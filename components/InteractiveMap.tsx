'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom icons for different types of locations
const createCustomIcon = (color: string, icon: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        ${icon}
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  })
}

// Map data for Silksong locations
const mapLocations = [
  {
    id: 1,
    name: "Moss Grotto",
    type: "area",
    position: [50.5, 30.5] as [number, number],
    description: "The starting area of Pharloom. Learn the basics of movement and combat.",
    collectibles: 8,
    bosses: 1,
    difficulty: "Easy",
    icon: "🌿",
    color: "#10B981"
  },
  {
    id: 2,
    name: "Greymoor",
    type: "area", 
    position: [48.2, 32.1] as [number, number],
    description: "A misty moorland filled with mysterious creatures and hidden paths.",
    collectibles: 12,
    bosses: 2,
    difficulty: "Medium",
    icon: "🌫️",
    color: "#6B7280"
  },
  {
    id: 3,
    name: "Deep Docks",
    type: "area",
    position: [52.8, 28.9] as [number, number],
    description: "Mechanical harbor with industrial machinery and hidden treasures.",
    collectibles: 15,
    bosses: 3,
    difficulty: "Hard",
    icon: "⚙️",
    color: "#3B82F6"
  },
  {
    id: 4,
    name: "Crystal Peak",
    type: "area",
    position: [46.1, 35.7] as [number, number],
    description: "Ascend the crystal formations and discover the secrets of crystal guardians.",
    collectibles: 18,
    bosses: 4,
    difficulty: "Hard",
    icon: "💎",
    color: "#8B5CF6"
  },
  {
    id: 5,
    name: "Weaver's Den",
    type: "area",
    position: [44.3, 31.2] as [number, number],
    description: "Enter the domain of the Weaver Queen. Master the art of silk-based combat.",
    collectibles: 20,
    bosses: 5,
    difficulty: "Expert",
    icon: "🕷️",
    color: "#EF4444"
  },
  {
    id: 6,
    name: "Void Sanctum",
    type: "area",
    position: [42.7, 29.8] as [number, number],
    description: "The final area where you'll face the ultimate challenge.",
    collectibles: 25,
    bosses: 6,
    difficulty: "Expert",
    icon: "🌑",
    color: "#1F2937"
  },
  {
    id: 7,
    name: "The Weaver Queen",
    type: "boss",
    position: [44.1, 31.0] as [number, number],
    description: "Master the Weaver Queen's complex attack patterns and discover her weaknesses.",
    difficulty: "Expert",
    icon: "👑",
    color: "#DC2626"
  },
  {
    id: 8,
    name: "The Void Knight",
    type: "boss",
    position: [42.5, 29.6] as [number, number],
    description: "Face the ultimate challenge with the Void Knight. End-game boss strategies.",
    difficulty: "Expert",
    icon: "⚔️",
    color: "#7C2D12"
  },
  {
    id: 9,
    name: "Mask Shard Cache",
    type: "collectible",
    position: [50.3, 30.7] as [number, number],
    description: "Hidden cache containing valuable mask shards to increase your health.",
    icon: "🎭",
    color: "#F59E0B"
  },
  {
    id: 10,
    name: "Silk Spool Vault",
    type: "collectible",
    position: [48.0, 32.3] as [number, number],
    description: "Ancient vault containing rare silk spools for needle upgrades.",
    icon: "🧵",
    color: "#EC4899"
  }
]

// Map controls component
function MapControls() {
  const map = useMap()
  
  useEffect(() => {
    // Add custom controls
    const control = L.control({ position: 'topright' })
    
    control.onAdd = function() {
      const div = L.DomUtil.create('div', 'leaflet-control-custom')
      div.innerHTML = `
        <div style="
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 10px;
          border-radius: 5px;
          font-size: 12px;
          line-height: 1.4;
        ">
          <div><strong>Legend:</strong></div>
          <div>🌿 Areas</div>
          <div>👑 Bosses</div>
          <div>🎭 Collectibles</div>
        </div>
      `
      return div
    }
    
    control.addTo(map)
    
    return () => {
      map.removeControl(control)
    }
  }, [map])
  
  return null
}

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [mapCenter] = useState<[number, number]>([47.5, 31.0])
  const [mapZoom] = useState(6)

  return (
    <div className="w-full h-full">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapControls />
        
        {mapLocations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            icon={createCustomIcon(location.color, location.icon)}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-2">{location.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Difficulty:</span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    location.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    location.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    location.difficulty === 'Hard' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {location.difficulty}
                  </span>
                </div>
                {location.collectibles && (
                  <div className="text-sm text-gray-500">
                    Collectibles: {location.collectibles} | Bosses: {location.bosses}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Location Details Panel */}
      {selectedLocation && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-[1000]">
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-2">{selectedLocation.name}</h3>
          <p className="text-gray-600 mb-2">{selectedLocation.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Type:</span>
            <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded">
              {selectedLocation.type}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Difficulty:</span>
            <span className={`text-sm px-2 py-1 rounded ${
              selectedLocation.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              selectedLocation.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              selectedLocation.difficulty === 'Hard' ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              {selectedLocation.difficulty}
            </span>
          </div>
          {selectedLocation.collectibles && (
            <div className="mt-2 text-sm text-gray-500">
              <div>Collectibles: {selectedLocation.collectibles}</div>
              <div>Bosses: {selectedLocation.bosses}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
