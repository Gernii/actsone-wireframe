import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      
      <div className="flex-1 max-w-2xl mx-8">
        <input
          type="text"
          placeholder="Search KOLs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </header>
  );
} 