import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { summarizeText } from './utils/summarizer';
import { TextInput } from './components/TextInput';
import { Controls } from './components/Controls';
import { SummaryOutput } from './components/SummaryOutput';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [points, setPoints] = useState(3);
  const [isProcessing, setIsProcessing] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleSummarize = () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    setTimeout(() => {
      const result = summarizeText(inputText, points);
      setSummary(result);
      setIsProcessing(false);
    }, 500);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 flex flex-col
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}>
      <div className="flex-grow max-w-[95%] sm:max-w-4xl mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
        <header className={`${isDark ? 'bg-white/5' : 'bg-white/50'} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-white/20`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`p-2 sm:p-3 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'} rounded-lg`}>
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  Text Summarizer
                </h1>
                <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Extract the key points from any text
                </p>
              </div>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </header>

        <main className="space-y-4 sm:space-y-6">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-white/10`}>
            <TextInput inputText={inputText} setInputText={setInputText} isDark={isDark} />
            <Controls 
              points={points}
              setPoints={setPoints}
              onSummarize={handleSummarize}
              isProcessing={isProcessing}
              disabled={!inputText.trim()}
              isDark={isDark}
            />
          </div>

          {summary && (
            <div className="animate-fade-in">
              <SummaryOutput summary={summary} isDark={isDark} />
            </div>
          )}
        </main>
      </div>
      
      <footer className={`text-center py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Copyright © 2025 Ed Bates (TECHBLIP LLC)<br />
        This software is released under the Apache-2.0 License. See the LICENSE file for details
      </footer>
    </div>
  );
}