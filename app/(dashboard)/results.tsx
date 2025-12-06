import { useRouter } from 'expo-router';
import { CheckCircle, Trophy } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultsScreen() {
  const router = useRouter();
  const score = 8; // This would come from your state or context
  const totalQuestions = 10; // This would come from your state or context

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.trophyContainer}>
          <Trophy size={80} color="#F59E0B" fill="#FEF3C7" />
        </View>
        
        <Text style={styles.title}>Quiz Completed!</Text>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            {score}<Text style={styles.scoreDivider}>/</Text>{totalQuestions}
          </Text>
          <Text style={styles.scoreLabel}>Your Score</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <CheckCircle size={24} color="#10B981" />
            <Text style={styles.statText}>{score} Correct</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statText, styles.incorrectText]}>{totalQuestions - score} Incorrect</Text>
          </View>
        </View>
        
        <Text style={styles.congratsText}>
          {score >= totalQuestions * 0.8 
            ? '🎉 Excellent! You aced it!'
            : score >= totalQuestions * 0.5
            ? '👍 Good job! Keep practicing!'
            : '💪 Keep going! You\'ll get better with practice!'}
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/(dashboard)')}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.outlineButton]}
          onPress={() => router.push('/(dashboard)/practice')}
        >
          <Text style={[styles.buttonText, styles.outlineButtonText]}>Try Again</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  trophyContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 32,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  scoreText: {
    fontSize: 56,
    fontWeight: '800',
    color: '#4F46E5',
  },
  scoreDivider: {
    color: '#9CA3AF',
  },
  scoreLabel: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  statText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 8,
  },
  incorrectText: {
    color: '#EF4444',
  },
  congratsText: {
    fontSize: 18,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 28,
    marginHorizontal: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4F46E5',
  },
  outlineButtonText: {
    color: '#4F46E5',
  },
});
