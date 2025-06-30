import React, { useState } from 'react';
import { Settings, X, Moon, Sun, Plus, Minus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme, accentColor, setAccentColor, textSize, setTextSize } = useTheme();

  const adjustTextSize = (increment: boolean) => {
    const newSize = increment ? Math.min(textSize + 2, 24) : Math.max(textSize - 2, 12);
    setTextSize(newSize);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-5 bottom-24 w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:rotate-45 transition-all duration-300 z-40"
      >
        <Settings size={20} />
      </button>

      <div className={`fixed right-0 top-0 h-full w-80 bg-gray-800 shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-600">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Settings size={20} />
              Settings
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-3">Theme</label>
              <button
                onClick={toggleTheme}
                className="w-full p-3 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Text Size</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => adjustTextSize(false)}
                  className="w-8 h-8 bg-gray-700 hover:bg-red-500 rounded flex items-center justify-center transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-8 text-center">{textSize}</span>
                <button
                  onClick={() => adjustTextSize(true)}
                  className="w-8 h-8 bg-gray-700 hover:bg-red-500 rounded flex items-center justify-center transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Accent Color</label>
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SettingsPanel;