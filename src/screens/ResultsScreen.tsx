import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import * as Sentry from '@sentry/react-native';
import { careProviders } from '../data/dummyData';
import { CareProvider } from '../types';
import ProviderCard from '../components/ProviderCard';

interface ResultsScreenProps {
  navigation: any;
  route: any;
}

export default function ResultsScreen({ navigation, route }: ResultsScreenProps) {
  //var viewLoaded = false;
  //var viewLoadedTime: any
  var timeToContactSpan: any;

  const { filters } = route.params;

  const filteredProviders = careProviders.filter(provider =>
    provider.careTypes.includes(filters.careType)
  );

  const handleContactProvider = (provider: CareProvider) => {
    timeToContactSpan.end();
    navigation.navigate('Chat', { provider });
  };

  const renderProvider = ({ item }: { item: CareProvider }) => (
    <ProviderCard
      provider={item}
      onContact={handleContactProvider}
    />
  );

  const whenViewLoaded = () => {
    //viewLoaded = true;
    //viewLoadedTime = Date.now();
    timeToContactSpan = Sentry.startInactiveSpan({
      name: 'time_to_contact_provider',
      op: 'task',
      parentSpan: null,
    });
  };

  setTimeout(() => {},
    (Math.floor(Math.random() * (150 - 50 + 1)) + 50));

  return (
    <View style={styles.container} onLayout={whenViewLoaded}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {filteredProviders.length} providers found
        </Text>
        <Text style={styles.subtitle}>
          for {filters.careType} in {filters.location}
        </Text>
      </View>

      <FlatList
        data={filteredProviders}
        renderItem={renderProvider}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  listContainer: {
    padding: 16,
  },
});
