import { useRouter } from 'expo-router';
import { Book, BookOpen, Clock, Flame, Target } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// This would typically come from your authentication context or API
const USER_SELECTED_SUBJECTS = [
  { id: 'math', name: 'Mathematics', questionCount: 120, icon: Book },
  { id: 'english', name: 'English', questionCount: 85, icon: BookOpen },
  { id: 'physics', name: 'Physics', questionCount: 95, icon: Target },
];

export default function SubjectSelectionScreen() {
  const router = useRouter();

  const handleSubjectSelect = (subjectId: string) => {
    // Navigate to practice screen with the selected subject
    router.push({
      pathname: '/(dashboard)/practice',
    params: { subjectId },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Subject</Text>
        <Text style={styles.subtitle}>Choose a subject to start practicing</Text>
      </View>

      <View style={styles.subjectsContainer}>
        {USER_SELECTED_SUBJECTS.map((subject) => {
          const Icon = subject.icon;
          return (
            <TouchableOpacity
              key={subject.id}
              style={styles.subjectCard}
              onPress={() => handleSubjectSelect(subject.id)}
              activeOpacity={0.9}
            >
              <View style={styles.subjectIconContainer}>
                <Icon size={24} color="#4F46E5" />
              </View>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <View style={styles.metaContainer}>
                  <View style={styles.metaItem}>
                    <Clock size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{subject.questionCount} Qs</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Flame size={14} color="#F59E0B" />
                    <Text style={styles.metaText}>Daily Goal: 20</Text>
                  </View>
                </View>
              </View>
              <View style={styles.arrowContainer}>
                <View style={styles.arrow} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      
      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>💡 Complete daily goals to maintain your streak!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  subjectsContainer: {
    flex: 1,
  },
  subjectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  subjectIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },
  metaContainer: {
    flexDirection: 'row',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  arrowContainer: {
    width: 24,
    height: 24,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  arrow: {
    width: 6,
    height: 6,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#9CA3AF',
    transform: [{ rotate: '45deg' }],
  },
  tipContainer: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 'auto',
    marginBottom: 20,
  },
  tipText: {
    color: '#1E40AF',
    fontSize: 14,
    lineHeight: 20,
  },
});
