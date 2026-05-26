import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewButton = ({ onClick, disabled, isLoading }) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full relative overflow-hidden px-6 py-4 rounded-xl font-bold tracking-wide text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4
        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-800' : 'bg-gradient-to-r from-[#5b21b6] via-[#3b82f6] to-[#0ea5e9] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'}
      `}
    >
      {/* Animated background glow */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
      )}
      
      {/* Button content */}
      <div className="relative flex items-center gap-2 z-10">
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin text-white" />
        ) : (
          <Sparkles className="h-5 w-5 text-white" />
        )}
        <span className="text-lg">{isLoading ? 'Analyzing Code...' : 'Review Code'}</span>
      </div>
    </motion.button>
  );
};

export default ReviewButton;
