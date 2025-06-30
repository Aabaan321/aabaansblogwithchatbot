import React, { useState } from 'react';
import { Plus, MessageCircle, Settings, Share2, Download, Bookmark } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: MessageCircle, label: 'Chat', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: Settings, label: 'Settings', color: 'bg-gray-500 hover:bg-gray-600' },
    { icon: Share2, label: 'Share', color: 'bg-green-500 hover:bg-green-600' },
    { icon: Download, label: 'Download CV', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: Bookmark, label: 'Bookmark', color: 'bg-yellow-500 hover:bg-yellow-600' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Action Buttons */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        {actions.map((action, index) => (
          <div
            key={action.label}
            className={`flex items-center gap-3 transition-all duration-300`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg border border-white/10">
              {action.label}
            </span>
            <button
              className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center`}
            >
              <action.icon size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default FloatingActionButton;