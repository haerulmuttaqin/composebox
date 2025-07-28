import React, { useState, useEffect } from 'react';
import ReadyToRunInfo from './ReadyToRunInfo';

interface MobilePreviewProps {
    previewUrl: string;
    iframeKey: number;
    isCompiling: boolean;
    buildProgress: string;
    buildStep: number;
    onRunCode: () => void;
    onIframeError: () => void;
    onIframeLoad: () => void;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({
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
        <div className="flex justify-center items-center h-full min-h-[400px] p-5">
            <div className="relative w-[375px] h-[667px] bg-zinc-700 rounded-4xl p-2 shadow-2xl border border-border-color">
                {/* Device Frame - Notch */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-15 h-1 bg-gray-600 rounded-sm z-10" />
                
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 bg-black flex justify-between items-center px-6 text-xs text-white font-semibold relative z-10">
                        {/* Left side - Time */}
                        <div className="flex items-center gap-1">
                            <span>9:41</span>
                        </div>
                        
                        {/* Right side - Battery and Signal */}
                        <div className="flex items-center gap-1">
                            {/* Signal */}
                            <div className="flex items-end gap-px h-2">
                                <div className="w-0.5 h-1 bg-white rounded-sm" />
                                <div className="w-0.5 h-1.5 bg-white rounded-sm" />
                                <div className="w-0.5 h-2 bg-white rounded-sm" />
                            </div>
                            
                            {/* WiFi */}
                            <div className="w-3 h-2 relative">
                                <svg width="12" height="8" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="white" strokeWidth="1.5" fill="none"/>
                                    <path d="M12 6C10.34 6 9 7.34 9 9c0 2.5 3 6 3 6s3-3.5 3-6c0-1.66-1.34-3-3-3z" stroke="white" strokeWidth="1.5" fill="none"/>
                                </svg>
                            </div>
                            
                            {/* Battery */}
                            <div className="w-4 h-2 border border-white rounded-sm relative flex items-center">
                                <div className="w-3 h-1 bg-white mx-px rounded-sm" />
                                <div className="w-px h-1.5 bg-white absolute -right-0.5 top-0.5" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Area */}
                    {isReadyToRun ? (
                        <div className="flex-1 flex items-center justify-center">
                            <ReadyToRunInfo
                                isCompiling={isCompiling}
                                buildProgress={buildProgress}
                                buildStep={buildStep}
                                onRunCode={onRunCode}
                            />
                        </div>
                    ) : (
                        /* Iframe Content */
                        <div className="flex-1 relative">
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
                                onError={(e) => {
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
                
                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-30 h-1 bg-gray-600 rounded-sm z-10" />
            </div>
        </div>
    );
};

export default MobilePreview; 