import React from 'react';

interface PreviewModeSelectorProps {
    previewMode: 'mobile' | 'desktop';
    onModeChange: (mode: 'mobile' | 'desktop') => void;
}

const PreviewModeSelector: React.FC<PreviewModeSelectorProps> = ({ 
    previewMode, 
    onModeChange 
}) => {
    return (
        <div className="flex items-center mb-4 gap-2">
            <span className="text-sm text-gray-300">Preview:</span>
            <div className="flex bg-zinc-800 rounded-lg p-1 border border-zinc-700">
                <button
                    onClick={() => onModeChange('mobile')}
                    className={`px-3 py-2 text-xs border-none rounded-md cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                        previewMode === 'mobile' 
                            ? 'bg-blue-500 text-white font-medium shadow-sm' 
                            : 'bg-transparent text-zinc-400 font-normal hover:text-zinc-300'
                    }`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Mobile
                </button>
                <button
                    onClick={() => onModeChange('desktop')}
                    className={`px-3 py-2 text-xs border-none rounded-md cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                        previewMode === 'desktop' 
                            ? 'bg-blue-500 text-white font-medium shadow-sm' 
                            : 'bg-transparent text-zinc-400 font-normal hover:text-zinc-300'
                    }`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Desktop/Web
                </button>
            </div>
        </div>
    );
};

export default PreviewModeSelector; 