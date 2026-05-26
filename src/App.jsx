import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Auth from './pages/Auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('currentUser') || 'null');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col transition-colors duration-300">
      {currentPage === 'home' && (
        <Home 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          navigate={navigate} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentPage === 'pricing' && (
        <Pricing 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          navigate={navigate} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentPage === 'about' && (
        <About 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          navigate={navigate} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentPage === 'how-it-works' && (
        <HowItWorks 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          navigate={navigate} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentPage === 'auth' && (
        <Auth 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          navigate={navigate} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
}

export default App;
