import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-8">
            <a
              href="https://instagram.com/aabaanrg73"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/995595125658"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:aabaangr@gmail.com"
              className="w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-red-500" />
                aabaangr@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-red-500" />
                +995 595125658
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} className="text-red-500" />
                @aabaanrg73
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; 2024 Journey to Culinary Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;