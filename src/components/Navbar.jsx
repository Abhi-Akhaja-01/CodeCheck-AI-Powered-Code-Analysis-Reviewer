import React from 'react';
import { Code2, Home, Star, HelpCircle, Tag, Info, Moon, Sun, Sparkles, LogIn, LogOut, User } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, navigate, currentUser, setCurrentUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('home');
  };

  return (
    <nav className="fixed w-full z-50 bg-[var(--bg-panel)] border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('home')}
          >
            <div className="flex items-center justify-center h-10 w-10 bg-blue-600/20 rounded-lg">
              <Code2 className="text-blue-500 h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--text-main)] leading-tight">CodeCheck</span>
              <span className="text-[10px] text-[var(--text-muted)] font-medium">AI-Powered Code Analysis</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('home'); }}
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-main)] hover:text-indigo-500 transition-colors"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('how-it-works'); }}
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              How it Works
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('pricing'); }}
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <Tag className="h-4 w-4" />
              Pricing
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('about'); }}
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <Info className="h-4 w-4" />
              About
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-main)]/50"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {currentUser ? (
              <div className="flex items-center gap-3 pl-2 border-l border-[var(--border-color)]">
                {/* User avatar and name */}
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                    {currentUser.name ? currentUser.name.charAt(0) : 'U'}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-[var(--text-main)] max-w-[100px] truncate">
                    {currentUser.name}
                  </span>
                </div>

                {/* Sign Out Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all border border-red-500/10 cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Sign Out</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('auth')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-lg transition-all shadow-md cursor-pointer"
              >
                <LogIn className="h-4 w-4 text-white" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
