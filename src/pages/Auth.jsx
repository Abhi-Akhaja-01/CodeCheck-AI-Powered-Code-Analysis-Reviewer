import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Lock, User, Eye, EyeOff, LogIn, Code2, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = ({ isDarkMode, toggleTheme, navigate, setCurrentUser }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password || (isSignUp && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (isSignUp) {
      // Sign Up Flow
      const userExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
      if (userExists) {
        setError('An account with this email already exists.');
        return;
      }

      const newUser = {
        name,
        email: email.toLowerCase(),
        password, // Stored directly in localStorage for demo purposes
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      setSuccess('Account created successfully! Logging you in...');
      setTimeout(() => {
        setCurrentUser(newUser);
        navigate('home');
      }, 1500);
    } else {
      // Sign In Flow
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (!user) {
        setError('Invalid email or password.');
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(user));
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        setCurrentUser(user);
        navigate('home');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} navigate={navigate} />

      <main className="flex-grow pt-24 pb-16 flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Main Card */}
          <div className="glass-panel p-8 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[var(--bg-panel)] to-[var(--bg-panel)]/90 border-[var(--border-color)]">
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            {/* Header / Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center justify-center h-12 w-12 bg-blue-600/10 rounded-xl mb-4">
                <Code2 className="text-blue-500 h-7 w-7" />
              </div>
              <h2 className="text-2xl font-black text-[var(--text-main)] tracking-tight">
                {isSignUp ? 'Create your Account' : 'Welcome Back'}
              </h2>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {isSignUp ? 'Join CodeCheck to review and secure your code' : 'Access your code diagnostics instantly'}
              </p>
            </div>

            {/* Success and Error Indicators */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{success}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleAuth} className="space-y-4">
              {isSignUp && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] opacity-60" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)]/50 focus:bg-[var(--bg-main)] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] opacity-60" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)]/50 focus:bg-[var(--bg-main)] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Password
                  </label>
                  {!isSignUp && (
                    <a href="#" className="text-[10px] font-medium text-blue-500 hover:underline">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] opacity-60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)]/50 focus:bg-[var(--bg-main)] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors outline-none"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 mt-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                {isSignUp ? <Sparkles className="h-4 w-4 text-white" /> : <LogIn className="h-4 w-4 text-white" />}
                {isSignUp ? 'Sign Up Now' : 'Sign In'}
              </button>
            </form>

            {/* Toggle tabs button */}
            <div className="mt-6 pt-6 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-muted)]">
              <span>{isSignUp ? 'Already have an account? ' : "Don't have an account yet? "}</span>
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setSuccess('');
                }}
                className="text-blue-500 hover:underline font-bold transition-all outline-none bg-transparent border-none cursor-pointer"
              >
                {isSignUp ? 'Sign In' : 'Register / Sign Up'}
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
