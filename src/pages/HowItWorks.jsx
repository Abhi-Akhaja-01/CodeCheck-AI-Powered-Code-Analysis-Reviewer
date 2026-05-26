import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clipboard, Shield, CheckCircle, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = ({ isDarkMode, toggleTheme, navigate, currentUser, setCurrentUser }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)]">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        navigate={navigate} 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-8 xl:px-16 mx-auto w-full max-w-[1200px]">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-blue-600 mb-4 tracking-tight"
          >
            How CodeCheck Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto"
          >
            A seamless, developer-first workflow to review, optimize, and secure your codebase in seconds.
          </motion.p>
        </div>

        {/* Steps Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-20">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 z-0"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 flex flex-col items-center text-center relative z-10"
          >
            <div className="h-14 w-14 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center border border-blue-500/20 font-black text-xl mb-6 shadow-md">
              1
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 flex items-center gap-2">
              <Clipboard className="h-5 w-5 text-blue-500" /> Input Code
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Write or paste your code directly into our VS Code-powered Monaco Editor. Choose from 14+ standard programming languages like JavaScript, TypeScript, Python, or Rust.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 flex flex-col items-center text-center relative z-10"
          >
            <div className="h-14 w-14 rounded-full bg-indigo-600/10 text-indigo-500 flex items-center justify-center border border-indigo-500/20 font-black text-xl mb-6 shadow-md">
              2
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-indigo-500" /> AI Diagnostic
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Click "Review Code". CodeCheck transmits your lines securely to our fine-tuned Google Gemini 2.5 Flash model, which inspects structure, dependencies, and complex logical patterns.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-8 flex flex-col items-center text-center relative z-10"
          >
            <div className="h-14 w-14 rounded-full bg-purple-600/10 text-purple-500 flex items-center justify-center border border-purple-500/20 font-black text-xl mb-6 shadow-md">
              3
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-purple-500" /> Polish & Ship
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Get an interactive visual report annotated with specialized colored icons. Copy recommendations directly, download the markdown analysis, and confidently deploy!
            </p>
          </motion.div>
        </div>



        {/* Call to action */}
        <div className="text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">Ready to write cleaner code?</h2>
          <button 
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            Get Started Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
