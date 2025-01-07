import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return {
    isDark,
    toggleTheme: () => setIsDark(prev => !prev)
  };
}