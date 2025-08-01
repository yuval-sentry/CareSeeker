import * as Sentry from '@sentry/react-native';
import React, { useRef } from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ChatScreen from './src/screens/ChatScreen';

// 👇 Create the navigation ref BEFORE Sentry.init
//var navigationRef = React.createRef<NavigationContainerRef<any>>();

const navigationIntegration = Sentry.reactNavigationIntegration({
      enableTimeToInitialDisplay: true,
    });

// ✅ Sentry configuration
Sentry.init({
  dsn: 'https://2cc4955e8c3b9a982863215c62c739b3@o4509713716543488.ingest.us.sentry.io/4509764900749312',
  sendDefaultPii: true,
  debug: true,

  // Session Replay
  replaysSessionSampleRate: 1,
  replaysOnErrorSampleRate: 1,

  // Performance Monitoring
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,

  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
    Sentry.httpClientIntegration(),

    // 👇 Properly connect navigation ref for screen load tracking
    navigationIntegration
  ],
  // spotlight: __DEV__, // Uncomment to enable Spotlight in dev
});

const Stack = createStackNavigator();


export default Sentry.wrap(function App() {
  const containerRef = createNavigationContainerRef();
  return (
    <Sentry.TouchEventBoundary>
      <NavigationContainer ref={containerRef} onReady={() => {
           navigationIntegration.registerNavigationContainer(containerRef);
         }}>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: '600',
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'CareSeeker',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#007AFF',
              },
            }}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={{ title: 'Available Providers' }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ title: 'Chat' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Sentry.TouchEventBoundary>
  );
});
