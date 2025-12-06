import { Stack } from 'expo-router';
import React from 'react';

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="practice" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="results" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="stats" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
}
