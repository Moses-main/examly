import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../themed-text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Subject = {
  id: string;
  name: string;
  icon: string;
};

type SubjectSelectionScreenProps = {
  onBack?: () => void;
  onContinue: () => void;
};

const SUBJECTS: Subject[] = [
  { id: '1', name: 'Physics', icon: 'science' },
  { id: '2', name: 'Chemistry', icon: 'science' },
  { id: '3', name: 'Biology', icon: 'biotech' },
  { id: '4', name: 'Mathematics', icon: 'calculate' },
  { id: '5', name: 'English Lang.', icon: 'menu-book' },
  { id: '6', name: 'Economics', icon: 'trending-up' },
  { id: '7', name: 'Government', icon: 'account-balance' },
  { id: '8', name: 'Literature', icon: 'auto-stories' },
  { id: '9', name: 'Geography', icon: 'public' },
  { id: '10', name: 'CRS / IRS', icon: 'church' },
  { id: '11', name: 'Accounting', icon: 'account-balance-wallet' },
  { id: '12', name: 'Computer Sci.', icon: 'computer' },
  { id: '13', name: 'French', icon: 'translate' },
  { id: '14', name: 'Music', icon: 'music-note' },
];

export function SubjectSelectionScreen({ onBack, onContinue }: SubjectSelectionScreenProps) {
  const [selectedSubjects, setSelectedSubjects] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = SUBJECTS.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSubject = (subjectId: string) => {
    const newSelected = new Set(selectedSubjects);
    if (newSelected.has(subjectId)) {
      newSelected.delete(subjectId);
    } else {
      newSelected.add(subjectId);
    }
    setSelectedSubjects(newSelected);
  };

  const handleContinue = () => {
    if (selectedSubjects.size > 0) {
      onContinue();
    }
  };

  const renderSubjectItem = ({ item }: { item: Subject }) => {
    const isSelected = selectedSubjects.has(item.id);
    
    return (
      <TouchableOpacity
        style={[styles.subjectCard, isSelected && styles.subjectCardSelected]}
        onPress={() => toggleSubject(item.id)}
        activeOpacity={0.7}>
        {isSelected && (
          <View style={styles.checkmarkBadge}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        )}
        <View style={styles.subjectIcon}>
          <MaterialIcons name={item.icon as any} size={32} color={isSelected ? '#0a7ea4' : '#6B7280'} />
        </View>
        <ThemedText style={[styles.subjectName, isSelected && styles.subjectNameSelected]}>
          {item.name}
        </ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        {/* Header */}
        <View style={styles.header}>
          {onBack && (
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#11181C" />
            </TouchableOpacity>
          )}
          <ThemedText type="title" style={styles.title}>Choose Subjects</ThemedText>
          <View style={styles.headerSpacer} />
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <ThemedText style={styles.instructions}>
            Select the subjects you want to practice. You can change this later.
          </ThemedText>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search subjects..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Subject Grid */}
        <FlatList
          data={filteredSubjects}
          renderItem={renderSubjectItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.subjectGrid}
          columnWrapperStyle={styles.subjectRow}
          showsVerticalScrollIndicator={true}
        />

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerInfo}>
            <ThemedText style={styles.selectedCount}>
              {selectedSubjects.size} selected
            </ThemedText>
            {selectedSubjects.size < 4 && (
              <ThemedText style={styles.recommendedText}>
                Recommended: 4+
              </ThemedText>
            )}
          </View>
            <TouchableOpacity
            style={[
              styles.continueButton,
              selectedSubjects.size === 0 && styles.continueButtonDisabled
            ]}
            onPress={handleContinue}
            disabled={selectedSubjects.size === 0}
            activeOpacity={0.7}>
            <Text style={[
              styles.continueButtonText,
              selectedSubjects.size === 0 && styles.continueButtonDisabledText
            ]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#11181C',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  instructionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  instructions: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#11181C',
  },
  subjectGrid: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  subjectRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  subjectCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  subjectCardSelected: {
    backgroundColor: '#E3F2FD',
    borderColor: '#0a7ea4',
  },
  checkmarkBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subjectIcon: {
    marginBottom: 12,
  },
  subjectName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#11181C',
    textAlign: 'center',
  },
  subjectNameSelected: {
    color: '#0a7ea4',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedCount: {
    fontSize: 14,
    color: '#11181C',
    fontWeight: '600',
  },
  recommendedText: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#9B59B6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButtonDisabledText: {
    color: '#9CA3AF',
  },
});

