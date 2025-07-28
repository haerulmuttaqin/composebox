import React, { useState, useEffect } from 'react';
import ReadyToRunInfo from './ReadyToRunInfo';

interface DesktopPreviewProps {
    previewUrl: string;
    iframeKey: number;
    isCompiling: boolean;
    buildProgress: string;
    buildStep: number;
    onRunCode: () => void;
    onIframeError: () => void;
    onIframeLoad: () => void;
}

const DesktopPreview: React.FC<DesktopPreviewProps> = ({
    previewUrl,
    iframeKey,
    isCompiling,
    buildProgress,
    buildStep,
    onRunCode,
    onIframeError,
    onIframeLoad
}) => {
    const isReadyToRun = previewUrl === '/compose-output/index.html' || previewUrl === '';
    const [isIframeLoading, setIsIframeLoading] = useState<boolean>(false);

    // Reset loading state when previewUrl changes
    useEffect(() => {
        if (!isReadyToRun) {
            setIsIframeLoading(true);
        }
    }, [previewUrl, isReadyToRun]);

    return (
        <div className="flex justify-center items-center h-[500px] p-5">
            <div className="w-full max-w-[70vw] h-[460px] bg-gray-200 rounded-lg shadow-2xl border border-gray-300 overflow-hidden">
                {/* Title Bar */}
                <div className="h-8 bg-gray-300 border-b border-gray-400 flex items-center justify-between px-3 text-xs text-gray-800 font-medium select-none">
                    {/* Window Controls */}
                    <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600" />
                        <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600" />
                    </div>
                    
                    {/* Window Title */}
                    <div className="flex-1 text-center ml-10">
                        Compose Preview
                    </div>
                    
                    {/* Spacer for centering */}
                    <div className="w-15" />
                </div>
                
                {/* Content Area */}
                <div className={`h-[calc(100%-32px)] relative ${
                    isReadyToRun 
                        ? 'bg-gray-100 flex items-center justify-center' 
                        : 'block'
                }`}>
                    {isReadyToRun ? (
                        <ReadyToRunInfo
                            isCompiling={isCompiling}
                            buildProgress={buildProgress}
                            buildStep={buildStep}
                            onRunCode={onRunCode}
                        />
                    ) : (
                        <div className="relative w-full h-full">
                            {/* Loading Overlay */}
                            {isIframeLoading && (
                                <div className="absolute inset-0 bg-white flex items-center justify-center z-20">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                                        <span className="text-sm text-gray-600">Loading preview...</span>
                                    </div>
                                </div>
                            )}
                            
                            <iframe
                                key={iframeKey}
                                src={previewUrl}
                                className="w-full h-full border-none bg-white"
                                sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups allow-downloads"
                                title="Compose WASM Preview"
                                onError={() => {
                                    setIsIframeLoading(false);
                                    onIframeError();
                                }}
                                onLoad={() => {
                                    setIsIframeLoading(false);
                                    onIframeLoad();
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DesktopPreview; 