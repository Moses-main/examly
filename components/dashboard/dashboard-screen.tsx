import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.name}>David</Text>
          </View>

          <TouchableOpacity style={styles.statusButton}>
            <Ionicons name="cloud-offline-outline" size={16} color="#000" />
            <Text style={styles.statusText}>Offline</Text>
          </TouchableOpacity>
        </View>

        {/* START PRACTICE CARD */}
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
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={26} color={COLORS.primary} />
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name="book-open" size={24} color={COLORS.textLight} />
          <Text style={styles.navLabel}>Practice</Text>
        </TouchableOpacity>

        {/* BIG FLASH BUTTON */}
        <TouchableOpacity style={styles.centerButton}>
          <View style={styles.flashButton}>
            <Ionicons name="flash" size={28} color="#FFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name="bar-chart-2" size={24} color={COLORS.textLight} />
          <Text style={styles.navLabel}>Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="settings-outline"
            size={24}
            color={COLORS.textLight}
          />
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
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

  // HEADER
  header: {
    padding: SPACING.m,
    paddingTop: SPACING.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginTop: SPACING.m,
    padding: SPACING.m,
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
    justifyContent: "space-between",
    paddingHorizontal: SPACING.m,
    marginTop: SPACING.m,
  },
  subjectCard: {
    width: 100,
    alignItems: "center",
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

  // NAVIGATION BAR
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingBottom: 18,
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  navLabelActive: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: "700",
    marginTop: 2,
  },

  // CENTER BUTTON
  centerButton: {
    marginTop: -32,
  },
  flashButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#4F46E5",
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});
