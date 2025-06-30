import React, { useState } from 'react';
import { ChefHat, Dumbbell, Gamepad2, Car, Code, Camera, Plane, Brain } from 'lucide-react';

const SkillsShowcase: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    {
      icon: ChefHat,
      name: 'Culinary Arts',
      level: 90,
      description: 'Professional cooking techniques and international cuisine',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Dumbbell,
      name: 'Fitness',
      level: 69,
      description: 'Boxing, swimming, and strength training',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Gamepad2,
      name: 'Gaming',
      level: 80,
      description: 'Competitive gaming and game development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Car,
      name: 'Automotive',
      level: 88,
      description: 'Supercars and motorcycle enthusiasm',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      name: 'Programming',
      level: 85,
      description: 'Web development and software engineering',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      name: 'AI Developer',
      level: 90,
      description: 'Machine learning and artificial intelligence development',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Camera,
      name: 'Photography',
      level: 87,
      description: 'Food photography and travel documentation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Plane,
      name: 'Travel',
      level: 88,
      description: 'Cultural exploration and adventure seeking',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="relative group cursor-pointer"
          onMouseEnter={() => setActiveSkill(index)}
          onMouseLeave={() => setActiveSkill(null)}
        >
          {/* Skill Card */}
          <div className={`bg-gray-800 rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
            activeSkill === index ? 'shadow-2xl shadow-red-500/20 border-red-500/50' : ''
          }`}>
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
              <skill.icon size={24} className="text-white" />
            </div>

            {/* Skill Name */}
            <h3 className="text-white font-semibold mb-2">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{
                  width: activeSkill === index ? `${skill.level}%` : '0%'
                }}
              />
            </div>

            {/* Level */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Level</span>
              <span className="text-white font-medium">{skill.level}%</span>
            </div>
          </div>

          {/* Tooltip */}
          <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-300 ${
            activeSkill === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-white/10 shadow-xl">
              {skill.description}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsShowcase;