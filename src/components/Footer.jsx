import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-panel)] py-4 transition-colors duration-300 shrink-0">
      <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 tracking-tight">
            CodeCheck<span className="text-[var(--text-main)]">Review</span>
          </span>
          <span className="hidden sm:inline text-xs text-[var(--border-color)]">|</span>
          <p className="text-[11px] text-[var(--text-muted)]">Elevating code quality to new dimensions.</p>
        </div>
        
        <div className="text-[11px] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} CodeCheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
