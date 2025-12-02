import { AuthFlow } from '@/components/authentication/auth-flow';
import { OnboardingScreen } from '@/components/onboarding-screen';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function HomeScreen() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const { isAuthenticated, login, completeSubjectSelection } = useAuth();

  // Skip onboarding if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setShowOnboarding(false);
    }
  }, [isAuthenticated]);

  if (showOnboarding) {
    return (
      <OnboardingScreen 
        onComplete={() => setShowOnboarding(false)} 
      />
    );
  }

  // Show auth flow if not authenticated
  if (!isAuthenticated) {
    return (
      <AuthFlow 
        initialScreen="signup"
        onAuthSuccess={login}
        onSubjectSelectionComplete={completeSubjectSelection}
      />
    );
  }

  // This will be shown briefly before the navigation happens in the root layout
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});
