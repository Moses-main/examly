import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type Landing4Props = {
  onNext: () => void;
  onSkip: () => void;
  currentIndex: number;
  totalScreens: number;
};

export function Landing4({ onNext }: Landing4Props) {
  return (
    <LinearGradient
      colors={['#f9fafb', '#ffffff', '#f9fafb']}
      style={styles.container}
      locations={[0, 0.5, 1]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Main Content - No top bar for landing 4 */}
        <View style={styles.content}>
          {/* White Card */}
          <View style={styles.card}>
            {/* Green checkmark circle at top */}
            <View style={styles.checkmarkCircle}>
              <Text style={styles.checkmark}>✓</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>Welcome to PrepAce!</Text>

            {/* Description */}
            <Text style={styles.description}>
              You are all set to start practicing for your exams.
            </Text>

            {/* Restart Demo Button */}
            <TouchableOpacity style={styles.button} onPress={onNext}>
              <Text style={styles.buttonText}>Restart Demo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  checkmarkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#11181C',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    color: '#687076',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#11181C',
    fontSize: 16,
    fontWeight: '600',
  },
});
