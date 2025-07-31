# CareSeeker

A React Native marketplace app for finding care providers, inspired by Care.com. This app focuses on the buyer side, allowing users to search for and connect with various types of care providers.

## Features

- **Search Screen**: Browse different types of care services (babysitting, dog walking, tutoring, housekeeping, senior care, pet sitting)
- **Provider Results**: View filtered results with provider details, ratings, and pricing
- **Chat System**: Communicate with providers through an in-app chat interface
- **Booking**: Book services directly through the chat interface

## Care Types Available

- 👶 Babysitter
- 🐕 Dog Walker
- 📚 Tutoring
- 🏠 Housekeeping
- 👴 Senior Care
- 🐱 Pet Sitting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CareSeeker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# For iOS
npm run ios

# For Android
npm run android

# For web
npm run web
```

## Project Structure

```
src/
├── screens/
│   ├── SearchScreen.tsx      # Main search interface
│   ├── ResultsScreen.tsx     # Provider results list
│   └── ChatScreen.tsx        # Chat interface
├── components/               # Reusable components
├── types/
│   └── index.ts             # TypeScript type definitions
└── data/
    └── dummyData.ts         # Mock data for providers and care types
```

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Vector Icons

## Screenshots

The app includes three main screens:

1. **Search Screen**: Select care type, dates, and location
2. **Results Screen**: Browse available providers with ratings and pricing
3. **Chat Screen**: Communicate with providers and book services

## Future Enhancements

- User authentication and profiles
- Real-time messaging
- Payment integration
- Provider verification system
- Review and rating system
- Push notifications
- Location-based search
- Advanced filtering options

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
