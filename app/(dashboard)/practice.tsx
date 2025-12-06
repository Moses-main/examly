import { useLocalSearchParams } from 'expo-router';
import SubjectSelectionScreen from '@/components/practice/subject-selection-screen';
import PracticeScreen from '@/components/practice/practice-screen';

export default function PracticeScreenWrapper() {
  const { subjectId } = useLocalSearchParams<{ subjectId?: string }>();

  // If no subject is selected, show the subject selection screen
  if (!subjectId) {
    return <SubjectSelectionScreen />;
  }

  // Otherwise, show the practice screen with the selected subject
  return <PracticeScreen subjectId={subjectId} />;
}
