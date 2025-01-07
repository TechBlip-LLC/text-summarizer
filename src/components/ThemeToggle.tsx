import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
      )}
    </button>
  );
}