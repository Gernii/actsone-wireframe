'use client';

import { useState } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import Filters from './components/Filters';
import KolCard from './components/KolCard';
import Pagination from './components/Pagination';
import { Kol } from './types/kol';

// Mock data - replace with actual data fetching
const mockKols: Kol[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    level: 'Mega',
    phone: '+1 234-567-8901',
    city: 'New York',
    email: 'sarah.j@example.com',
    socialMedia: {
      facebook: 1200000,
      instagram: 2500000,
      tiktok: 3000000,
      threads: 800000,
      youtube: 1500000
    },
    mainChannel: 'instagram',
    genre: 'Fashion & Beauty',
    age: 28,
    gender: 'female'
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    level: 'Macro',
    phone: '+1 234-567-8902',
    city: 'Los Angeles',
    email: 'mike.c@example.com',
    socialMedia: {
      facebook: 800000,
      instagram: 1500000,
      tiktok: 2000000,
      threads: 500000,
      youtube: 900000
    },
    mainChannel: 'youtube',
    genre: 'Tech Reviews',
    age: 32,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    level: 'Mid-Tier',
    phone: '+1 234-567-8903',
    city: 'Chicago',
    email: 'emma.d@example.com',
    socialMedia: {
      facebook: 300000,
      instagram: 450000,
      tiktok: 600000,
      threads: 200000,
      youtube: 350000
    },
    mainChannel: 'tiktok',
    genre: 'Lifestyle',
    age: 25,
    gender: 'female'
  },
  {
    id: '4',
    name: 'Alex Wong',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    level: 'Micro',
    phone: '+1 234-567-8904',
    city: 'San Francisco',
    email: 'alex.w@example.com',
    socialMedia: {
      facebook: 25000,
      instagram: 35000,
      tiktok: 45000,
      threads: 15000,
      youtube: 20000
    },
    mainChannel: 'threads',
    genre: 'Gaming',
    age: 23,
    gender: 'male'
  },
  {
    id: '5',
    name: 'Lisa Park',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    level: 'Nano',
    phone: '+1 234-567-8905',
    city: 'Seattle',
    email: 'lisa.p@example.com',
    socialMedia: {
      facebook: 8000,
      instagram: 12000,
      tiktok: 15000,
      threads: 5000,
      youtube: 7000
    },
    mainChannel: 'facebook',
    genre: 'Food & Cooking',
    age: 29,
    gender: 'female'
  },
  {
    id: '6',
    name: 'Tom Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    level: 'Celebrity',
    phone: '+1 234-567-8906',
    city: 'Miami',
    email: 'tom.w@example.com',
    socialMedia: {
      facebook: 5000000,
      instagram: 8000000,
      tiktok: 10000000,
      threads: 3000000,
      youtube: 6000000
    },
    mainChannel: 'youtube',
    genre: 'Entertainment',
    age: 35,
    gender: 'male'
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StatsBar
        totalKols={1234}
        levelStats={{
          Newbie: 50,
          Nano: 100,
          Micro: 200,
          'Mid-Tier': 300,
          Macro: 400,
          Mega: 150,
          Celebrity: 34,
        }}
      />
      
      <Filters />
      
      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockKols.map((kol) => (
            <KolCard key={kol.id} kol={kol} />
          ))}
        </div>
      </main>
      
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
} 