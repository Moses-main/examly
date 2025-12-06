import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, CheckCircle, Clock, X } from 'lucide-react-native';
import React, { useState, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';

const { width } = Dimensions.get('window');

// Sample questions data structure organized by subject
const QUESTIONS_BY_SUBJECT = {
  math: [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: 'What is the square root of 64?',
      options: ['4', '6', '8', '10'],
      correctAnswer: '8',
    },
  ],
  english: [
    {
      id: 1,
      question: 'Which word is a noun?',
      options: ['Run', 'Beautiful', 'Quickly', 'House'],
      correctAnswer: 'House',
    },
  ],
  physics: [
    {
      id: 1,
      question: 'What is the unit of force?',
      options: ['Watt', 'Joule', 'Newton', 'Pascal'],
      correctAnswer: 'Newton',
    },
  ],
};

type PracticeScreenProps = {
  subjectId: string;
};

export default function PracticeScreen({ subjectId }: PracticeScreenProps) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [questions, setQuestions] = useState(QUESTIONS_BY_SUBJECT[subjectId as keyof typeof QUESTIONS_BY_SUBJECT] || []);
  
  // Reset question state when subject changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(60);
    setQuestions(QUESTIONS_BY_SUBJECT[subjectId as keyof typeof QUESTIONS_BY_SUBJECT] || []);
  }, [subjectId]);
  
  // Handle case when no questions are available for the subject
  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No questions available for this subject.</Text>
        <Button 
          title="Back to Subjects" 
          onPress={() => router.back()} 
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowResult(true);
    
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        // Quiz completed
        // You can navigate to a results screen here
      }
    }, 1500);
  };

  const isOptionCorrect = (option: string) => {
    return showResult && option === currentQuestion.correctAnswer;
  };

  const isOptionIncorrect = (option: string) => {
    return showResult && option === selectedOption && option !== currentQuestion.correctAnswer;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#fff" />
        </Pressable>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Practice</Text>
          <View style={styles.timerContainer}>
            <Clock size={16} color="#fff" />
            <Text style={styles.timerText}>{timeLeft}s</Text>
          </View>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} />
        <Text style={styles.questionCount}>
          {currentQuestionIndex + 1}/{questions.length}
        </Text>
      </View>

      {/* Question Card */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  isOptionCorrect(option) && styles.correctOption,
                  isOptionIncorrect(option) && styles.incorrectOption,
                ]}
                onPress={() => !showResult && handleOptionSelect(option)}
                disabled={showResult}
              >
                <Text style={[
                  styles.optionText,
                  (isOptionCorrect(option) || isOptionIncorrect(option)) && styles.optionTextSelected
                ]}>
                  {option}
                </Text>
                {isOptionCorrect(option) && (
                  <CheckCircle size={20} color="#10B981" style={styles.optionIcon} />
                )}
                {isOptionIncorrect(option) && (
                  <X size={20} color="#EF4444" style={styles.optionIcon} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Explanation (shown after answer) */}
        {showResult && (
          <View style={styles.explanationCard}>
            <Text style={styles.explanationTitle}>
              {selectedOption === currentQuestion.correctAnswer ? 'Correct! 🎉' : 'Incorrect'}
            </Text>
            <Text style={styles.explanationText}>
              The correct answer is: {currentQuestion.correctAnswer}
            </Text>
            <Text style={styles.explanationSubtext}>
              {selectedOption === currentQuestion.correctAnswer 
                ? 'Great job! You got it right.' 
                : 'Better luck on the next one!'}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Next Button */}
      <View style={styles.footer}>
        <Button
          title={currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
          onPress={() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setSelectedOption(null);
              setShowResult(false);
            } else {
              // Navigate to results screen
              // Navigate to results screen
              router.push('/(dashboard)/results');
            }
          }}
          disabled={!showResult}
          style={[styles.nextButton, !showResult && styles.nextButtonDisabled]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  timerText: {
    color: '#FFFFFF',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  progressContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  questionCount: {
    textAlign: 'right',
    color: '#6B7280',
    fontSize: 12,
    marginTop: 4,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 24,
    lineHeight: 26,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },
  optionTextSelected: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  optionIcon: {
    marginLeft: 8,
  },
  correctOption: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  incorrectOption: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  explanationCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 4,
  },
  explanationSubtext: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
    marginTop: 4,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  nextButton: {
    width: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
