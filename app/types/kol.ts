export type SocialMediaStats = {
  facebook: number;
  instagram: number;
  tiktok: number;
  threads: number;
  youtube: number;
};

export type KolLevel = 
  | 'Newbie'
  | 'Nano'
  | 'Micro'
  | 'Mid-Tier'
  | 'Macro'
  | 'Mega'
  | 'Celebrity';

export type Platform = 'facebook' | 'instagram' | 'tiktok' | 'threads' | 'youtube';

export interface Kol {
  id: string;
  name: string;
  avatar: string;
  level: KolLevel;
  phone: string;
  city: string;
  email: string;
  socialMedia: SocialMediaStats;
  mainChannel: Platform;
  genre: string;
  age: number;
  gender: 'male' | 'female' | 'other';
} 