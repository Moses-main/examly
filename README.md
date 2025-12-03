# KVAULT Mobile App 📱

KVAULT is a modern, cross-platform mobile application built with React Native and Expo, designed to provide an intuitive learning experience with features like practice sessions, subject tracking, and progress monitoring.

## ✨ Features

- **Modern UI/UX** with smooth animations and responsive design
- **Custom Navigation** with a floating action button
- **Subject Management** for tracking different subjects
- **Practice Sessions** with AI-generated questions
- **Progress Tracking** with daily streaks and statistics
- **Offline Support** for learning on the go
- **Responsive Layout** that works on various screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode (for emulator) or Expo Go app (for physical device)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/kvault.git
   cd kvault
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on your preferred platform
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Scan the QR code with Expo Go (iOS/Android)

## 🛠 Tech Stack

- **Frontend**: React Native with TypeScript
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons
- **Animations**: React Native Reanimated
- **State Management**: React Context API
- **Build Tool**: Expo

## 📱 Screens

- **Dashboard**: Overview of subjects and quick actions
- **Practice**: Start practice sessions
- **Stats**: View learning statistics and progress
- **Settings**: App configuration and preferences

## 🏗 Project Structure

```
kvault/
├── app/                    # Main app directory with routes
│   ├── (dashboard)/        # Dashboard related screens
│   ├── _layout.tsx         # Root layout configuration
│   └── index.tsx           # Entry point
├── assets/                 # Static assets (images, fonts, etc.)
├── components/             # Reusable UI components
│   ├── dashboard/          # Dashboard specific components
│   └── navigation/         # Navigation components
├── constants/              # App constants and theme
└── hooks/                  # Custom React hooks
```

## 🧪 Testing

Run tests using:
```bash
npm test
```

## 📦 Building for Production

### Android
```bash
eas build --platform android
```

### iOS
```bash
eas build --platform ios
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development experience
- [React Native](https://reactnative.dev/) for cross-platform development
- All the open-source libraries that made this project possible
