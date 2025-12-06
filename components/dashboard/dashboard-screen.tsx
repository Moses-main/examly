import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import React from "react";
import {
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Platform,
} from "react-native";
import { useRef, useState } from "react";

// ----------------------------------------------
// DESIGN TOKENS
// ----------------------------------------------
const COLORS = {
  background: "#F8FAFC",
  textDark: "#0A0A0A",
  textLight: "#6A6A6A",
  primary: "#4F46E5",
  primaryDark: "#4338CA",
  purple: "#A855F7",
  purpleDark: "#7C3AED",
  cardLight: "#FFFFFF",
  border: "#E5E7EB",
  yellow: "#FACC15",
  green: "#10B981",
};

const SPACING = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
};

// ----------------------------------------------
// SUBJECT CARD
// ----------------------------------------------
const Subject = ({
  icon,
  title,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
}) => (
  <View style={styles.subjectCard}>
    <View style={[styles.subjectIcon, { backgroundColor: `${color}22` }]}>
      {icon}
    </View>
    <Text style={styles.subjectLabel}>{title}</Text>
  </View>
);

// ----------------------------------------------
// MAIN DASHBOARD
// ----------------------------------------------
export default function Dashboard() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  
  // Handle pull to refresh
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate network request
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  // Animate header based on scroll
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  // Animate header opacity based on scroll
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* STICKY HEADER */}
      <Animated.View 
        style={[
          styles.stickyHeader,
          {
            transform: [{ translateY: headerTranslateY }],
            opacity: headerOpacity,
          }
        ]}
      >
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Ionicons name="person-circle-outline" size={24} color={COLORS.primary} style={styles.userIcon} />
            <View>
              <Text style={styles.greeting}>Good Morning,</Text>
              <Text style={styles.name}>David</Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications-outline" size={24} color={COLORS.textDark} />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.statusButton}>
              <Ionicons name="cloud-offline-outline" size={16} color="#000" />
              <Text style={styles.statusText}>Offline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      <Animated.ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary}
            colors={[COLORS.primary]}
            progressViewOffset={Platform.OS === 'android' ? 40 : 0}
          />
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >

        {/* START PRACTICE CARD */}
        <TouchableOpacity 
          onPress={() => router.push('/(dashboard)/practice')}
          activeOpacity={0.9}
        >
          <LinearGradient colors={["#4F46E5", "#7C3AED"]} style={styles.bigCard}>
            <View style={styles.iconCircle}>
              <Ionicons name="flash" size={28} color="#FFF" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.bigCardTitle}>Start Practice</Text>
              <Text style={styles.bigCardText}>
                Jump into a random quiz session.
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={26} color="#FFF" />
          </LinearGradient>
        </TouchableOpacity>

        {/* AI GENERATED CARD */}
        <LinearGradient
          colors={["#A855F7", "#7C3AED"]}
          style={[styles.bigCard, { marginTop: 14 }]}
        >
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="robot-outline"
              size={28}
              color="#FFF"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.bigCardTitle}>AI Generated</Text>
            <Text style={styles.bigCardText}>
              Questions tailored to your weak points.
            </Text>
          </View>
        </LinearGradient>

        {/* QUICK CARDS */}
        <View style={styles.quickRow}>
          <View style={styles.smallCard}>
            <View
              style={[
                styles.smallIcon,
                { backgroundColor: `${COLORS.yellow}33` },
              ]}
            >
              <Ionicons name="time-outline" size={24} color={COLORS.yellow} />
            </View>
            <Text style={styles.smallCardTitle}>Past Qs</Text>
            <Text style={styles.smallCardSubtitle}>By Year</Text>
          </View>

          <View style={styles.smallCard}>
            <View
              style={[
                styles.smallIcon,
                { backgroundColor: `${COLORS.green}33` },
              ]}
            >
              <Feather name="download" size={24} color={COLORS.green} />
            </View>
            <Text style={styles.smallCardTitle}>Downloads</Text>
            <Text style={styles.smallCardSubtitle}>Offline Packs</Text>
          </View>
        </View>

        {/* SUBJECT SECTION */}
        <View style={styles.subjectHeader}>
          <Text style={styles.subjectTitle}>Your Subjects</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>

        <View style={styles.subjectList}>
          <Subject
            title="Mathematics"
            color="#4F46E5"
            icon={<Feather name="map" size={24} color="#4F46E5" />}
          />
          <Subject
            title="English"
            color="#EC4899"
            icon={<Feather name="book" size={24} color="#EC4899" />}
          />
          <Subject
            title="Physics"
            color="#8B5CF6"
            icon={
              <MaterialCommunityIcons name="atom" size={26} color="#8B5CF6" />
            }
          />
          <Subject
            title="Chemistry"
            color="#10B981"
            icon={
              <MaterialCommunityIcons name="flask" size={24} color="#10B981" />
            }
          />
        </View>

        {/* DAILY STREAK */}
        <View style={styles.streakContainer}>
          <View style={styles.streakHeader}>
            <Ionicons name="flame" size={20} color="#F59E0B" />
            <Text style={styles.streakTitle}>Daily Streak</Text>
          </View>
          <View style={styles.streakContent}>
            <Text style={styles.streakNumber}>7</Text>
            <Text style={styles.streakText}>days in a row</Text>
          </View>
          <View style={styles.streakProgress}>
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <View
                key={day}
                style={[styles.streakDay, day <= 5 && styles.streakDayActive]}
              />
            ))}
          </View>
        </View>

        <View style={{ height: 120 }} />
      </Animated.ScrollView>
    </View>
  );
}

// ----------------------------------------------
// STYLES — EXACT MATCH TO YOUR UI DESIGN
// ----------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Sticky header
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.background,
    paddingTop: SPACING.s,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  scrollContent: {
    paddingTop: 80, // Space for the sticky header
    paddingBottom: 40,
    paddingHorizontal: 0,
  },
  // HEADER
  header: {
    padding: SPACING.m,
    paddingTop: SPACING.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'relative',
    marginRight: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  greeting: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: "500",
  },
  name: {
    fontSize: 28,
    color: COLORS.textDark,
    fontWeight: "800",
    marginTop: 2,
  },
  statusButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardLight,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statusText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "600",
  },

  // LARGE CARDS
  bigCard: {
    marginHorizontal: SPACING.m,
    marginTop: 12,
    padding: SPACING.l, // Increased padding for more height
    minHeight: 120, // Set a minimum height
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(255,255,255,0.28)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  bigCardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
  },
  bigCardText: {
    fontSize: 14,
    color: "#E9E9FF",
    marginTop: 2,
  },

  // QUICK ACCESS CARDS
  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SPACING.m,
    marginTop: SPACING.l,
  },
  smallCard: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: SPACING.m,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  smallIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  smallCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  smallCardSubtitle: {
    fontSize: 13,
    color: COLORS.textLight,
    marginTop: 4,
  },

  // SUBJECTS
  subjectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.m,
    marginTop: SPACING.l,
  },
  subjectTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  editText: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  subjectList: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.m,
    marginTop: SPACING.m,
  },
  subjectCard: {
    width: '23%', // Slightly less than 25% to account for margins
    alignItems: "center",
    marginBottom: SPACING.m,
  },
  subjectIcon: {
    width: 68,
    height: 68,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subjectLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },


  // Streak Styles
  streakContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    margin: 16,
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  streakHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  streakTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textDark,
    marginLeft: 8,
  },
  streakContent: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  streakNumber: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textDark,
    marginRight: 8,
  },
  streakText: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  streakProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  streakDay: {
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E5E7EB",
  },
  streakDayActive: {
    backgroundColor: "#F59E0B",
  },
});
