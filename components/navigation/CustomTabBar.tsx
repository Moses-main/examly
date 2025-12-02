import { Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const COLORS = {
  primary: "#4F46E5",
  textLight: "#6A6A6A",
  background: "#FFF",
  border: "#E5E7EB",
};

export function CustomTabBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname === route;
  };

  const tabs = [
    {
      name: "Home",
      icon: "home",
      route: "/(dashboard)",
    },
    {
      name: "Practice",
      icon: "book-open",
      route: "/(dashboard)/practice",
    },
    // Flash button will be inserted here
    {
      name: "Stats",
      icon: "bar-chart-2",
      route: "/(dashboard)/stats",
    },
    {
      name: "Settings",
      icon: "settings-outline",
      route: "/(dashboard)/settings",
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
          {tab.name === "Home" ? (
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
              {
                color: isActive(tab.route) ? COLORS.primary : COLORS.textLight,
              },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Flash Button */}
      <View style={styles.flashButtonContainer}>
        <LinearGradient
          colors={["#4F46E5", "#7C3AED"]}
          style={styles.flashButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={styles.flashButton}
            onPress={() => {
              // Add flash button action here
              console.log("Flash button pressed");
            }}
          >
            <Ionicons name="flash" size={32} color="#FFF" />
          </TouchableOpacity>
        </LinearGradient>
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
              {
                color: isActive(tab.route) ? COLORS.primary : COLORS.textLight,
              },
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    position: "relative",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  flashButtonContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: -30, // Increased from -24 to lift the button higher
  },
  flashButtonGradient: {
    width: 72, // Increased from 64
    height: 72, // Increased from 64
    borderRadius: 36, // Increased from 32
    justifyContent: "center",
    alignItems: "center",
    elevation: 20, // Increased from 8
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 8 }, // Increased shadow offset
    shadowOpacity: 0.4, // Slightly more visible shadow
    shadowRadius: 15, // Increased from 12
    borderWidth: 6, // Increased from 3
    borderColor: "#FFF",
    marginTop: -30,
  },
  flashButton: {
    width: 64, // Increased from 56
    height: 64, // Increased from 56
    borderRadius: 32, // Increased from 28
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
