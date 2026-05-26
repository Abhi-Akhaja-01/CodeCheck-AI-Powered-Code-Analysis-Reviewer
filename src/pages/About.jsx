import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bot, Code, Cpu, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ isDarkMode, toggleTheme, navigate, currentUser, setCurrentUser }) => {
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
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-blue-600 mb-4 tracking-tight"
          >
            About CodeCheck
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto"
          >
            We are redefining code quality by putting an automated AI mentor directly in your browser.
          </motion.p>
        </div>

        {/* Brand Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
              Empowering Developers to Write Better Code, Faster.
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              CodeCheck was created out of a simple need: making high-quality code reviews accessible instantly. Code reviews can often be bottlenecked by time zones, busy teams, and human oversights. 
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              By utilizing advanced models like Google Gemini 2.5 Flash and Monaco Editor, CodeCheck analyzes code structures across five core pillars—Errors, Best Practices, Optimization, Readability, and Security—in just under a few seconds.
            </p>
            <button 
              onClick={() => navigate('home')}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md group"
            >
              Try CodeCheck Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 border-blue-500/10 flex flex-col justify-center space-y-6 h-full min-h-[300px]"
          >
            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600/20 text-blue-500 shrink-0">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">State-of-the-Art AI</h3>
                <p className="text-sm text-[var(--text-muted)]">Powered by Google Gemini 2.5 to provide precise diagnostic metrics and best-practice solutions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600/20 text-indigo-500 shrink-0">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">Developer-Centric Editor</h3>
                <p className="text-sm text-[var(--text-muted)]">Built with Monaco Editor, the exact same engine running VS Code, for seamless write/paste capabilities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-purple-600/20 text-purple-500 shrink-0">
                <Cpu className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">14+ Languages Supported</h3>
                <p className="text-sm text-[var(--text-muted)]">Supports JavaScript, TypeScript, Python, Java, C++, Rust, Go, HTML, CSS, and much more.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mb-3">Our Core Principles</h2>
            <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto">The values that drive the CodePilot platform forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500/20 text-green-500">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-main)]">Pragmatic Optimization</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                We believe in code that works optimally. Our algorithm looks at space and time complexities, offering actionable performance alternatives.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-500/20 text-red-500">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-main)]">Ironclad Security</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                We actively search for credential leaks, SQL injections, and buffer vulnerabilities so your build stays locked down.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500/20 text-purple-500">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-main)]">Cognitive Simplicity</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Coding shouldn't be overly convoluted. Our reviews prioritize cleanliness and readability so that even junior developers can quickly navigate your codebase.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
