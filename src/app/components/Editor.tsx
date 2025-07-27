'use client';

import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    code: string;
    onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCopy = () => {
        // Copy code dengan format asli (termasuk tab dan whitespace)
        navigator.clipboard.writeText(code).then(() => {
            // Optional: bisa tambahkan toast notification di sini
            console.log('Code copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy code:', err);
        });
        setShowMenu(false);
    };

    const handleExport = () => {
        // Export code dengan format asli (termasuk tab dan whitespace)
        const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'App.kt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Optional: bisa tambahkan toast notification di sini
        console.log('Code exported as App.kt');
        setShowMenu(false);
    };

    const handleFormat = () => {
        // Basic formatting - preserve indentation and structure
        const lines = code.split('\n');
        const formattedLines = lines.map(line => {
            // Preserve original indentation
            const trimmed = line.trim();
            if (trimmed.length === 0) return '';

            // Find original indentation
            const originalIndent = line.match(/^\s*/)?.[0] || '';
            return originalIndent + trimmed;
        });

        const formattedCode = formattedLines.join('\n');
        onChange(formattedCode);
        setShowMenu(false);
    };

    return (
        <div className="flex flex-col h-full">
            {/* Tab Bar */}
            <div className="flex bg-zinc-800 px-4 h-9 items-center justify-between">
                <div className="flex items-center px-4 py-1.5 bg-zinc-700 border-t border-r border-[#404040] border-b-[3px] border-b-blue-500 text-white text-sm font-medium cursor-default select-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H14C14.3033 1.25 14.5768 1.43273 14.6929 1.71299C14.809 1.99324 14.7448 2.31583 14.5303 2.53033L9.06066 8L14.5303 13.4697C14.7448 13.6842 14.809 14.0068 14.6929 14.287C14.5768 14.5673 14.3033 14.75 14 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14V2ZM2.75 2.75V13.25H12.1893L7.46967 8.53033C7.17678 8.23744 7.17678 7.76256 7.46967 7.46967L12.1893 2.75H2.75Z" fill="#d783ff" />
                    </svg>
                    App.kt
                </div>

                {/* More Button */}
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="bg-transparent hover:bg-zinc-700 border-none text-white cursor-pointer p-1.5 rounded flex items-center justify-center transition-colors duration-200"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="1" fill="#cccccc" />
                            <circle cx="6" cy="12" r="1" fill="#cccccc" />
                            <circle cx="18" cy="12" r="1" fill="#cccccc" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <div className="absolute top-full right-0 bg-zinc-800 border border-border-color rounded-md shadow-lg z-50 min-w-40 py-1">
                            <button
                                onClick={handleCopy}
                                className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-2 hover:bg-white/10 transition-colors duration-200"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="#cccccc" strokeWidth="2" fill="none" />
                                    <path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1" stroke="#cccccc" strokeWidth="2" fill="none" />
                                </svg>
                                Copy
                            </button>
                            <button
                                onClick={handleExport}
                                className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-2 hover:bg-white/10 transition-colors duration-200"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#cccccc" strokeWidth="2" fill="none" />
                                    <polyline points="7,10 12,15 17,10" stroke="#cccccc" strokeWidth="2" fill="none" />
                                    <line x1="12" y1="15" x2="12" y2="3" stroke="#cccccc" strokeWidth="2" />
                                </svg>
                                Export
                            </button>
                            <button
                                onClick={handleFormat}
                                className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-2 hover:bg-white/10 transition-colors duration-200"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6h16M4 12h16M4 18h12" stroke="#cccccc" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Format Code
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Editor */}
            <div className="flex-1">
                <Editor
                    defaultLanguage="kotlin"
                    defaultValue={code}
                    theme="jetbrains-dark"
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        wordWrap: 'on',
                        scrollBeyondLastLine: false,
                        bracketPairColorization: { enabled: false },
                    }}
                    beforeMount={(monaco) => {
                        // Define JetBrains Dark theme
                        monaco.editor.defineTheme('jetbrains-dark', {
                            base: 'vs-dark',
                            inherit: false,
                            rules: [
                                { token: 'comment', foreground: '629755' }, // Green
                                { token: 'keyword', foreground: 'cc7832' }, // Orange (for fun, var, by, etc.)
                                { token: 'string', foreground: '6a8759' }, // Light Green
                                { token: 'number', foreground: '6897bb' }, // Blue
                                { token: 'type', foreground: '4ec9b0' }, // Blue (for Modifier, Alignment)
                                { token: 'class', foreground: '4ec9b0' }, // Blue (for class names)
                                { token: 'function', foreground: 'ffc66d' }, // Yellow (for function names like App, Column, Button)
                                { token: 'variable', foreground: '9876aa' }, // Purple
                                { token: 'constant', foreground: '9876aa' }, // Purple
                                { token: 'operator', foreground: 'cc7832' }, // Orange
                                { token: 'delimiter', foreground: 'a9b7c6' }, // Light Gray
                                { token: 'annotation', foreground: 'BBB529' }, // Yellow (for @Composable)
                            ],
                            colors: {
                                'editor.background': '#191b1e',
                                'editor.foreground': '#ffffff',
                                'editor.lineHighlightBackground': '#252526',
                                'editor.selectionBackground': '#214283',
                                'editor.inactiveSelectionBackground': '#3a3a3a',
                                'editor.findMatchBackground': '#32593d',
                                'editor.findMatchHighlightBackground': '#2d5a2d',
                                'editorCursor.foreground': '#ffffff',
                                'editorWhitespace.foreground': '#3c3f41',
                                'editorIndentGuide.background': '#3c3f41',
                                'editorLineNumber.foreground': '#6a737d',
                                'editorLineNumber.activeForeground': '#ffffff',
                                'editorGutter.background': '#191b1e',
                                'editorWidget.background': '#252526',
                                'editorWidget.border': '#333',
                                'editorHoverWidget.background': '#252526',
                                'editorHoverWidget.border': '#333',
                                'editorSuggestWidget.background': '#252526',
                                'editorSuggestWidget.border': '#333',
                                'editorSuggestWidget.selectedBackground': '#3c3f41',
                                'editorSuggestWidget.highlightForeground': '#61dafb',
                                'editorError.foreground': '#ff6b68',
                                'editorWarning.foreground': '#ffc66d',
                                'editorInfo.foreground': '#629755',
                                'editorOverviewRuler.border': '#252526',
                                'editorOverviewRuler.findMatchForeground': '#32593d',
                                'editorOverviewRuler.errorForeground': '#ff6b68',
                                'editorOverviewRuler.warningForeground': '#ffc66d',
                                'editorOverviewRuler.infoForeground': '#629755',
                                'scrollbarSlider.background': '#3c3f41',
                                'scrollbarSlider.hoverBackground': '#4c5052',
                                'scrollbarSlider.activeBackground': '#5c6062',
                            }
                        });
                    }}
                    onChange={onChange}

                />
            </div>
        </div>
    );
};

export default CodeEditor;