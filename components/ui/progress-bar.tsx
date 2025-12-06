import { View, StyleSheet, Animated, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';

type ProgressBarProps = {
  progress: number; // 0 to 100
  color?: string;
  backgroundColor?: string;
  height?: number;
  style?: ViewStyle;
};

export function ProgressBar({
  progress,
  color = '#4F46E5',
  backgroundColor = '#E5E7EB',
  height = 6,
  style,
}: ProgressBarProps) {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: Math.min(Math.max(progress, 0), 100),
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, progressAnim]);

  const width = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, { height, backgroundColor }, style]}>
      <Animated.View
        style={[
          styles.progress,
          {
            width,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 3,
  },
});
