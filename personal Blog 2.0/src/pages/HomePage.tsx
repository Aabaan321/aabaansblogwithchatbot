import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import AnimatedCard from '../components/AnimatedCard';
import SkillsShowcase from '../components/SkillsShowcase';
import InteractiveTimeline from '../components/InteractiveTimeline';
import FloatingActionButton from '../components/FloatingActionButton';
import { User, Heart, MapPin, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const passions = [
    {
      title: "Culinary Arts",
      description: "Exploring flavors and creating memorable dining experiences through innovative cooking techniques and international cuisine mastery.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/culinary",
      stats: { views: 1250, likes: 89 }
    },
    {
      title: "AI & Robotics",
      description: "From talking AIs to robotics – shaping the future with code. Building conversational AI, generative models, and intelligent automation systems.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/ai-robotics",
      stats: { views: 2600, likes: 245 }
    },
    {
      title: "Sports & Fitness",
      description: "Boxing and swimming to stay fit and focused, building discipline and mental toughness through rigorous training.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/sports",
      stats: { views: 980, likes: 67 }
    },
    {
      title: "Gaming Universe",
      description: "Enjoying virtual adventures and competitive gaming across multiple platforms and genres.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/gaming",
      stats: { views: 2100, likes: 156 }
    },
    {
      title: "Automotive Passion",
      description: "Passionate about supercars and motorcycles, exploring the engineering marvels of modern automotive design.",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/automotive",
      stats: { views: 1800, likes: 134 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,62,62,0.3),transparent_50%)]" />
      
      <div className="relative z-10">
        <Navigation />
        <SettingsPanel />
        <ChatBot />
        <FloatingActionButton />

        {/* Hero Section */}
        <header
          id="home"
          className="h-screen flex items-center justify-center text-center px-4 relative"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-4xl p-8 bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-red-500 animate-pulse" size={32} />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                Aabaan's Personal Blog
              </h1>
              <Sparkles className="text-red-500 animate-pulse" size={32} />
            </div>
            <p className="text-xl mb-4">
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aspiring Chef | AI Developer | Traveler | Adventure Seeker
              </span>
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-8">
          {/* About Section */}
          <section id="about" className="py-16 bg-gray-800/90 backdrop-blur-md rounded-3xl my-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-2xl">
            <div className="px-8">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <User className="text-red-500" />
                About Me
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-4"></div>
              </h2>
              
              <div className="flex flex-col lg:flex-row gap-10 items-start bg-gray-700/80 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl relative group">
                  <img
                    src="/aabaan1 (1) copy.jpg"
                    alt="Aabaan's Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-full"></div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Welcome to my world! I'm Aabaan, an aspiring chef with an unwavering passion for culinary arts. From an early age, I've been fascinated by the power of food to bring people together, evoke memories, and create experiences. Cooking isn't just about recipes for me – it's about creativity, innovation, and constantly pushing myself to experiment with new ingredients and techniques.
                    <br /><br />
                    I dream of attending culinary school to hone my skills, eventually opening my own restaurant where I can share my love for food with the world. When I'm not in the kitchen, you'll likely find me staying active. Whether it's boxing, swimming, or training in the gym, I believe fitness is key to maintaining a balanced and healthy lifestyle.
                    <br /><br />
                    But what truly fuels my soul is travel. Every destination I visit becomes an adventure in itself, not only through discovering new cultures but through tasting and learning about the local cuisines. From the bustling streets of Bangkok with their vibrant street food to the elegance of Parisian fine dining, each trip adds a new layer to my culinary journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Showcase */}
          <section className="py-16 bg-gray-800/90 backdrop-blur-md rounded-3xl my-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-2xl">
            <div className="px-8">
              <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                <Sparkles className="text-red-500" />
                Skills & Expertise
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-4"></div>
              </h2>
              <SkillsShowcase />
            </div>
          </section>

          {/* Passions Section */}
          <section id="passions" className="py-16 bg-gray-800/90 backdrop-blur-md rounded-3xl my-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-2xl">
            <div className="px-8">
              <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                <Heart className="text-red-500" />
                My Passions
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-4"></div>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {passions.map((passion, index) => (
                  <AnimatedCard
                    key={passion.title}
                    title={passion.title}
                    description={passion.description}
                    image={passion.image}
                    link={passion.link}
                    stats={passion.stats}
                    className="h-full"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Future Plans Section */}
          <section id="future" className="py-16 bg-gray-800/90 backdrop-blur-md rounded-3xl my-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10 shadow-2xl">
            <div className="px-8">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <MapPin className="text-red-500" />
                Future Plans & Timeline
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-4"></div>
              </h2>
              
              <InteractiveTimeline />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;