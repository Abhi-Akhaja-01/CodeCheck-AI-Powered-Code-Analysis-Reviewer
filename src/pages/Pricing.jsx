import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Info, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = ({ isDarkMode, toggleTheme, navigate, currentUser, setCurrentUser }) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)]">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        navigate={navigate} 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-8 xl:px-16 mx-auto w-full max-w-[1400px]">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-blue-600 mb-4 tracking-tight">Pricing</h1>
          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl mx-auto">
            Simple, transparent plans built for individuals and teams.
          </p>
        </div>

        {/* Top Controls: Individual/API Tabs and Yearly Toggle */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 relative w-full">
          {/* Tabs Pill */}
          <div className="bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl flex items-center shadow-sm">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'individual'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'api'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800'
              }`}
            >
              API
            </button>
          </div>

          {/* Yearly Toggle Switch */}
          <div className="md:absolute md:right-0 flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={billingPeriod === 'yearly'}
                onChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-sm font-medium text-[var(--text-muted)]">
              Yearly (2 months free)
            </span>
          </div>
        </div>

        {/* Grid Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {/* Card 1: Free */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">Free</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-extrabold text-[var(--text-main)]">$0.00</span>
                <span className="text-[var(--text-muted)] text-sm ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Unlimited code executions</span>
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>25 AI credits per day</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-[var(--border-color)] text-sm font-semibold text-[var(--text-muted)] cursor-not-allowed bg-gray-50/50 dark:bg-gray-800/10">
              Free forever
            </button>
          </motion.div>

          {/* Card 2: Plus */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-6 flex flex-col justify-between border-blue-500/20"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
                  <span>🚁</span> Plus
                </h3>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-extrabold text-[var(--text-main)]">
                  {billingPeriod === 'yearly' ? '$40.00' : '$4.00'}
                </span>
                <span className="text-[var(--text-muted)] text-sm ml-2">
                  {billingPeriod === 'yearly' ? '/ year' : '/ month'}
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="text-[var(--text-muted)]">Everything in Free</li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Unlimited AI credits</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span className="truncate">Advanced challenge optio...</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Studio Access</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-blue-600 hover:bg-blue-600/10 text-sm font-semibold text-blue-600 transition-all">
              Subscribe now
            </button>
          </motion.div>

          {/* Card 3: Pro */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-6 flex flex-col justify-between border-indigo-500/20 shadow-indigo-500/5 shadow-xl"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
                  <span>✈️</span> Pro
                </h3>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-extrabold text-[var(--text-main)]">
                  {billingPeriod === 'yearly' ? '$80.00' : '$8.00'}
                </span>
                <span className="text-[var(--text-muted)] text-sm ml-2">
                  {billingPeriod === 'yearly' ? '/ year' : '/ month'}
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="text-[var(--text-muted)]">Everything in Free</li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Unlimited AI credits</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span className="truncate">Advanced challenge optio...</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Studio Access</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-blue-600 hover:bg-blue-600/10 text-sm font-semibold text-blue-600 transition-all">
              Subscribe now
            </button>
          </motion.div>

          {/* Card 4: Ultra */}
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-panel p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
                  <span>🚀</span> Ultra
                </h3>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-extrabold text-[var(--text-main)]">
                  {billingPeriod === 'yearly' ? '$120.00' : '$12.00'}
                </span>
                <span className="text-[var(--text-muted)] text-sm ml-2">
                  {billingPeriod === 'yearly' ? '/ year' : '/ month'}
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="text-[var(--text-muted)]">Everything in Free</li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Unlimited AI credits</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span className="truncate">Advanced challenge optio...</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
                <li className="text-[var(--text-muted)] flex justify-between items-center">
                  <span>Studio Access</span>
                  <Info className="h-4 w-4 text-[var(--text-muted)] opacity-60 cursor-pointer" />
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-lg border border-blue-600 hover:bg-blue-600/10 text-sm font-semibold text-blue-600 transition-all">
              Subscribe now
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
