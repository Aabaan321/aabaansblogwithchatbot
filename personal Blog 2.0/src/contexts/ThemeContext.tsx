import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  textSize: number;
  setTextSize: (size: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [accentColor, setAccentColor] = useState('#ff3e3e');
  const [textSize, setTextSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.fontSize = `${textSize}px`;
  }, [accentColor, textSize]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme,
      accentColor,
      setAccentColor,
      textSize,
      setTextSize
    }}>
      {children}
    </ThemeContext.Provider>
  );
};