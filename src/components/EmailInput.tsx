import React from 'react';
import { exampleEmail } from '../data/example';

interface EmailInputProps {
  inputText: string;
  setInputText: (text: string) => void;
}

export function EmailInput({ inputText, setInputText }: EmailInputProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email or Text Content
        </label>
        <button
          onClick={() => setInputText(exampleEmail)}
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          Load Example Email
        </button>
      </div>
      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your email or text here..."
      />
    </div>
  );
}