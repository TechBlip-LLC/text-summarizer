import React from 'react';
import { Wand2 } from 'lucide-react';

interface ControlsProps {
  points: number;
  setPoints: (value: number) => void;
  onSummarize: () => void;
  isProcessing: boolean;
  disabled: boolean;
  isDark: boolean;
}

export function Controls({ points, setPoints, onSummarize, isProcessing, disabled, isDark }: ControlsProps) {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <div className={`flex items-center gap-2 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-3 rounded-lg`}>
        <label className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          Key points:
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className={`w-16 p-2 text-base border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            ${isDark 
              ? 'bg-gray-600 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
            }`}
        />
      </div>

      <button
        onClick={onSummarize}
        disabled={disabled || isProcessing}
        className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg font-medium text-base transition-all duration-200
          ${disabled
            ? isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-100 text-gray-400'
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 active:scale-95'
          } cursor-${disabled ? 'not-allowed' : 'pointer'}`}
      >
        <Wand2 className={`w-5 h-5 ${isProcessing ? 'animate-spin' : ''}`} />
        {isProcessing ? 'Processing...' : 'Summarize'}
      </button>
    </div>
  );
}