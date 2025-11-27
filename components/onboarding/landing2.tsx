import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type Landing2Props = {
  onNext: () => void;
  onSkip: () => void;
  currentIndex: number;
  totalScreens: number;
};

export function Landing2({ onNext, onSkip, currentIndex }: Landing2Props) {
  return (
    <LinearGradient
      colors={['#fcefff', '#fbf0fd', '#ffffff']}
      style={styles.container}
      locations={[0, 0.5, 1]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Top Progress Bar */}
        <View style={styles.topBar}>
          <View style={styles.progressContainer}>
            <View style={[styles.progressLine, { backgroundColor: '#9B59B6' }]} />
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
          {/* Icon - Robot head */}
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              {/* Sparkles */}
              <View style={[styles.sparkle, styles.sparkle1]} />
              <View style={[styles.sparkle, styles.sparkle2]} />
              <View style={[styles.sparkle, styles.sparkle3]} />
              
              {/* Robot head */}
              <View style={styles.robotHead}>
                {/* Antennae */}
                <View style={styles.antennaContainer}>
                  <View style={[styles.antenna, styles.antenna1]}>
                    <View style={[styles.antennaTop, { backgroundColor: '#4A90E2' }]} />
                  </View>
                  <View style={[styles.antenna, styles.antenna2]}>
                    <View style={[styles.antennaTop, { backgroundColor: '#FF69B4' }]} />
                  </View>
                </View>
                
                {/* Eyes */}
                <View style={styles.eyesContainer}>
                  <View style={styles.eye} />
                  <View style={styles.eye} />
                </View>
              </View>
              
              {/* Small blue dot */}
              <View style={styles.smallDot} />
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>AI Generates New Related Questions</Text>

          {/* Description */}
          <Text style={styles.description}>
            Never run out of practice material. Our smart AI analyzes your weak points and creates fresh questions just for you.
          </Text>

          {/* Continue Button */}
          <TouchableOpacity style={[styles.button, { backgroundColor: '#9B59B6' }]} onPress={onNext}>
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
    backgroundColor: '#9B59B6',
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
  sparkle: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  sparkle1: {
    backgroundColor: '#FFD700',
    top: 20,
    right: 30,
  },
  sparkle2: {
    backgroundColor: '#FFA500',
    bottom: 30,
    left: 20,
  },
  sparkle3: {
    backgroundColor: '#FFD700',
    top: 60,
    left: 40,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  robotHead: {
    width: 120,
    height: 100,
    backgroundColor: '#E1BEE7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  antennaContainer: {
    position: 'absolute',
    top: -20,
    flexDirection: 'row',
    gap: 30,
  },
  antenna: {
    width: 4,
    height: 20,
    backgroundColor: '#CE93D8',
  },
  antenna1: {
    marginLeft: 20,
  },
  antenna2: {
    marginRight: 20,
  },
  antennaTop: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    top: -6,
    left: -4,
  },
  eyesContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  eye: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  smallDot: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    bottom: 40,
    left: 20,
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
