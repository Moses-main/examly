import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'expo-router';

type AuthContextType = {
  isAuthenticated: boolean;
  selectedSubjects: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  completeSubjectSelection: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check auth state on mount
  React.useEffect(() => {
    // Simulate checking auth state
    const checkAuth = async () => {
      try {
        // Here you would check your auth state (e.g., from AsyncStorage, API, etc.)
        // For now, we'll simulate a check
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsAuthenticated(false);
      setSelectedSubjects(false);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const completeSubjectSelection = () => {
    setSelectedSubjects(true);
    // Navigate to dashboard after subject selection
    router.replace('/(dashboard)');
  };

  const value = React.useMemo(() => ({
    isAuthenticated,
    selectedSubjects,
    isLoading,
    login,
    logout,
    completeSubjectSelection,
  }), [isAuthenticated, selectedSubjects, isLoading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
