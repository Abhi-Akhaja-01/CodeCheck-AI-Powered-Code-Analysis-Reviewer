import React from 'react';
import Editor from '@monaco-editor/react';
import { Settings, Trash2, CheckCircle2 } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const LANGUAGE_BADGES = {
  'JavaScript': 'JS',
  'TypeScript': 'TS',
  'Python': 'PY',
  'Java': 'JAVA',
  'C++': 'C++',
  'C#': 'C#',
  'Go': 'GO',
  'Rust': 'RS',
  'PHP': 'PHP',
  'Ruby': 'RB',
  'Swift': 'SW',
  'Kotlin': 'KT',
  'HTML': 'HTML',
  'CSS': 'CSS'
};

const CodeEditor = ({ code, setCode, language, setLanguage }) => {
  const handleEditorChange = (value) => {
    setCode(value || '');
  };

  return (
    <div className="glass-panel flex flex-col h-full overflow-hidden">
      {/* Editor Header */}
      <div className="panel-header">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-[var(--text-muted)]" />
          <h2 className="text-sm font-semibold text-[var(--text-main)] tracking-wide">Code Editor</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <LanguageSelector selected={language} onSelect={setLanguage} />
          </div>
          
          <button 
            onClick={() => setCode('')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors text-xs font-medium"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>
      
      {/* Editor Content */}
      <div className="flex-1 relative pt-2">
        <Editor
          height="100%"
          language={language.toLowerCase()}
          theme={document.documentElement.classList.contains('dark') ? "vs-dark" : "light"}
          value={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            lineHeight: 24,
            padding: { top: 16, bottom: 16 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            formatOnPaste: true,
            overviewRulerLanes: 0,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
          }}
          className="relative z-10"
        />
      </div>

      {/* Editor Footer */}
      <div className="bg-[var(--bg-main)] border-t border-[var(--border-color)] px-4 py-2 flex justify-between items-center transition-colors duration-300">
        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          <span>Line 1, Col 1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)]">{language}</span>
          <div className="bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-[10px] font-bold px-1.5 py-0.5 rounded">
            {LANGUAGE_BADGES[language] || 'CODE'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
