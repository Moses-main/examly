import { useState, useRef } from 'react';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import { Landing1 } from './onboarding/landing1';
import { Landing2 } from './onboarding/landing2';
import { Landing3 } from './onboarding/landing3';
import { Landing4 } from './onboarding/landing4';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type LandingScreenProps = {
  onNext: () => void;
  onSkip: () => void;
  currentIndex: number;
  totalScreens: number;
};

const onboardingScreens = [
  { id: '1', component: Landing1 },
  { id: '2', component: Landing2 },
  { id: '3', component: Landing3 },
  { id: '4', component: Landing4 },
];

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < onboardingScreens.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / SCREEN_WIDTH);
    if (index >= 0 && index < onboardingScreens.length) {
      setCurrentIndex(index);
    }
  };

  const renderItem = ({ item, index }: { item: typeof onboardingScreens[0]; index: number }) => {
    const Component = item.component;
    return (
      <View style={styles.screenContainer}>
        <Component 
          onNext={handleNext}
          onSkip={handleSkip}
          currentIndex={index}
          totalScreens={onboardingScreens.length}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingScreens}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
        onScrollToIndexFailed={(info) => {
          // Handle scroll to index failure
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({ index: info.index, animated: false });
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
});
