import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CulinaryPage from './pages/CulinaryPage';
import GamingPage from './pages/GamingPage';
import AutomotivePage from './pages/AutomotivePage';
import SportsPage from './pages/SportsPage';
import AIRoboticsPage from './pages/AIRoboticsPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/culinary" element={<CulinaryPage />} />
            <Route path="/gaming" element={<GamingPage />} />
            <Route path="/automotive" element={<AutomotivePage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/ai-robotics" element={<AIRoboticsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;