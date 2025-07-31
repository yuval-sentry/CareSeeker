import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CareProvider } from '../types';

interface ProviderCardProps {
  provider: CareProvider;
  onContact: (provider: CareProvider) => void;
}

export default function ProviderCard({ provider, onContact }: ProviderCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: provider.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{provider.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {provider.rating}</Text>
            <Text style={styles.reviewCount}>({provider.reviewCount} reviews)</Text>
          </View>
          <Text style={styles.location}>{provider.location}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${provider.hourlyRate}</Text>
          <Text style={styles.priceUnit}>/hour</Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.experience}>Experience: {provider.experience}</Text>
        <Text style={styles.bio} numberOfLines={2}>
          {provider.bio}
        </Text>
        <View style={styles.careTypes}>
          {provider.careTypes.map((careType, index) => (
            <View key={index} style={styles.careTypeTag}>
              <Text style={styles.careTypeText}>{careType}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => onContact(provider)}
      >
        <Text style={styles.contactButtonText}>Contact Provider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  priceUnit: {
    fontSize: 12,
    color: '#666',
  },
  details: {
    marginBottom: 16,
  },
  experience: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  careTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  careTypeTag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  careTypeText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  contactButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
