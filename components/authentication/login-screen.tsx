import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../themed-text';
import { GoogleLogo } from './google-logo';

type LoginScreenProps = {
  onSignup: () => void;
  onClose?: () => void;
  onLoginSuccess?: () => void;
};

export function LoginScreen({ onSignup, onClose, onLoginSuccess }: LoginScreenProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    if (onLoginSuccess) {
      onLoginSuccess();
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
              <ThemedText type="title" style={styles.title}>Login</ThemedText>
              {onClose && (
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Welcome Message */}
            <View style={styles.welcomeSection}>
              <ThemedText type="title" style={styles.welcomeTitle}>Welcome Back</ThemedText>
              <ThemedText style={styles.welcomeDescription}>
                Enter your phone number and password to access your offline study packs.
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
                <View style={styles.passwordHeader}>
                  <ThemedText style={styles.label}>Password</ThemedText>
                  <TouchableOpacity>
                    <ThemedText style={styles.forgotPassword}>Forgot Password?</ThemedText>
                  </TouchableOpacity>
                </View>
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
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <ThemedText style={styles.dividerText}>Or continue with</ThemedText>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Login */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.7}>
              <GoogleLogo size={20} />
              <ThemedText style={styles.googleButtonText}>Google</ThemedText>
            </TouchableOpacity>

            {/* Signup Link */}
            <View style={styles.signupPrompt}>
              <ThemedText style={styles.signupPromptText}>Don't have an account? </ThemedText>
              <TouchableOpacity onPress={onSignup}>
                <ThemedText style={styles.signupLink}>Sign Up</ThemedText>
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
    backgroundColor: '#f8fafc',
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
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  forgotPassword: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#9B59B6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
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
  signupPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupPromptText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '600',
  },
});

