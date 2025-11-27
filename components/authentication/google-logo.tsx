import { StyleSheet, View } from 'react-native';

type GoogleLogoProps = {
  size?: number;
};

export function GoogleLogo({ size = 20 }: GoogleLogoProps) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.logo}>
        {/* Blue section (top-left) */}
        <View style={styles.blue} />
        {/* Red section (top-right) */}
        <View style={styles.red} />
        {/* Yellow section (bottom-left) */}
        <View style={styles.yellow} />
        {/* Green section (bottom-right) */}
        <View style={styles.green} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  blue: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#4285F4',
    borderTopLeftRadius: 10,
  },
  red: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#EA4335',
    borderTopRightRadius: 10,
  },
  yellow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#FBBC05',
    borderBottomLeftRadius: 10,
  },
  green: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#34A853',
    borderBottomRightRadius: 10,
  },
});

