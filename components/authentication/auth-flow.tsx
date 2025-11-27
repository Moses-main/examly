import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './login-screen';
import { SignupScreen } from './signup-screen';
import { SubjectSelectionScreen } from '../subjects/subject-selection-screen';

type AuthFlowProps = {
  onAuthSuccess: () => void;
  onSubjectSelectionComplete?: () => void;
  initialScreen?: 'login' | 'signup';
};

export function AuthFlow({ onAuthSuccess, onSubjectSelectionComplete, initialScreen = 'login' }: AuthFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup' | 'subjects'>(initialScreen);

  const handleLoginSuccess = () => {
    onAuthSuccess();
  };

  const handleSignupSuccess = () => {
    setCurrentScreen('subjects');
  };

  const handleSubjectSelectionComplete = () => {
    if (onSubjectSelectionComplete) {
      onSubjectSelectionComplete();
    } else {
      onAuthSuccess();
    }
  };

  if (currentScreen === 'subjects') {
    return (
      <View style={styles.container}>
        <SubjectSelectionScreen
          onBack={() => setCurrentScreen('signup')}
          onContinue={handleSubjectSelectionComplete}
        />
      </View>
    );
  }

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

