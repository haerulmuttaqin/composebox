'use client';

import React, { useState, useRef, useEffect } from 'react';
import CodeEditor from './components/Editor';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';
import Resizer from './components/Resizer';
import PreviewModeSelector from './components/PreviewModeSelector';
import ErrorDisplay from './components/ErrorDisplay';
import MobilePreview from './components/MobilePreview';
import DesktopPreview from './components/DesktopPreview';
import { DEFAULT_COMPOSE_CODE } from './data/templates';

export default function HomePage() {
    const initialCode = DEFAULT_COMPOSE_CODE;

    const [code, setCode] = useState<string>(initialCode);
    const [iframeKey, setIframeKey] = useState<number>(0);
    const [isCompiling, setIsCompiling] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [errorDetail, setErrorDetail] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [buildProgress, setBuildProgress] = useState<string>('');
    const [buildStep, setBuildStep] = useState<number>(0);
    const [editorWidth, setEditorWidth] = useState<number>(50); // percentage
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const [iframeError, setIframeError] = useState<boolean>(false);
    const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');
    const containerRef = useRef<HTMLDivElement>(null);

    // Generate or get session ID for localStorage
    const getSessionId = () => {
        let sessionId = localStorage.getItem('composebox-session-id');
        if (!sessionId) {
            sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('composebox-session-id', sessionId);
        }
        console.log('Current session ID:', sessionId);
        return sessionId;
    };

    // Load saved code from localStorage on component mount
    useEffect(() => {
        const sessionId = getSessionId();
        const savedCode = localStorage.getItem(`composebox-saved-code-${sessionId}`);
        if (savedCode) {
            setCode(savedCode);
        }
    }, []);

    // Auto-save code to localStorage
    useEffect(() => {
        const sessionId = getSessionId();
        localStorage.setItem(`composebox-saved-code-${sessionId}`, code);
    }, [code]);

    // Keyboard shortcut handler
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Ctrl+S (Windows/Linux) or Cmd+S (Mac)
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault(); // Prevent default save behavior
                if (!isCompiling) {
                    compileAndRunCode();
                }
            }
        };

        // Add event listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCompiling]); // Re-run when isCompiling changes

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsResizing(true);
        e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

        // Limit resize between 20% and 80%
        if (newWidth >= 20 && newWidth <= 80) {
            setEditorWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isResizing]);

    const compileAndRunCode = async () => {
        setIsCompiling(true);
        setError(null);
        setErrorDetail(null); // Clear previous error details
        setIframeError(false); // Reset iframe error when compiling
        setBuildStep(0);
        setBuildProgress('Preparing build...');

        try {
            setBuildStep(1);
            setBuildProgress('Compiling Kotlin code...');

            // Simulate progress during compilation
            const progressInterval = setInterval(() => {
                setBuildStep(prev => {
                    if (prev < 2) return prev + 0.5;
                    return prev;
                });
            }, 1000);

            const response = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Include cookies for session management
                body: JSON.stringify({ code: code }),
            });

            clearInterval(progressInterval);

            if (!response.ok) {
                const err = await response.json();
                setError(err.error || 'Failed to compile');
                setErrorDetail(err.detail || null); // Store detail error
            } else {
                setBuildStep(2);
                setBuildProgress('Building WASM...');

                // Simulate WASM build progress
                const wasmProgressInterval = setInterval(() => {
                    setBuildStep(prev => {
                        if (prev < 3) return prev + 0.3;
                        return prev;
                    });
                }, 800);

                const result = await response.json();

                clearInterval(wasmProgressInterval);

                if (result.url) {
                    setBuildStep(3);
                    setBuildProgress('Copying files...');

                    // Simulate file copying
                    setTimeout(() => {
                        setBuildStep(4);
                        setBuildProgress('Build completed!');

                        setPreviewUrl(result.url); // Set URL unik dari backend
                        setIframeKey(prev => prev + 1);

                        // Clear progress after 2 seconds
                        setTimeout(() => {
                            setBuildProgress('');
                            setBuildStep(0);
                        }, 2000);
                    }, 500);
                }
            }
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsCompiling(false);
        }
    };

    const handleIframeError = () => {
        setIframeError(true);
    };

    const handleIframeLoad = () => {
        setIframeError(false);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header isCompiling={isCompiling} onRunCode={compileAndRunCode} />
            
            {/* Desktop Layout (lg and above) */}
            <div
                ref={containerRef}
                className={`hidden lg:flex flex-1 ${isResizing ? 'cursor-col-resize select-none' : 'cursor-default select-auto'}`}
            >
                {/* Editor Panel */}
                <div 
                    className="flex flex-col min-w-[200px] border-r border-border-color"
                    style={{ width: `${editorWidth}%` }}
                >
                    <div className="relative flex-1 flex flex-col">
                        <CodeEditor code={code} onChange={handleCodeChange} />
                        <ProgressIndicator 
                            isCompiling={isCompiling}
                            buildProgress={buildProgress}
                            buildStep={buildStep}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 m-2.5">
                            Error: {error}
                            {errorDetail && <div className="text-xs text-red-200 mt-1">Detail: {errorDetail}</div>}
                        </div>
                    )}
                </div>

                {/* Resizer */}
                <Resizer onMouseDown={handleMouseDown} isResizing={isResizing} />

                {/* Preview Panel */}
                <div className="flex-1 p-5 bg-zinc-800 text-white overflow-auto min-w-[200px]">
                    <PreviewModeSelector 
                        previewMode={previewMode} 
                        onModeChange={setPreviewMode} 
                    />

                    <div className="min-h-[400px] text-black p-2.5 overflow-auto">
                        {error ? (
                            <ErrorDisplay 
                                error={error}
                                errorDetail={errorDetail}
                                isCompiling={isCompiling}
                                onTryAgain={compileAndRunCode}
                            />
                        ) : iframeError || previewUrl === '' ? (
                            previewMode === 'mobile' ? (
                                <MobilePreview
                                    previewUrl={previewUrl}
                                    iframeKey={iframeKey}
                                    isCompiling={isCompiling}
                                    buildProgress={buildProgress}
                                    buildStep={buildStep}
                                    onRunCode={compileAndRunCode}
                                    onIframeError={handleIframeError}
                                    onIframeLoad={handleIframeLoad}
                                />
                            ) : (
                                <DesktopPreview
                                    previewUrl={previewUrl}
                                    iframeKey={iframeKey}
                                    isCompiling={isCompiling}
                                    buildProgress={buildProgress}
                                    buildStep={buildStep}
                                    onRunCode={compileAndRunCode}
                                    onIframeError={handleIframeError}
                                    onIframeLoad={handleIframeLoad}
                                />
                            )
                        ) : previewMode === 'mobile' ? (
                            <MobilePreview
                                previewUrl={previewUrl}
                                iframeKey={iframeKey}
                                isCompiling={isCompiling}
                                buildProgress={buildProgress}
                                buildStep={buildStep}
                                onRunCode={compileAndRunCode}
                                onIframeError={handleIframeError}
                                onIframeLoad={handleIframeLoad}
                            />
                        ) : (
                            <DesktopPreview
                                previewUrl={previewUrl}
                                iframeKey={iframeKey}
                                isCompiling={isCompiling}
                                buildProgress={buildProgress}
                                buildStep={buildStep}
                                onRunCode={compileAndRunCode}
                                onIframeError={handleIframeError}
                                onIframeLoad={handleIframeLoad}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below lg) */}
            <div className="lg:hidden flex flex-col flex-1">
                {/* Editor Panel */}
                <div className="flex flex-col border-b border-border-color" style={{ height: '60%' }}>
                    <div className="relative flex-1 flex flex-col min-h-0">
                        <CodeEditor code={code} onChange={handleCodeChange} />
                        <ProgressIndicator 
                            isCompiling={isCompiling}
                            buildProgress={buildProgress}
                            buildStep={buildStep}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 m-2.5">
                            Error: {error}
                            {errorDetail && <div className="text-xs text-red-200 mt-1">Detail: {errorDetail}</div>}
                        </div>
                    )}
                </div>

                {/* Preview Panel */}
                <div className="flex-1 p-3 bg-zinc-800 text-white overflow-auto">
                    <PreviewModeSelector 
                        previewMode={previewMode} 
                        onModeChange={setPreviewMode} 
                    />

                    <div className="min-h-[300px] text-black p-2 overflow-auto">
                        {error ? (
                            <ErrorDisplay 
                                error={error}
                                errorDetail={errorDetail}
                                isCompiling={isCompiling}
                                onTryAgain={compileAndRunCode}
                            />
                        ) : iframeError || previewUrl === '' ? (
                            previewMode === 'mobile' ? (
                                <MobilePreview
                                    previewUrl={previewUrl}
                                    iframeKey={iframeKey}
                                    isCompiling={isCompiling}
                                    buildProgress={buildProgress}
                                    buildStep={buildStep}
                                    onRunCode={compileAndRunCode}
                                    onIframeError={handleIframeError}
                                    onIframeLoad={handleIframeLoad}
                                />
                            ) : (
                                <DesktopPreview
                                    previewUrl={previewUrl}
                                    iframeKey={iframeKey}
                                    isCompiling={isCompiling}
                                    buildProgress={buildProgress}
                                    buildStep={buildStep}
                                    onRunCode={compileAndRunCode}
                                    onIframeError={handleIframeError}
                                    onIframeLoad={handleIframeLoad}
                                />
                            )
                        ) : previewMode === 'mobile' ? (
                            <MobilePreview
                                previewUrl={previewUrl}
                                iframeKey={iframeKey}
                                isCompiling={isCompiling}
                                buildProgress={buildProgress}
                                buildStep={buildStep}
                                onRunCode={compileAndRunCode}
                                onIframeError={handleIframeError}
                                onIframeLoad={handleIframeLoad}
                            />
                        ) : (
                            <DesktopPreview
                                previewUrl={previewUrl}
                                iframeKey={iframeKey}
                                isCompiling={isCompiling}
                                buildProgress={buildProgress}
                                buildStep={buildStep}
                                onRunCode={compileAndRunCode}
                                onIframeError={handleIframeError}
                                onIframeLoad={handleIframeLoad}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 