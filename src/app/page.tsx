'use client';

import React, { useState } from 'react';
import CodeEditor from './components/Editor';

export default function HomePage() {

    const initialCode = `import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

fun main() {
    renderComposable(rootElementId = "root") {
        Div {
            Text("Hello from Compose Playground!")
            P { Text("Start coding here..." ) }
        }
    }
}
`;

    const [code, setCode] = useState<string>(initialCode);
    const [previewContent, setPreviewContent] = useState<string>('Rendered UI will appear here.');
    const [iframeKey, setIframeKey] = useState<number>(0); // Untuk force reload iframe

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
        // Nantinya di sini kita akan trigger kompilasi ke backend
        // Untuk MVP, kita bisa biarkan kosong dulu atau log perubahannya
        console.log("Code changed:", value);
    };

    const compileAndRunCode = async () => {
        setPreviewContent('Compiling code...');
        try {
            const response = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            });
            if (!response.ok) {
                const err = await response.json();
                setPreviewContent('Error: ' + (err.error || 'Failed to compile'));
                return;
            }
            const result = await response.json();
            if (result.url) {
                setPreviewContent(result.url);
                setIframeKey(prev => prev + 1);
            } else {
                setPreviewContent('No HTML output from backend.');
            }
        } catch (e: any) {
            setPreviewContent('Error: ' + e.message);
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            <header style={{ padding: '10px 20px', borderBottom: '1px solid #333', backgroundColor: '#282c34', color: 'white' }}>
                <h1>Compose Playground</h1>
            </header>
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ flex: 1, borderRight: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
                    <CodeEditor code={code} onChange={handleCodeChange} />
                    <button
                        onClick={compileAndRunCode}
                        style={{
                            padding: '10px 20px',
                            margin: '10px',
                            backgroundColor: '#61dafb',
                            color: 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Run Code
                    </button>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: '#282c34', color: 'white', overflow: 'auto' }}>
                    <h2>Live Preview</h2>
                    {/* Tampilkan hasil kompilasi Compose Web di iframe */}
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
                        {previewContent.startsWith('/compose-output') ? (
                            <iframe
                                key={iframeKey}
                                src={previewContent}
                                style={{ width: '100%', height: '400px', border: 'none', background: 'white' }}
                                sandbox="allow-scripts allow-same-origin"
                                title="Compose Web Preview"
                            />
                        ) : (
                            <div>{previewContent}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}