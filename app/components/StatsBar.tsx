import { KolLevel } from "../types/kol";
import { useState } from "react";

interface StatsBarProps {
  totalKols: number;
  levelStats: Record<KolLevel, number>;
}

interface StatBoxProps {
  label: string;
  value: number;
  isTotal?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

function StatBox({ label, value, isTotal = false, isSelected = false, onClick }: StatBoxProps) {
  const baseClasses = `
    p-4 rounded-lg cursor-pointer
    flex items-center justify-between
    transition-all duration-200
    hover:shadow-md
    ${onClick ? 'hover:border-blue-200' : ''}
  `;

  const backgroundClasses = isTotal
    ? 'bg-blue-50 border border-blue-100'
    : isSelected
    ? 'bg-yellow-50 border border-yellow-200'
    : 'bg-gray-50 border border-gray-100';

  return (
    <div 
      className={`${baseClasses} ${backgroundClasses}`}
      onClick={onClick}
    >
      <span className="text-sm text-gray-600 font-medium">
        {label}
      </span>
      <span className={`
        text-2xl font-bold
        ${isTotal ? 'text-blue-600' : isSelected ? 'text-yellow-600' : 'text-gray-800'}
      `}>
        {value.toLocaleString()}
      </span>
    </div>
  );
}

export default function StatsBar({ totalKols, levelStats }: StatsBarProps) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Convert levelStats into array and sort by level hierarchy
  const levelHierarchy: KolLevel[] = [
    'Newbie',
    'Nano',
    'Micro',
    'Mid-Tier',
    'Macro',
    'Mega',
    'Celebrity'
  ];

  const statsArray = levelHierarchy
    .filter(level => level in levelStats)
    .map(level => ({
      level,
      count: levelStats[level]
    }));

  return (
    <div className="bg-white p-6 border-b">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total KOLs box */}
          <StatBox
            label="Total KOLs"
            value={totalKols}
            isTotal={true}
          />
          
          {/* Level stats boxes */}
          {statsArray.map(({ level, count }) => (
            <StatBox
              key={level}
              label={level}
              value={count}
              isSelected={selectedLevel === level}
              onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
            />
          ))}
          
          {/* Add empty boxes if needed to maintain grid layout */}
          {[...Array(4 - ((statsArray.length + 1) % 4 || 4))].map((_, index) => (
            <div key={`empty-${index}`} className="hidden lg:block" />
          ))}
        </div>
      </div>
    </div>
  );
} 