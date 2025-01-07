import React from 'react';
import { AlertCircle } from 'lucide-react';
import { exampleText } from '../data/example';

const MAX_CHARS = 10000;

interface TextInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  isDark: boolean;
}

export function TextInput({ inputText, setInputText, isDark }: TextInputProps) {
  const isTextTooLong = inputText.length > MAX_CHARS;
  const charsRemaining = MAX_CHARS - inputText.length;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= MAX_CHARS) {
      setInputText(newText);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <label className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          Text to Summarize
        </label>
        <button
          onClick={() => setInputText(exampleText)}
          className={`text-sm ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'}`}
        >
          Load Example
        </button>
      </div>
      <textarea
        className={`w-full h-32 sm:h-48 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors
          ${isDark 
            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } ${isTextTooLong ? 'border-red-500' : ''}`}
        value={inputText}
        onChange={handleTextChange}
        placeholder="Paste your text here..."
      />
      <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm gap-1 sm:gap-0">
        <div className={isTextTooLong ? 'text-red-500' : (isDark ? 'text-gray-400' : 'text-gray-500')}>
          {isTextTooLong ? (
            <span className="flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Text exceeds maximum length
            </span>
          ) : (
            `Characters remaining: ${charsRemaining}`
          )}
        </div>
        <div className={isDark ? 'text-gray-400' : 'text-gray-500'}>
          Max length: {MAX_CHARS} characters
        </div>
      </div>
    </div>
  );
}