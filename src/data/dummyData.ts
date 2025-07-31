import { CareType, CareProvider } from '../types';

export const careTypes: CareType[] = [
  {
    id: '1',
    name: 'Babysitter',
    icon: '👶',
    description: 'Childcare and babysitting services'
  },
  {
    id: '2',
    name: 'Dog Walker',
    icon: '🐕',
    description: 'Pet walking and care services'
  },
  {
    id: '3',
    name: 'Tutoring',
    icon: '📚',
    description: 'Academic tutoring and lessons'
  },
  {
    id: '4',
    name: 'Housekeeping',
    icon: '🏠',
    description: 'Cleaning and household services'
  },
  {
    id: '5',
    name: 'Senior Care',
    icon: '👴',
    description: 'Elderly care and companionship'
  },
  {
    id: '6',
    name: 'Pet Sitting',
    icon: '🐱',
    description: 'Pet sitting and care services'
  }
];

export const careProviders: CareProvider[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 4.8,
    reviewCount: 127,
    hourlyRate: 25,
    careTypes: ['Babysitter', 'Tutoring'],
    location: 'Downtown, New York',
    experience: '5 years',
    bio: 'Experienced childcare provider with a passion for helping children learn and grow.',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 4.9,
    reviewCount: 89,
    hourlyRate: 30,
    careTypes: ['Dog Walker', 'Pet Sitting'],
    location: 'Brooklyn, New York',
    experience: '3 years',
    bio: 'Professional dog walker and pet sitter. I love all animals and ensure they get the best care.',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 4.7,
    reviewCount: 156,
    hourlyRate: 35,
    careTypes: ['Housekeeping', 'Senior Care'],
    location: 'Queens, New York',
    experience: '8 years',
    bio: 'Dedicated housekeeper and senior care provider with extensive experience in both fields.',
    isAvailable: true
  },
  {
    id: '4',
    name: 'David Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4.6,
    reviewCount: 73,
    hourlyRate: 40,
    careTypes: ['Tutoring'],
    location: 'Manhattan, New York',
    experience: '10 years',
    bio: 'Certified teacher with expertise in math and science. I make learning fun and engaging.',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Lisa Wang',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 4.9,
    reviewCount: 201,
    hourlyRate: 28,
    careTypes: ['Babysitter', 'Senior Care'],
    location: 'Bronx, New York',
    experience: '6 years',
    bio: 'Compassionate caregiver with experience in both childcare and senior care.',
    isAvailable: true
  },
  {
    id: '6',
    name: 'James Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 4.5,
    reviewCount: 94,
    hourlyRate: 22,
    careTypes: ['Dog Walker', 'Pet Sitting'],
    location: 'Staten Island, New York',
    experience: '4 years',
    bio: 'Animal lover and experienced pet care provider. Your pets will be in good hands.',
    isAvailable: true
  }
];
