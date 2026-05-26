import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CodeEditor from '../components/CodeEditor';
import ReviewButton from '../components/ReviewButton';
import Loader from '../components/Loader';
import ReviewPanel from '../components/ReviewPanel';
import Footer from '../components/Footer';
import { reviewCode } from '../services/geminiService';
import { motion } from 'framer-motion';

const Home = ({ isDarkMode, toggleTheme, navigate, currentUser, setCurrentUser }) => {
  const [code, setCode] = useState('// Paste your code here\n// Click "Review Code" to get AI feedback');
  const [language, setLanguage] = useState('JavaScript');
  const [isReviewing, setIsReviewing] = useState(false);
  const [reviewResult, setReviewResult] = useState('');
  const [error, setError] = useState(null);

  const handleReview = async () => {
    if (!code || code.trim() === '') {
      setError("Please enter some code to review.");
      return;
    }

    setIsReviewing(true);
    setError(null);

    try {
      const result = await reviewCode(code, language);
      setReviewResult(result);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsReviewing(false);
    }
  };

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:overflow-hidden bg-[var(--bg-main)]">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        navigate={navigate} 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      
      <main className="flex-grow lg:flex-1 flex flex-col pt-20 pb-4 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-[1920px] min-h-0">
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs shrink-0">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow lg:flex-1 min-h-0">
          {/* Left Column: Code Editor + Button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-[480px] lg:h-full min-h-0 gap-4"
          >
            <div className="flex-1 min-h-0">
              <CodeEditor 
                code={code} 
                setCode={setCode} 
                language={language} 
                setLanguage={setLanguage}
              />
            </div>
            <div className="shrink-0">
              <ReviewButton 
                onClick={handleReview} 
                isLoading={isReviewing} 
                disabled={!code || code.trim() === ''} 
              />
            </div>
          </motion.div>
          
          {/* Right Column: Review Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col h-[480px] lg:h-full min-h-0 relative"
          >
            {isReviewing && (
              <div className="absolute inset-0 z-20 flex items-center justify-center glass-panel bg-[#0f1423]/90 backdrop-blur-sm rounded-xl">
                <Loader />
              </div>
            )}
            <ReviewPanel review={reviewResult} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
