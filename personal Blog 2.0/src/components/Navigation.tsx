import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Heart, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '#about', icon: User, label: 'About' },
    { path: '#passions', icon: Heart, label: 'Passions' },
    { path: '#future', icon: MapPin, label: 'Future' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 px-8 py-4">
      <div className="flex justify-center gap-8">
        {navItems.map((item) => (
          item.path.startsWith('#') ? (
            <button
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white hover:bg-red-500 hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navigation;