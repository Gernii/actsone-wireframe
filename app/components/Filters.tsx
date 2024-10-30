import { KolLevel, Platform } from '../types/kol';

const cities = [
  'All Cities',
  'New York',
  'Los Angeles',
  'Chicago',
  'Miami',
  'San Francisco',
  'Seattle'
] as const;

const platforms: Platform[] = [
  'facebook',
  'instagram',
  'tiktok',
  'threads',
  'youtube'
];

const levels: KolLevel[] = [
  'Newbie',
  'Nano',
  'Micro',
  'Mid-Tier',
  'Macro',
  'Mega',
  'Celebrity'
];

export default function Filters() {
  return (
    <div className="p-4 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-4">
          <select className="px-3 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
            <option value="">All Filters</option>
            <option value="active">Active KOLs</option>
            <option value="inactive">Inactive KOLs</option>
          </select>

          <select className="px-3 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city.toLowerCase()}>
                {city}
              </option>
            ))}
          </select>

          <select className="px-3 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
            <option value="">All Platforms</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </option>
            ))}
          </select>

          <select className="px-3 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
            <option value="">All Levels</option>
            {levels.map((level) => (
              <option key={level} value={level.toLowerCase()}>
                {level}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by:</span>
          <select className="px-3 py-2 border rounded-lg bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
            <option value="level">Influencer Level</option>
            <option value="name_asc">Name (A→Z)</option>
            <option value="name_desc">Name (Z→A)</option>
          </select>
        </div>
      </div>
    </div>
  );
} 