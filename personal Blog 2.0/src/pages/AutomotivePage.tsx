import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import { Car, Bike, Flag, Camera, Gauge, Clock, Zap, Wine as Engine } from 'lucide-react';

const AutomotivePage: React.FC = () => {
  const supercars = [
    {
      name: "Lamborghini Aventador SVJ",
      image: "https://dmc.ag/wp-content/uploads/2019/07/CSM_3881-scaled.jpg",
      specs: [
        { icon: Gauge, label: "770 HP" },
        { icon: Clock, label: "0-60: 2.8s" },
        { icon: Gauge, label: "217 mph" },
        { icon: Engine, label: "V12 Engine" }
      ]
    },
    {
      name: "Ferrari SF90 Stradale",
      image: "https://www.motortrend.com/uploads/2023/11/014-2024-ferrari-sf90-xx-stradale.jpg",
      specs: [
        { icon: Gauge, label: "986 HP" },
        { icon: Clock, label: "0-60: 2.5s" },
        { icon: Gauge, label: "211 mph" },
        { icon: Zap, label: "Hybrid" }
      ]
    }
  ];

  const motorcycles = [
    {
      name: "Ducati Panigale V4",
      image: "https://preview.redd.it/new-2025-panigale-v4-s-v0-fffqq4z46qed1.jpeg?width=1080&crop=smart&auto=webp&s=5ef19cd9a47193a50ee89bf3da1f787cc5ba9311",
      specs: [
        { icon: Gauge, label: "214 HP" },
        { icon: Gauge, label: "175 kg" },
        { icon: Gauge, label: "186 mph" }
      ]
    },
    {
      name: "Kawasaki Ninja H2R",
      image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/95229/left-side-view.jpeg?q=100",
      specs: [
        { icon: Gauge, label: "310 HP" },
        { icon: Gauge, label: "216 kg" },
        { icon: Gauge, label: "240 mph" }
      ]
    }
  ];

  const events = [
    {
      title: "Monaco Grand Prix",
      description: "Dream event to witness the pinnacle of motorsport"
    },
    {
      title: "Goodwood Festival of Speed",
      description: "Annual gathering of historic and modern performance vehicles"
    },
    {
      title: "Isle of Man TT",
      description: "Legendary motorcycle road racing event"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <SettingsPanel />
      <ChatBot />

      {/* Hero Section */}
      <div
        className="h-[70vh] flex items-center justify-center text-center relative pt-20"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Automotive Passion
          </h1>
          <p className="text-xl text-white">Exploring the World of Supercars & Motorcycles</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Supercars Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Car className="text-red-500" />
            Dream Supercars
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supercars.map((car, index) => (
              <div key={index} className="bg-gray-700/80 rounded-2xl overflow-hidden hover:-translate-y-3 hover:scale-105 transition-all duration-300 border border-white/10">
                <div className="h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">{car.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {car.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <spec.icon className="text-red-500" size={16} />
                        <span className="text-gray-300">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Motorcycles Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Bike className="text-red-500" />
            Dream Bikes
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {motorcycles.map((bike, index) => (
              <div key={index} className="bg-gray-700/80 rounded-2xl overflow-hidden hover:-translate-y-3 hover:scale-105 transition-all duration-300 border border-white/10">
                <div className="h-64 overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">{bike.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {bike.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <spec.icon className="text-red-500" size={16} />
                        <span className="text-gray-300">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Flag className="text-red-500" />
            Automotive Events
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl hover:bg-gray-600/80 transition-colors border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Camera className="text-red-500" />
            Automotive Gallery
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-700/80 rounded-2xl p-8 text-center hover:bg-gray-600/80 transition-colors border border-white/10">
                <div className="w-full h-32 bg-gray-600/80 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="text-gray-400" size={32} />
                </div>
                <p className="text-gray-300">Image Coming Soon</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AutomotivePage;