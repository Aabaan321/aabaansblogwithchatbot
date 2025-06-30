import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SettingsPanel from '../components/SettingsPanel';
import ChatBot from '../components/ChatBot';
import { ChefHat, Clock, BookOpen, Award, Camera } from 'lucide-react';

const CulinaryPage: React.FC = () => {
  const recipes = [
    {
      title: "Beef Wellington",
      image: "https://hellskitchenrecipes.com/wp-content/uploads/2020/10/Gordon-Ramsays-Guide-to-Perfect-Beef-Wellington.jpg",
      description: "Beef Wellington is one of my favorite dishes, a true test of skill and precision in the kitchen. The combination of tender beef, rich mushroom duxelles, and flaky puff pastry creates a perfect harmony of flavors and textures. I was inspired to perfect this dish by Gordon Ramsay, my favorite chef, whose passion for culinary excellence pushes me to refine my techniques."
    },
    {
      title: "Chicken Alfredo",
      image: "https://ohsnapmacros.com/wp-content/uploads/2021/11/0019-BlackenedChicken-Hero-scaled.jpg",
      description: "Chicken Alfredo is a rich and creamy pasta dish that perfectly balances flavour and texture. Made with tender pieces of chicken, fettuccine pasta, and a velvety Alfredo sauce crafted from butter, cream, and Parmesan cheese, it's a comforting yet indulgent meal."
    },
    {
      title: "Panna Cotta",
      image: "https://www.jocooks.com/wp-content/uploads/2024/02/panna-cotta-1-22.jpg",
      description: "Panna Cotta is a delicate and creamy Italian dessert that is both simple and elegant. Made from sweetened cream, gelatin, and vanilla, it has a silky-smooth texture that melts in the mouth. Often served with a fruit coulis, caramel, or chocolate sauce."
    }
  ];

  const timeline = [
    { year: "2025", event: "Started joining courses" },
    { year: "2026", event: "Completed multiple cooking certification" },
    { year: "2027", event: "Worked in a good restaurant to gain experience" },
    { year: "2028", event: "Preparing for culinary school in France" }
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
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl px-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            My Culinary Journey
          </h1>
          <p className="text-xl text-white">Exploring the Art of Cuisine all over the world</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* About Culinary Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <ChefHat className="text-red-500" />
            About My Culinary Passion
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Cooking is more than just a skill for me—it's a true passion. I love experimenting with flavors and techniques from around the world, blending ingredients to create unique and delicious dishes. Traveling has been a huge inspiration for me, from savoring street food in Bangkok to experiencing fine dining in Paris. Every new place I visit adds to my culinary knowledge, helping me refine my skills and discover new tastes.
            <br /><br />
            After completing the Cambridge curriculum, I plan to attend culinary school for a 4-year course in culinary arts and hotel management. My dream is to master the art of cooking and bring my creativity to the kitchen, whether in a fine-dining restaurant or my own establishment in the future.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors">
              <Clock className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold">9+ Years</h3>
              <p className="text-gray-300">Cooking Experience</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors">
              <BookOpen className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold">9+</h3>
              <p className="text-gray-300">Recipes Mastered</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-2xl text-center hover:bg-gray-600/80 transition-colors">
              <Award className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-gray-300">Cooking Certificates</p>
            </div>
          </div>
        </section>

        {/* Recipes Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-red-500" />
            Favorite Recipes
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-gray-700/80 rounded-2xl overflow-hidden hover:-translate-y-3 transition-transform duration-300 border border-white/10">
                <div className="h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{recipe.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {recipe.description}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors text-white font-medium">
                    View Recipe - Secret
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 mb-12 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Clock className="text-red-500" />
            My Culinary Journey
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-gray-700/80 p-6 rounded-2xl relative hover:bg-gray-600/80 transition-colors border border-white/10">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.year}</h3>
                <p className="text-gray-300">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-white/10">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Camera className="text-red-500" />
            Food Gallery
            <div className="h-1 w-12 bg-red-500 rounded-full ml-4"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-700/80 rounded-2xl p-8 text-center hover:bg-gray-600/80 transition-colors border border-white/10">
                <div className="w-full h-32 bg-gray-600/80 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="text-gray-400" size={32} />
                </div>
                <p className="text-gray-300">Delicious Dish Coming Soon</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CulinaryPage;