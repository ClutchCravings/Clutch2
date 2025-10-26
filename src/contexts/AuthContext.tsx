import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, TwitchUser } from '@/types/twitch';

interface AuthContextType extends AuthState {
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    accessToken: null,
  });

  useEffect(() => {
    // Check for existing auth token in localStorage
    const token = localStorage.getItem('twitch_access_token');
    const userData = localStorage.getItem('twitch_user_data');
    
    if (token && userData) {
      setAuthState({
        isAuthenticated: true,
        user: JSON.parse(userData),
        accessToken: token,
      });
    }
  }, []);

  const login = () => {
    // For demo purposes, simulate Twitch login
    const mockUser: TwitchUser = {
      id: '123456789',
      login: 'demo_user',
      display_name: 'Demo User',
      profile_image_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
    };
    
    const mockToken = 'demo_access_token_' + Date.now();
    
    localStorage.setItem('twitch_access_token', mockToken);
    localStorage.setItem('twitch_user_data', JSON.stringify(mockUser));
    
    setAuthState({
      isAuthenticated: true,
      user: mockUser,
      accessToken: mockToken,
    });
  };

  const logout = () => {
    localStorage.removeItem('twitch_access_token');
    localStorage.removeItem('twitch_user_data');
    
    setAuthState({
      isAuthenticated: false,
      user: null,
      accessToken: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};