import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './login-screen';
import { SignupScreen } from './signup-screen';
import { SubjectSelectionScreen } from '../subjects/subject-selection-screen';

type AuthFlowProps = {
  onAuthSuccess: () => void;
  onSubjectSelectionComplete: () => void;
  initialScreen?: 'login' | 'signup';
};

export function AuthFlow({ onAuthSuccess, onSubjectSelectionComplete, initialScreen = 'login' }: AuthFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup' | 'subjects'>(initialScreen);

  const handleLoginSuccess = () => {
    // Only call onAuthSuccess if we're not going to show subject selection
    onAuthSuccess();
  };

  const handleSignupSuccess = () => {
    // After signup, show subject selection
    setCurrentScreen('subjects');
  };

  const handleSubjectSelectionComplete = () => {
    // When subjects are selected, call the completion handler
    onSubjectSelectionComplete();
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

