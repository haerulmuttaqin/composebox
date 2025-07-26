'use client';

import React, { useState } from 'react';
import CodeEditor from './components/Editor';

export default function HomePage() {
    const initialCode = `package org.example.project

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.safeContentPadding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import org.jetbrains.compose.resources.painterResource

import compose_compiler.composeapp.generated.resources.Res
import compose_compiler.composeapp.generated.resources.compose_multiplatform

@Composable
fun App() {
    MaterialTheme {
        var showContent by remember { mutableStateOf(false) }
        Column(
            modifier = Modifier
                .safeContentPadding()
                .fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Button(onClick = { showContent = !showContent }) {
                Text("Click me!")
            }
            AnimatedVisibility(showContent) {
                val greeting = remember { Greeting().greet() }
                Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                    Image(painterResource(Res.drawable.compose_multiplatform), null)
                    Text("Compose: $greeting")
                }
            }
        }
    }
}
`;

    const [code, setCode] = useState<string>(initialCode);
    const [iframeKey, setIframeKey] = useState<number>(0);
    const [isCompiling, setIsCompiling] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('/compose-output/index.html');
    const [buildProgress, setBuildProgress] = useState<string>('');
    const [buildStep, setBuildStep] = useState<number>(0);

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const compileAndRunCode = async () => {
        setIsCompiling(true);
        setError(null);
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
                body: JSON.stringify({ code: code }),
            });
            
            clearInterval(progressInterval);
            
            if (!response.ok) {
                const err = await response.json();
                setError(err.error || 'Failed to compile');
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

    const getProgressPercentage = () => {
        if (buildStep === 0) return 0;
        if (buildStep <= 1) return Math.min(buildStep * 25, 25);
        if (buildStep <= 2) return 25 + Math.min((buildStep - 1) * 35, 35);
        if (buildStep <= 3) return 60 + Math.min((buildStep - 2) * 25, 25);
        if (buildStep <= 4) return 85 + Math.min((buildStep - 3) * 15, 15);
        return 100;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <header style={{ 
                padding: '10px 20px', 
                borderBottom: '1px solid #333', 
                backgroundColor: '#282c34', 
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1>Compose Playground (WASM)</h1>
                <button
                    onClick={compileAndRunCode}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: isCompiling ? '#bdbdbd' : '#fff',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '6px 16px 6px 10px',
                        fontWeight: 600,
                        color: isCompiling ? '#888' : '#222',
                        cursor: isCompiling ? 'not-allowed' : 'pointer',
                        fontSize: '15px',
                        boxShadow: isCompiling ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
                        transition: 'background 0.2s',
                        outline: 'none',
                    }}
                    disabled={isCompiling}
                >
                    {isCompiling ? (
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{
                                width: '16px',
                                height: '16px',
                                border: '2px solid #bdbdbd',
                                borderTop: '2px solid #4CAF50',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite',
                                marginRight: '6px',
                            }} />
                            Building...
                        </span>
                    ) : (
                        <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="#4CAF50"/>
                            </svg>
                            Run
                        </>
                    )}
                </button>
            </header>
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ flex: 1, borderRight: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1, paddingBottom: '32px' }}>
                            <CodeEditor code={code} onChange={handleCodeChange} />
                        </div>
                        {/* Loading Indicator with Progress Bar - Absolute at bottom of editor */}
                        {isCompiling && (
                            <div style={{ 
                                position: 'absolute', 
                                left: 0, 
                                right: 0, 
                                bottom: 0, 
                                padding: '8px 10px 0 10px', 
                                backgroundColor: 'transparent', 
                                borderTop: 'none',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                width: '100%',
                                zIndex: 2
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                                    <div style={{ 
                                        width: '12px', 
                                        height: '12px', 
                                        border: '1.5px solid rgba(255,255,255,0.3)', 
                                        borderTop: '2px solid #61dafb', 
                                        borderRadius: '50%', 
                                        animation: 'spin 1s linear infinite',
                                        marginRight: '6px'
                                    }}></div>
                                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{buildProgress}</span>
                                </div>
                                <div style={{ 
                                    width: '100%', 
                                    height: '2px', 
                                    backgroundColor: 'rgba(255,255,255,0.1)', 
                                    borderRadius: '1px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ 
                                        width: `${getProgressPercentage()}%`, 
                                        height: '100%', 
                                        backgroundColor: '#61dafb', 
                                        transition: 'width 0.3s ease',
                                        borderRadius: '1px'
                                    }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                    {error && <div style={{ color: 'red', margin: '10px' }}>Error: {error}</div>}
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: '#282c34', color: 'white', overflow: 'auto' }}>
                    <h2>Live Preview</h2>
                    <div
                        style={{
                            border: '1px solid #61dafb',
                            minHeight: '400px',
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '10px',
                            overflow: 'auto',
                        }}
                    >
                        <iframe
                            key={iframeKey}
                            src={previewUrl} // Use dynamic URL
                            style={{ width: '100%', height: '400px', border: 'none', background: 'white' }}
                            sandbox="allow-scripts allow-same-origin"
                            title="Compose WASM Preview"
                        />
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
