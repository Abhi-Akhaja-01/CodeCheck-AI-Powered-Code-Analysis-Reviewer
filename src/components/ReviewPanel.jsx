import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Check, Terminal, Bot, Download, AlertCircle, Star, Zap, BookOpen, ShieldCheck } from 'lucide-react';

const ReviewPanel = ({ review }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(review);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([review], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code-review.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Custom Markdown components to inject specific icons for headers
  const MarkdownComponents = {
    h3: ({ node, children, ...props }) => {
      const getInnerText = (child) => {
        if (!child) return '';
        if (typeof child === 'string') return child;
        if (Array.isArray(child)) return child.map(getInnerText).join('');
        if (child.props && child.props.children) return getInnerText(child.props.children);
        return String(child);
      };
      
      const text = getInnerText(children);
      if (text.includes('1. Errors')) {
        return <h3 className="error-heading" {...props}><AlertCircle className="h-5 w-5 shrink-0" /> <span>{children}</span></h3>;
      }
      if (text.includes('2. Best Practices')) {
        return <h3 className="best-practice-heading" {...props}><Star className="h-5 w-5 shrink-0" /> <span>{children}</span></h3>;
      }
      if (text.includes('3. Optimization')) {
        return <h3 className="optimization-heading" {...props}><Zap className="h-5 w-5 shrink-0" /> <span>{children}</span></h3>;
      }
      if (text.includes('4. Readability')) {
        return <h3 className="readability-heading" {...props}><BookOpen className="h-5 w-5 shrink-0" /> <span>{children}</span></h3>;
      }
      if (text.includes('5. Security')) {
        return <h3 className="security-heading" {...props}><ShieldCheck className="h-5 w-5 shrink-0" /> <span>{children}</span></h3>;
      }
      return <h3 {...props}>{children}</h3>;
    }
  };

  if (!review) {
    return (
      <div className="glass-panel flex flex-col h-full overflow-hidden">
        <div className="panel-header">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-purple-400" />
            <h2 className="text-sm font-semibold text-[var(--text-main)] tracking-wide">AI Review Results</h2>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-[var(--text-muted)] p-8 text-center space-y-4 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-[var(--bg-header)] flex items-center justify-center border border-[var(--border-color)]">
            <Terminal className="h-8 w-8 text-[var(--text-muted)] opacity-70" />
          </div>
          <p>Awaiting code transmission...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel flex flex-col h-full overflow-hidden">
      <div className="panel-header">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-purple-400" />
          <h2 className="text-sm font-semibold text-[var(--text-main)] tracking-wide">AI Review Results</h2>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs font-medium"
            title="Copy review"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            Copy
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs font-medium"
            title="Download review"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth bg-[var(--bg-panel)] transition-colors duration-300">
        <div className="prose max-w-none">
          <ReactMarkdown components={MarkdownComponents}>{review}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ReviewPanel;
