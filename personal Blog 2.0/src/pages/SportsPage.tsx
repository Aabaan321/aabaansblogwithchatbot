import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import { Dumbbell, Target, Trophy, Clock, Camera } from 'lucide-react';

const SportsPage: React.FC = () => {
  const sports = [
    {
      name: "Boxing",
      description: "Boxing has taught me discipline, focus, and mental toughness. The sport requires not just physical strength but strategic thinking and quick reflexes. Every training session pushes me to my limits and helps me build character.",
      benefits: ["Improves cardiovascular health", "Builds mental toughness", "Enhances coordination", "Stress relief"]
    },
    {
      name: "Swimming",
      description: "Swimming is my go-to sport for full-body conditioning. The water provides resistance training while being gentle on joints. It's both meditative and challenging, offering a perfect balance for physical and mental wellness.",
      benefits: ["Full-body workout", "Low impact exercise", "Improves lung capacity", "Mental relaxation"]
    },
    {
      name: "basketball",
      description: "Basketball has taught me discipline, focus, and mental toughness. The sport requires not just physical strength but strategic thinking and quick reflexes. Every match pushes me to my limits and helps me build character.",
      benefits: ["Builds muscle strength", "Improves bone density", "Boosts metabolism", "Enhances mood"]
    }
  ];

  const achievements = [
    {
      title: "na",
      description: "na",
      year: "na"
    },
    {
      title: "Swimming Milestone",
      description: "Completed 1000m freestyle under 20 minutes",
      year: "2023"
    },
    {
      title: "basket ball",
      description: "Won a tornment",
      year: "2024"
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
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Sports & Fitness
          </h1>
          <p className="text-xl text-white">Building Strength, Discipline, and Character</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* About Sports Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Dumbbell className="text-red-500" />
            My Sports Journey
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Sports and fitness play a crucial role in my life, providing not just physical benefits but also mental discipline and character building. Through boxing, swimming, and regular gym training, I've learned the importance of consistency, dedication, and pushing through challenges. Each sport offers unique benefits and teaches different life lessons that I apply both in and out of the gym.
            <br /><br />
            My fitness journey started at a young age, and over the years, I've developed a deep appreciation for the transformative power of physical activity. Whether it's the strategic thinking required in boxing, the meditative flow of swimming, or the progressive overload in weight training, each activity contributes to my overall well-being and personal growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Target className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">5+ Years</h3>
              <p className="text-gray-300">Training Experience</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Trophy className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">3</h3>
              <p className="text-gray-300">Sports Practiced</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors border border-white/10">
              <Clock className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-white">6</h3>
              <p className="text-gray-300">Hours per Week</p>
            </div>
          </div>
        </section>

        {/* Sports Details Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Target className="text-red-500" />
            My Sports
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="space-y-8">
            {sports.map((sport, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-white">{sport.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{sport.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {sport.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="bg-gray-600/80 p-3 rounded-lg text-sm text-gray-300">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-red-500" />
            Achievements
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors flex justify-between items-center border border-white/10">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
                <div className="text-red-500 font-bold text-lg">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Schedule Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Clock className="text-red-500" />
            Training Schedule
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Monday & Thursday</h3>
              <p className="text-gray-300">Boxing Training</p>
              <p className="text-sm text-gray-400">6:00 PM - 7:30 PM</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Tuesday & Friday</h3>
              <p className="text-gray-300">Swimming</p>
              <p className="text-sm text-gray-400">7:00 AM - 8:00 AM</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Wednesday & Saturday</h3>
              <p className="text-gray-300">Gym Training</p>
              <p className="text-sm text-gray-400">5:30 PM - 7:00 PM</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Camera className="text-red-500" />
            Sports Gallery
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-700/80 rounded-2xl p-8 text-center hover:bg-gray-600/80 transition-colors border border-white/10">
                <div className="w-full h-32 bg-gray-600/80 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="text-gray-400" size={32} />
                </div>
                <p className="text-gray-300">Training Photo Coming Soon</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SportsPage;