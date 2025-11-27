import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './login-screen';
import { SignupScreen } from './signup-screen';

type AuthFlowProps = {
  onAuthSuccess: () => void;
  initialScreen?: 'login' | 'signup';
};

export function AuthFlow({ onAuthSuccess, initialScreen = 'login' }: AuthFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup'>(initialScreen);

  const handleLoginSuccess = () => {
    onAuthSuccess();
  };

  const handleSignupSuccess = () => {
    onAuthSuccess();
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'login' ? (
        <LoginScreen
          onSignup={() => setCurrentScreen('signup')}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <SignupScreen
          onLogin={() => setCurrentScreen('login')}
          onSignupSuccess={handleSignupSuccess}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

