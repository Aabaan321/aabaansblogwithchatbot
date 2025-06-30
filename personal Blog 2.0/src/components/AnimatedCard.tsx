import React, { useState } from 'react';
import { ExternalLink, Heart, Share2, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnimatedCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  onViewMore?: () => void;
  stats?: {
    views?: number;
    likes?: number;
  };
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  link,
  onViewMore,
  stats,
  className = ''
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleViewMore = () => {
    if (link) {
      navigate(link);
    } else if (onViewMore) {
      onViewMore();
    }
  };

  return (
    <div 
      className={`group relative bg-gray-800 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Removed the problematic overlay that was covering content */}
          
          {/* Floating Action Buttons */}
          <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-red-500'
              }`}
            >
              <Heart size={14} className={isLiked ? 'fill-current' : ''} />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-blue-500 flex items-center justify-center transition-all duration-300"
            >
              <Share2 size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Stats */}
        {stats && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            {stats.views && (
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{stats.views.toLocaleString()}</span>
              </div>
            )}
            {stats.likes && (
              <div className="flex items-center gap-1">
                <Heart size={14} />
                <span>{stats.likes.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleViewMore}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 relative z-20"
          >
            View More
          </button>
          {link && (
            <button
              onClick={handleViewMore}
              className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 relative z-20"
            >
              <ExternalLink size={16} className="text-white" />
            </button>
          )}
        </div>
      </div>

      {/* Simplified Border Effect - No Overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-red-500 via-pink-500 to-red-500 opacity-50" />
      </div>
    </div>
  );
};

export default AnimatedCard;