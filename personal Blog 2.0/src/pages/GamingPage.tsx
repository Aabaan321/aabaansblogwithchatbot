import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import { Gamepad2, Trophy, Video, Monitor, Cpu, Headphones, Star, Crown, Medal } from 'lucide-react';

const GamingPage: React.FC = () => {
  const myGames = [
    { title: "Game 1", link: "https://aabaan321.github.io/games/" },
    { title: "Game 2", link: "https://aabaan321.github.io/game2/" },
    { title: "Game 3", link: "https://aabaan321.github.io/game3/", recommended: true },
    { title: "Game 4", link: "https://aabaan321.github.io/game4/" }
  ];

  const favoriteGames = [
    {
      title: "God of War Ragnarök",
      image: "https://gpstatic.com/acache/69/62/2/uk/t620x300-94aa5845998c95755f19d5a96b5c5846.jpg",
      description: "God of War: Ragnarök is an action-adventure game and the sequel to God of War (2018). Developed by Santa Monica Studio, it continues the journey of Kratos and his son Atreus as they navigate the prophecy of Ragnarök—the end of the Norse world.",
      hours: "103 hours",
      achievement: "100% complete"
    },
    {
      title: "Call of Duty",
      image: "https://cdn.fastly.steamstatic.com/steam/apps/42700/header.jpg",
      description: "Call of Duty is a legendary first-person shooter franchise known for its intense gameplay, cinematic storytelling, and multiplayer action.",
      hours: "350+ hours",
      achievement: "Division 1"
    },
    {
      title: "The Witcher 3",
      image: "https://i0.wp.com/nodekeys.com/wp-content/uploads/2023/01/wtch.png?fit=871%2C872&ssl=1",
      description: "The Witcher 3: Wild Hunt is an open-world action RPG developed by CD Projekt Red, based on the fantasy novels by Andrzej Sapkowski.",
      hours: "300+ hours",
      achievement: "100+ Wins"
    }
  ];

  const achievements = [
    {
      icon: Crown,
      title: "Tournament Victory",
      description: "First place in call of duty tournament"
    },
    {
      icon: Medal,
      title: "Platinum Trophy",
      description: "100% god of war"
    },
    {
      icon: Star,
      title: "Global Ranking",
      description: "Top 25% in Warzone players"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <SettingsPanel />
      <ChatBot />

      {/* Hero Section */}
      <div
        className="h-96 flex items-center justify-center text-center relative overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Gaming Universe
          </h1>
          <p className="text-xl mb-6 text-white">Adventures in Virtual Worlds</p>
          <div className="flex justify-center gap-6 text-red-500">
            <Gamepad2 size={32} />
            <Monitor size={32} />
            <Headphones size={32} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* My Games Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Gamepad2 className="text-red-500" />
            My Games
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {myGames.map((game, index) => (
              <div key={index} className={`bg-gray-700/80 p-6 rounded-2xl hover:-translate-y-3 transition-transform duration-300 border border-white/10 ${game.recommended ? 'border-2 border-red-500' : ''}`}>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {game.title}
                  {game.recommended && <span className="ml-2 bg-red-500 text-xs px-2 py-1 rounded">Recommended</span>}
                </h3>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg inline-block transition-colors text-white font-medium"
                >
                  Play Game
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Favorite Games Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Star className="text-red-500" />
            Favorite Games
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteGames.map((game, index) => (
              <div key={index} className="bg-gray-700/80 rounded-2xl overflow-hidden hover:-translate-y-3 transition-transform duration-300 border border-white/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{game.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Trophy size={14} />
                      {game.hours}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {game.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gaming Setup Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Monitor className="text-red-500" />
            Gaming Setup
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Cpu className="text-red-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">PC Specs</h3>
              <div className="space-y-2 text-gray-300">
                <p>RTX 3080</p>
                <p>Ryzen 9 5900X</p>
                <p>32GB RAM</p>
                <p>1TB NVMe SSD</p>
                <p>2TB HDD</p>
                <p>NZXT Kraken Z73 AIO</p>
              </div>
            </div>
            
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Monitor className="text-red-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">Display</h3>
              <div className="space-y-2 text-gray-300">
                <p>27" 4K Monitor</p>
                <p>144Hz Refresh Rate</p>
                <p>IPS Panel</p>
                <p>HDR Support</p>
              </div>
            </div>
            
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Headphones className="text-red-500 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">Peripherals</h3>
              <div className="space-y-2 text-gray-300">
                <p>Mechanical Keyboard</p>
                <p>Wireless Gaming Mouse</p>
                <p>SteelSeries Arctis Pro</p>
                <p>Logitech G Pro X</p>
                <p>Shure SM7B Microphone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-red-500" />
            Gaming Achievements
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl flex items-center gap-4 hover:bg-gray-600/80 transition-colors border border-white/10">
                <achievement.icon className="text-red-500" size={32} />
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Streaming Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Video className="text-red-500" />
            Streaming Channel
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Stream Schedule</h3>
              <ul className="space-y-2 text-gray-300">
                <li>In the future</li>
                <li>In the future</li>
                <li>In the future</li>
                <li>In the future</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="space-y-3">
                <a href="https://www.instagram.com/aabaanrg73" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  Instagram
                </a>
                <a href="https://wa.me/995595125658" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  WhatsApp
                </a>
                <a href="mailto:aabaangr@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GamingPage;