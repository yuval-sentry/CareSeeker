# CareSeeker

A React Native mobile application for connecting users with care providers. Built with Expo and TypeScript.

## Features

- **Welcome Screen**: Introduction to the app
- **Search Screen**: Find care providers by location and care type
- **Results Screen**: Browse available care providers
- **Chat Screen**: Message providers directly
- **Sentry Integration**: Performance monitoring and error tracking

## Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go** app on your mobile device (for testing)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CareSeeker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Expo CLI globally** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

## Running the App

### Development Mode

1. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   # or
   expo start
   ```

2. **Choose your platform:**
   - **iOS Simulator**: Press `i` in the terminal or scan the QR code with Expo Go
   - **Android Emulator**: Press `a` in the terminal or scan the QR code with Expo Go
   - **Physical Device**: Scan the QR code with the Expo Go app

### Platform-Specific Commands

- **iOS**: `npm run ios` or `expo start --ios`
- **Android**: `npm run android` or `expo start --android`
- **Web**: `npm run web` or `expo start --web`

## Project Structure

```
CareSeeker/
├── App.tsx                 # Main app component with navigation
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── CustomButton.tsx
│   │   └── ProviderCard.tsx
│   ├── screens/           # App screens
│   │   ├── WelcomeScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   ├── ResultsScreen.tsx
│   │   └── ChatScreen.tsx
│   ├── data/             # Static data and dummy data
│   │   └── dummyData.ts
│   └── types/            # TypeScript type definitions
│       └── index.ts
├── assets/               # Images and static assets
└── package.json
```

## Key Dependencies

- **Expo**: React Native development platform
- **React Navigation**: Navigation between screens
- **Sentry**: Error tracking and performance monitoring
- **TypeScript**: Type safety and better development experience

## Configuration

### Sentry Setup

The app includes Sentry integration for error tracking and performance monitoring. The DSN is configured in `App.tsx`. To use your own Sentry project:

1. Create a Sentry project
2. Replace the DSN in `App.tsx` with your project's DSN
3. Configure additional Sentry options as needed

## Development Tips

- Use **Expo Go** for quick testing on physical devices
- Enable **Hot Reloading** for faster development
- Check the **Expo DevTools** in your browser for debugging
- Use **TypeScript** for better code quality and IDE support

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npm start -- --clear
   ```

2. **Expo CLI not found**
   ```bash
   npm install -g @expo/cli
   ```

3. **Dependencies issues**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **iOS Simulator not working**
   - Make sure Xcode is installed
   - Install iOS Simulator through Xcode

5. **Android Emulator not working**
   - Install Android Studio
   - Set up Android Virtual Device (AVD)

## Building for Production

### Expo Build

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
