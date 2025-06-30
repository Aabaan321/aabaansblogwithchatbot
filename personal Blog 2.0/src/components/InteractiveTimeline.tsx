import React, { useState } from 'react';
import { Calendar, MapPin, Award, Star, Brain, ChefHat, Code, Plane } from 'lucide-react';

const InteractiveTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: '2025',
      title: 'AI & Robotics + Culinary Foundation',
      description: 'Built human-like speaking AI and launched image tools',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      details: [
        '🔹 AI & Robotics: Built human-like speaking AI and launched image tools',
        '🔹 Won 1st place in local science fair for spoken AI',
        '🔹 Launched NeuroforgAI, my dedicated AI platform',
        '🔸 Culinary & Lifestyle: Attended food workshops and explored global street food',
        '🔸 Traveled to Bangkok and Paris for culinary inspiration'
      ],
      location: 'Global Journey Begins'
    },
    {
      year: '2026',
      title: 'University & Continued Development',
      description: 'Started 4-year AI & Robotics course and continued culinary exploration',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      details: [
        '🔹 AI & Robotics: Officially started a 4-year university course in AI & Robotics',
        '🔹 Continued developing robotics and automation prototypes',
        '🔹 Built and deployed custom agents and tools',
        '🔸 Culinary & Lifestyle: Continued food experiments as a hobby',
        '🔸 Focused on documenting food & travel experiences through blogs'
      ],
      location: 'University Campus'
    },
    {
      year: '2027',
      title: 'Academic Research & Culinary Refinement',
      description: 'Advanced AI research projects and refined culinary skills',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      details: [
        '🔹 AI & Robotics: Worked on academic AI research projects',
        '🔹 Deployed live AI assistants for real-world use',
        '🔹 Engaged in robotics team collaboration at university',
        '🔸 Culinary & Lifestyle: Refined food photography and recipe journaling',
        '🔸 Contributed to a culinary + tech blog'
      ],
      location: 'Research Labs & Kitchen Studios'
    },
    {
      year: '2028',
      title: 'National Recognition & Global Culinary Planning',
      description: 'Showcased robotics projects and planned culinary education',
      icon: MapPin,
      color: 'from-red-500 to-orange-500',
      details: [
        '🔹 AI & Robotics: Showcased robotics project in a national-level exhibition',
        '🔹 Participated in AI and Robotics competitions and hackathons',
        '🔸 Culinary & Lifestyle: Created food vlogs during global travels',
        '🔸 Started planning for future culinary education'
      ],
      location: 'National Exhibitions & Global Travels'
    },
    {
      year: '2029',
      title: 'Smart Automation & International Cuisine',
      description: 'AI-driven smart home systems and international dish testing',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      details: [
        '🔹 AI & Robotics: Focused on AI-driven smart home assistants and automation tools',
        '🔹 Interned with a robotics/AI company',
        '🔸 Culinary & Lifestyle: Tested international dishes inspired by travel',
        '🔸 Developed a unique fusion cooking style'
      ],
      location: 'Tech Companies & Global Kitchens'
    },
    {
      year: '2030',
      title: 'Final University Project & Culinary Preparation',
      description: 'AI-powered robotic arm project and culinary school prep',
      icon: Brain,
      color: 'from-teal-500 to-blue-500',
      details: [
        '🔹 AI & Robotics: Final year of university project: AI-powered robotic arm',
        '🔹 Built NeuroforgAI 2.0 with community support features',
        '🔸 Culinary & Lifestyle: Shared food experiences in tech-culinary crossovers',
        '🔸 Prepared for culinary school applications'
      ],
      location: 'University Labs & Culinary Prep Centers'
    },
    {
      year: '2031',
      title: 'Graduation & Culinary School Start',
      description: 'AI & Robotics degree completion and formal culinary training begins',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      details: [
        '🔹 AI & Robotics: Graduated with a degree in AI & Robotics 🎓',
        '🔹 Began mentoring junior students and contributing to open-source AI',
        '🔸 Culinary & Lifestyle: Started Culinary School (France or internationally)',
        '🔸 Immersed in formal culinary training and kitchen practice'
      ],
      location: 'University & Culinary School France'
    },
    {
      year: '2032',
      title: 'Advanced AI Systems & Professional Cooking',
      description: 'Human-AI collaboration systems and professional chef training',
      icon: ChefHat,
      color: 'from-pink-500 to-red-500',
      details: [
        '🔹 AI & Robotics: Continued developing advanced personal AI agents',
        '🔹 Focused on Human-AI collaboration systems',
        '🔸 Culinary & Lifestyle: Interned with top chefs and refined professional cooking skills',
        '🔸 Documented culinary school life in vlogs & blog posts'
      ],
      location: 'AI Labs & Michelin-starred Kitchens'
    },
    {
      year: '2033',
      title: 'Smart Kitchen Innovation & Festival Participation',
      description: 'AI-powered kitchen assistant and global food festivals',
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      details: [
        '🔹 AI & Robotics: Released smart kitchen assistant combining both passions',
        '🔹 Published an article on the intersection of food & AI',
        '🔸 Culinary & Lifestyle: Started designing my restaurant concept',
        '🔸 Participated in global food festivals'
      ],
      location: 'Innovation Centers & Global Food Festivals'
    },
    {
      year: '2034',
      title: 'Conference Speaking & Restaurant Planning',
      description: 'AI conference presentations and restaurant development',
      icon: Star,
      color: 'from-emerald-500 to-teal-500',
      details: [
        '🔹 AI & Robotics: Guest speaker at AI conferences sharing real-life use cases',
        '🔹 NeuroforgAI hits milestone: 50,000+ users',
        '🔸 Culinary & Lifestyle: Finalized restaurant plan and branding',
        '🔸 Menu design and location selection underway'
      ],
      location: 'Global AI Conferences & Restaurant Locations'
    },
    {
      year: '2035',
      title: 'Industry Integration & Restaurant Launch',
      description: 'AI tools in creative industries and grand restaurant opening',
      icon: Plane,
      color: 'from-orange-500 to-red-500',
      details: [
        '🔹 AI & Robotics: AI tools integrated into smart homes and creative industries',
        '🔹 Supporting new AI developers as a mentor and creator',
        '🔸 Culinary & Lifestyle: Grand Opening of my restaurant 🎉',
        '🔸 Bringing food, AI, and experience design together'
      ],
      location: 'Global Tech Integration & My Restaurant'
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-pink-500 to-red-500" />

      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className="relative flex items-start gap-6 group cursor-pointer"
            onClick={() => setActiveEvent(activeEvent === index ? null : index)}
          >
            {/* Timeline Dot */}
            <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
              <event.icon size={24} className="text-white" />
              
              {/* Pulse Animation */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} animate-ping opacity-20`} />
            </div>

            {/* Content Card */}
            <div className={`flex-1 bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
              activeEvent === index ? 'shadow-2xl shadow-red-500/20 border-red-500/50' : ''
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${event.color} text-white`}>
                  {event.year}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{event.description}</p>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-500 ${
                activeEvent === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="space-y-2 mb-4">
                    {event.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Expand Indicator */}
              <div className="flex justify-center mt-4">
                <div className={`w-6 h-1 bg-gradient-to-r ${event.color} rounded-full transition-all duration-300 ${
                  activeEvent === index ? 'rotate-180' : ''
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;