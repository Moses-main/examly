import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const COLORS = {
  primary: '#4F46E5',
  textLight: '#6A6A6A',
  background: '#FFF',
  border: '#E5E7EB',
};

export function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname === route;
  };

  const tabs = [
    {
      name: 'Home',
      icon: 'home',
      route: '/(dashboard)',
    },
    {
      name: 'Practice',
      icon: 'book-open',
      route: '/(dashboard)/practice',
    },
    // Flash button will be inserted here
    {
      name: 'Stats',
      icon: 'bar-chart-2',
      route: '/(dashboard)/stats',
    },
    {
      name: 'Settings',
      icon: 'settings-outline',
      route: '/(dashboard)/settings',
    },
  ];

  return (
    <View style={styles.container}>
      {tabs.slice(0, 2).map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => router.push(tab.route as any)}
        >
          {tab.name === 'Home' ? (
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={isActive(tab.route) ? COLORS.primary : COLORS.textLight}
            />
          ) : (
            <Feather
              name={tab.icon as any}
              size={24}
              color={isActive(tab.route) ? COLORS.primary : COLORS.textLight}
            />
          )}
          <Text
            style={[
              styles.label,
              { color: isActive(tab.route) ? COLORS.primary : COLORS.textLight },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
      
      {/* Flash Button */}
      <View style={styles.flashButtonContainer}>
        <TouchableOpacity
          style={styles.flashButton}
          onPress={() => {
            // Add flash button action here
            console.log('Flash button pressed');
          }}
        >
          <Ionicons name="flash" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
      
      {tabs.slice(2).map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => router.push(tab.route as any)}
        >
          <Feather
            name={tab.icon as any}
            size={24}
            color={isActive(tab.route) ? COLORS.primary : COLORS.textLight}
          />
          <Text
            style={[
              styles.label,
              { color: isActive(tab.route) ? COLORS.primary : COLORS.textLight },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    position: 'relative',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  flashButtonContainer: {
    alignItems: 'center',
    width: 80,
    marginTop: -32,
  },
  flashButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
