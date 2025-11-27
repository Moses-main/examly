import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type Landing3Props = {
  onNext: () => void;
  onSkip: () => void;
  currentIndex: number;
  totalScreens: number;
};

export function Landing3({ onNext, onSkip, currentIndex }: Landing3Props) {
  return (
    <LinearGradient
      colors={['#e3fff1', '#d2e6dc', '#ffffff']}
      style={styles.container}
      locations={[0, 0.5, 1]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top Progress Bar */}
        <View style={styles.topBar}>
          <View style={styles.progressContainer}>
            <View style={[styles.progressLine, { backgroundColor: '#4CAF50' }]} />
            <View style={styles.dotsContainer}>
              <View style={[styles.dot, currentIndex === 0 ? styles.activeDot : styles.inactiveDot]} />
              <View style={[styles.dot, currentIndex === 1 ? styles.activeDot : styles.inactiveDot]} />
              <View style={[styles.dot, currentIndex === 2 ? styles.activeDot : styles.inactiveDot]} />
              <View style={[styles.dot, currentIndex === 3 ? styles.activeDot : styles.inactiveDot]} />
            </View>
          </View>
          <TouchableOpacity onPress={onSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Icon - Phone with offline indicator */}
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              {/* Phone icon */}
              <View style={styles.phoneIcon}>
                <View style={styles.phoneScreen}>
                  <View style={styles.phoneLines}>
                    <View style={styles.phoneLine} />
                    <View style={styles.phoneLine} />
                    <View style={styles.phoneLine} />
                  </View>
                </View>
                {/* Offline indicator (red circle with X) */}
                <View style={styles.offlineIndicator}>
                  <Text style={styles.offlineX}>✕</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Works Offline Anytime</Text>

          {/* Description */}
          <Text style={styles.description}>
            No internet? No problem. Download practice packs and study on the go, wherever you are.
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={onNext}>
            <Text style={styles.buttonText}>Get Started ✓</Text>
          </TouchableOpacity>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressLine: {
    width: 40,
    height: 3,
    borderRadius: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  inactiveDot: {
    backgroundColor: '#D0D0D0',
  },
  skipText: {
    fontSize: 16,
    color: '#687076',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  iconContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  phoneIcon: {
    width: 100,
    height: 160,
    backgroundColor: '#C8E6C9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  phoneScreen: {
    width: '85%',
    height: '70%',
    backgroundColor: '#A5D6A7',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
  phoneLines: {
    width: '70%',
    gap: 8,
  },
  phoneLine: {
    height: 3,
    backgroundColor: '#81C784',
    borderRadius: 2,
  },
  offlineIndicator: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  offlineX: {
    color: '#ffffff',
    fontSize: 24,
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
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
