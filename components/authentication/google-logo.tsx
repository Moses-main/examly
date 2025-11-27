import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type GoogleLogoProps = {
  size?: number;
};

export function GoogleLogo({ size = 20 }: GoogleLogoProps) {
  return (
    <Image
      source={{ uri: 'https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png' }}
      style={[styles.logo, { width: size, height: size }]}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
});

