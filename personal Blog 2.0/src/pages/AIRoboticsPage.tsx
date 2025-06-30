import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import { Brain, Bot, Zap, Target, Trophy, Calendar, ExternalLink, Play } from 'lucide-react';

const AIRoboticsPage: React.FC = () => {
  const projects = [
    {
      title: "Human-Like Speaking AI",
      description: "A real-time voice-based AI that speaks like a human — capable of understanding context, tone, and delivering responses with natural clarity. It simulates realistic conversations using advanced text-to-speech and language models.",
      isHighlight: true,
      ctaText: "Try It on NeuroforgAI",
      ctaLink: "https://neuroforgai.online"
    },
    {
      title: "Chat AI Assistant",
      description: "A versatile conversational AI chatbot trained to handle user queries, provide support, and assist with tasks across platforms. Deployed for web use and optimized for multiple domains.",
      ctaText: "See It in Action",
      ctaLink: "https://neuroforgai.online"
    },
    {
      title: "AI Image Generator",
      description: "A generative AI that creates stunning images based on user prompts. Designed for artists, designers, and storytellers looking to visualize ideas quickly and beautifully.",
      ctaText: "Generate Now",
      ctaLink: "https://neuroforgai.online"
    },
    {
      title: "Image Analyzer AI",
      description: "An advanced AI system capable of analyzing and interpreting visual data — identifying objects, extracting text, recognizing emotions, and more.",
      ctaText: "Analyze an Image",
      ctaLink: "https://neuroforgai.online"
    },
    {
      title: "Robotics Development",
      description: "Currently building a custom robot powered by AI to perform real-world tasks. The foundation includes motion sensors, decision-making capabilities, and interactive controls.",
      isInProgress: true,
      ctaText: "Follow the Journey",
      ctaLink: "https://neuroforgai.online"
    }
  ];

  const interests = [
    {
      title: "Conversational AI",
      description: "Crafting intelligent voice-based agents that sound truly human, capable of holding dynamic, emotionally intelligent conversations.",
      stats: "Deployed 2 Voice AIs, 1000+ Live Interactions",
      icon: Brain
    },
    {
      title: "Generative AI",
      description: "Exploring text-to-image and text-to-video technologies using diffusion and transformer models.",
      stats: "200+ Images Generated, 5 Models Tested",
      icon: Zap
    },
    {
      title: "Automation & Agents",
      description: "Creating intelligent systems that automate tasks — from Telegram bots to workflow tools and smart assistants.",
      stats: "10+ Automations Built, Used in Real Workflows",
      icon: Target
    },
    {
      title: "Robotics & Embedded AI",
      description: "Combining mechanical systems with AI brains — an early journey into building robots that learn and adapt.",
      stats: "1 Prototype in Development, Science Fair Winner",
      icon: Bot
    }
  ];

  const milestones = [
    "🏆 1st Place – Local Science Fair for Human-like AI",
    "🌐 Launched NeuroforgAI – My dedicated AI platform",
    "🤖 Spoken AI Prototype – Recognized by peers for realism",
    "🔧 Built 10+ AI Tools – Integrated into real-world projects"
  ];

  const timeline = [
    {
      year: "2024",
      event: "Launched my AI development journey; built my first automation."
    },
    {
      year: "2025",
      event: "Created speaking AI and image systems; won a local science fair."
    },
    {
      year: "2026",
      event: "Planning to join a university course in AI & Robotics to deepen my expertise and gain academic credentials."
    },
    {
      year: "Future",
      event: "Expanding into robotics; preparing to scale NeuroforgAI into a complete AI innovation hub."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <SettingsPanel />
      <ChatBot />

      {/* Hero Section */}
      <div
        className="h-96 flex items-center justify-center text-center relative pt-20"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to My AI & Robotics World
          </h1>
          <p className="text-xl mb-4 text-white">From Talking AIs to Robotics – Shaping the Future with Code</p>
          <div className="flex justify-center gap-6 text-red-500">
            <Brain size={32} />
            <Bot size={32} />
            <Zap size={32} />
            <Target size={32} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Projects Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Bot className="text-red-500" />
            What I've Built
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gray-700/80 rounded-2xl p-6 hover:-translate-y-3 transition-transform duration-300 border border-white/10 ${
                project.isHighlight ? 'border-2 border-red-500 bg-gradient-to-br from-red-500/10 to-pink-500/10' : ''
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.isHighlight && <span className="bg-red-500 text-xs px-2 py-1 rounded text-white">Highlight</span>}
                  {project.isInProgress && <span className="bg-yellow-500 text-xs px-2 py-1 rounded text-black">In Progress</span>}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
                <a
                  href={project.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors text-white font-medium"
                >
                  {project.ctaText}
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Fascination */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Brain className="text-red-500" />
            My Core Interests
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="bg-gray-700/80 rounded-2xl p-6 hover:bg-gray-600/80 transition-colors border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <interest.icon className="text-red-500" size={32} />
                  <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{interest.description}</p>
                <div className="bg-gray-600/80 p-3 rounded-lg">
                  <p className="text-sm text-gray-300 font-medium">Stats: {interest.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones & Achievements */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-red-500" />
            Highlights of My Journey
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors flex items-center gap-4 border border-white/10">
                <div className="text-3xl">{milestone.split(' ')[0]}</div>
                <div className="text-gray-300">{milestone.substring(milestone.indexOf(' ') + 1)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="text-red-500" />
            The Path I'm On
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors relative border border-white/10">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="flex items-center gap-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">{item.year}</span>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIRoboticsPage;