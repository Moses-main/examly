import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../themed-text';
import { GoogleLogo } from './google-logo';

type SignupScreenProps = {
  onLogin: () => void;
  onClose?: () => void;
  onSignupSuccess?: () => void;
};

export function SignupScreen({ onLogin, onClose, onSignupSuccess }: SignupScreenProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    // Handle signup logic here
    if (onSignupSuccess) {
      onSignupSuccess();
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}>
          <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
              <ThemedText type="title" style={styles.title}>Signup</ThemedText>
              {onClose && (
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Create Account Message */}
            <View style={styles.welcomeSection}>
              <ThemedText type="title" style={styles.welcomeTitle}>Create Account</ThemedText>
              <ThemedText style={styles.welcomeDescription}>
                Join thousands of students acing their exams with AI-powered practice.
              </ThemedText>
            </View>

            {/* Input Fields */}
            <View style={styles.inputSection}>
              <View style={styles.inputGroup}>
                <ThemedText style={styles.label}>Email or Phone Number</ThemedText>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email or phone number"
                  placeholderTextColor="#9CA3AF"
                  value={emailOrPhone}
                  onChangeText={setEmailOrPhone}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputGroup}>
                <ThemedText style={styles.label}>Create Password</ThemedText>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <ThemedText style={styles.showPasswordText}>
                      {showPassword ? 'Hide' : 'Show'}
                    </ThemedText>
                  </TouchableOpacity>
                </View>
                <ThemedText style={styles.passwordHint}>
                  Must be at least 6 characters
                </ThemedText>
              </View>
            </View>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <ThemedText style={styles.dividerText}>Or sign up with</ThemedText>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Signup */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.7}>
              <GoogleLogo size={20} />
              <ThemedText style={styles.googleButtonText}>Google</ThemedText>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginPrompt}>
              <ThemedText style={styles.loginPromptText}>Already have an account? </ThemedText>
              <TouchableOpacity onPress={onLogin}>
                <ThemedText style={styles.loginLink}>Log In</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 0,
    paddingBottom: 40,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#11181C',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#6B7280',
    fontWeight: '600',
  },
  welcomeSection: {
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#11181C',
    marginBottom: 8,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  inputSection: {
    marginBottom: 24,
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#11181C',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#11181C',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#11181C',
  },
  showPasswordText: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '600',
  },
  passwordHint: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  signupButton: {
    backgroundColor: '#9B59B6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
    gap: 12,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#11181C',
    fontWeight: '500',
  },
  loginPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPromptText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginLink: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '600',
  },
});

