import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type Landing1Props = {
  onNext: () => void;
  onSkip: () => void;
  currentIndex: number;
  totalScreens: number;
};

export function Landing1({ onNext, onSkip, currentIndex }: Landing1Props) {
  return (
    <LinearGradient
      colors={['#eaf7ff', '#e8f5fb', '#ffffff']}
      style={styles.container}
      locations={[0, 0.5, 1]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top Progress Bar */}
        <View style={styles.topBar}>
          <View style={styles.progressContainer}>
            <View style={[styles.progressLine, { backgroundColor: '#0a7ea4' }]} />
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
          {/* Icon - Document with checkmark */}
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              {/* Abstract shapes behind */}
              <View style={[styles.abstractShape, styles.shape1]} />
              <View style={[styles.abstractShape, styles.shape2]} />
              <View style={[styles.abstractShape, styles.shape3]} />
              
              {/* Main document icon */}
              <View style={styles.documentIcon}>
                <View style={styles.documentLines}>
                  <View style={styles.documentLine} />
                  <View style={styles.documentLine} />
                  <View style={styles.documentLine} />
                </View>
                {/* Checkmark circle */}
                <View style={styles.checkmarkCircle}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Practice JAMB & WAEC Past Questions</Text>

          {/* Description */}
          <Text style={styles.description}>
            Access thousands of real past questions. Master your exams with detailed solutions and performance tracking.
          </Text>

          {/* Continue Button */}
          <TouchableOpacity style={[styles.button, { backgroundColor: '#0a7ea4' }]} onPress={onNext}>
            <Text style={styles.buttonText}>Continue →</Text>
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
    backgroundColor: '#0a7ea4',
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
  abstractShape: {
    position: 'absolute',
    borderRadius: 20,
  },
  shape1: {
    width: 80,
    height: 80,
    backgroundColor: '#4A90E2',
    top: 10,
    right: 20,
    opacity: 0.3,
  },
  shape2: {
    width: 60,
    height: 60,
    backgroundColor: '#9B59B6',
    bottom: 20,
    left: 10,
    opacity: 0.3,
  },
  shape3: {
    width: 20,
    height: 20,
    backgroundColor: '#FF6B6B',
    top: 40,
    left: 30,
    borderRadius: 10,
  },
  documentIcon: {
    width: 120,
    height: 140,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  documentLines: {
    width: '70%',
    gap: 8,
    marginTop: 10,
  },
  documentLine: {
    height: 3,
    backgroundColor: '#90CAF9',
    borderRadius: 2,
  },
  checkmarkCircle: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 20,
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
