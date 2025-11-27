import { AuthFlow } from '@/components/authentication/auth-flow';
import { OnboardingScreen } from '@/components/onboarding-screen';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (showOnboarding) {
    return <OnboardingScreen onComplete={() => {
      setShowOnboarding(false);
      setShowAuth(true);
    }} />;
  }

  if (showAuth && !isAuthenticated) {
    return <AuthFlow onAuthSuccess={() => {
      setShowAuth(false);
      setIsAuthenticated(true);
    }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
