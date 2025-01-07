import React from 'react';
import { FileText, Copy, Check } from 'lucide-react';

interface SummaryOutputProps {
  summary: string;
  isDark: boolean;
}

export function SummaryOutput({ summary, isDark }: SummaryOutputProps) {
  const [copied, setCopied] = React.useState(false);
  const points = summary.split('. ').filter(Boolean).map(point => point.trim());

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className={`p-2 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'} rounded-lg`}>
            <FileText className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
          </div>
          <h2 className={`text-lg sm:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Key Points
          </h2>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${
            isDark ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'
          } transition-colors`}
        >
          {copied ? (
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
          ) : (
            <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3 sm:gap-4">
            <span className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full 
              ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} 
              text-xs sm:text-sm font-medium`}
            >
              {index + 1}
            </span>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}