import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect, useRef, useState} from 'react';
import {getMainUrl, getPlaygroundUrl} from "@/app/utils/utils";

// 1. Props 'isCompiling' dan 'onRunCode' dibuat opsional
interface HeaderProps {
    pageType?: 'playground' | 'landing';
    isCompiling?: boolean;
    onRunCode?: () => void;
}

const Header: React.FC<HeaderProps> = ({pageType = 'playground', isCompiling, onRunCode}) => {
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

    // Fungsi-fungsi handler lainnya tetap sama
    const handleGithub = () => {
        window.open('https://github.com/haerulmuttaqin/composebox', '_blank');
        setShowMenu(false);
    };

    const handleMoreTools = () => {
        console.log('More Tools clicked');
        setShowMenu(false);
    };

    const handleDocumentation = () => {
        window.open('https://developer.android.com/jetpack/compose', '_blank');
        setShowMenu(false);
    };

    const handleSettings = () => {
        console.log('Settings clicked');
        setShowMenu(false);
    };

    const handleFeedback = () => {
        console.log('Feedback clicked');
        setShowMenu(false);
    };

    return (
        <header className="sticky top-0 z-40 py-2.5 border-b border-border-color bg-zinc-800 text-white">
            <div className={
                pageType === 'landing'
                    ? 'container max-w-7xl sm:px-6 lg:px-8 mx-auto px-5 flex justify-between items-center'
                    : 'px-5 flex justify-between items-center'
            }>
                <div className="flex items-center gap-2">
                    <Link href={getMainUrl()} className="flex items-center gap-2">
                        <Image src={getMainUrl() + "/composebox-logo.svg"} alt="ComposeBox Logo" width={24}
                               height={24}/>
                        <h1 className="text-white">
                            <b>ComposeBox</b>
                            {pageType === 'playground' && (<>
                                <span>(Playground)</span><span style={{fontSize: "8px"}}
                                                               className="absolute ml-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-full transform">
                                        BETA
                                    </span>
                            </>)}
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    {pageType === 'playground' && onRunCode && (
                        <button
                            onClick={onRunCode}
                            disabled={isCompiling}
                            className={`flex items-center gap-1.5 border-1 border-zinc-700 rounded-full pl-2 pr-4 py-[2px] font-semibold text-[15px] transition-colors duration-200 outline-none ${
                                isCompiling
                                    ? 'bg-zinc-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-zinc-800 text-white cursor-pointer shadow-sm hover:bg-zinc-700'
                            }`}
                            title="Run Code (Ctrl+S / Cmd+S)"
                        >
                            {isCompiling ? (
                                <span className="flex items-center">
                                    <svg width="2" height="32" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><path
                                        d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
                                        fill="#4CAF50"/></svg>
                                    <span
                                        className="w-4 h-4 border-2 border-gray-400 border-t-green-500 rounded-full animate-spin mr-1.5"/>
                                    Compiling...
                                </span>
                            ) : (
                                <>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
                                            fill="#4CAF50"/>
                                    </svg>
                                    Run Code
                                </>
                            )}
                        </button>
                    )}

                    {pageType === 'landing' && (
                        <Link href={getPlaygroundUrl()} passHref
                              className="bg-white hover:bg-blue-500 text-blue-500 border-1 border-blue-500 font-semibold text-[15px] px-4 py-1.5 rounded-full transition-colors duration-200">
                            Try Playground
                        </Link>
                    )}

                    {/* Tombol "More" dan Dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="bg-transparent border-1 border-zinc-700 text-white cursor-pointer p-2 rounded-md flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
                            title="More options"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="6" r="1" fill="currentColor"/>
                                <circle cx="12" cy="12" r="1" fill="currentColor"/>
                                <circle cx="12" cy="18" r="1" fill="currentColor"/>
                            </svg>
                        </button>

                        {showMenu && (
                            <div
                                className="absolute top-full right-0 mt-1 bg-zinc-800 border border-border-color rounded-md shadow-lg z-50 min-w-48 py-1">
                                <Link href={getMainUrl() + "/about"} passHref>
                                    <div onClick={() => setShowMenu(false)}
                                         className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"
                                                    fill="none"/>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor"
                                                  strokeWidth="2" fill="none"/>
                                            <line x1="12" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round"/>
                                        </svg>
                                        About
                                    </div>
                                </Link>

                                <button onClick={handleGithub}
                                        className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                            stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                    GitHub
                                </button>

                                <button onClick={handleDocumentation}
                                        className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                                              stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" fill="none"/>
                                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round"/>
                                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round"/>
                                        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round"/>
                                    </svg>
                                    Documentation
                                </button>

                                <div className="border-t border-border-color my-1"/>

                                <button onClick={handleMoreTools}
                                        className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"
                                              fill="none"/>
                                        <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"
                                              fill="none"/>
                                        <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"
                                              fill="none"/>
                                        <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"
                                              fill="none"/>
                                    </svg>
                                    More Tools
                                </button>

                                <button onClick={handleSettings}
                                        className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"
                                                fill="none"/>
                                        <path
                                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                            stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                    Settings
                                </button>

                                <button onClick={handleFeedback}
                                        className="w-full px-4 py-2 bg-transparent border-none text-white cursor-pointer text-left text-sm flex items-center gap-3 hover:bg-white/10 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                              stroke="currentColor" strokeWidth="2" fill="none"/>
                                    </svg>
                                    Feedback/Issues
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;