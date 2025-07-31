export interface CareType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface CareProvider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  careTypes: string[];
  location: string;
  experience: string;
  bio: string;
  isAvailable: boolean;
}

export interface SearchFilters {
  careType: string;
  date: Date;
  location: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  providerId: string;
  userId: string;
  providerName: string;
  providerAvatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
}

export interface Booking {
  id: string;
  providerId: string;
  userId: string;
  careType: string;
  date: Date;
  location: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
