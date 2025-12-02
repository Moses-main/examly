import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { CustomTabBar } from '@/components/navigation/CustomTabBar';

// Helper hook to determine if we should show the tab bar
function useShowTabBar() {
  const segments = useSegments();
  const firstSegment = segments[0];
  
  // Show tab bar only for dashboard and its nested routes
  return firstSegment === '(dashboard)';
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, selectedSubjects, isLoading } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const showTabBar = useShowTabBar();

  // Handle navigation based on auth state
  useEffect(() => {
    if (isLoading) return; // Don't navigate while auth state is loading

    if (!isReady) {
      // Initial render, set ready after a short delay
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }

    if (isAuthenticated && selectedSubjects) {
      // If authenticated and subjects are selected, go to dashboard
      router.replace('/(dashboard)');
    } else if (isAuthenticated) {
      // If authenticated but no subjects selected, stay on auth flow
      router.replace('/(tabs)');
    } else {
      // Not authenticated, show auth flow
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, selectedSubjects, router, isReady, isLoading]);

  // Show a loading indicator while the app is initializing
  if (isLoading || !isReady) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F9FAFB' 
      }}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F9FAFB' },
        }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(dashboard)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        {showTabBar && <CustomTabBar />}
      </View>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});
