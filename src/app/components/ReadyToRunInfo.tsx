import React from 'react';

interface ReadyToRunInfoProps {
    isCompiling: boolean;
    buildProgress: string;
    buildStep: number;
    onRunCode: () => void;
}

const ReadyToRunInfo: React.FC<ReadyToRunInfoProps> = ({
    isCompiling,
    buildProgress,
    buildStep,
    onRunCode
}) => {
    const getProgressPercentage = () => {
        if (buildStep === 0) return 0;
        if (buildStep <= 1) return Math.min(buildStep * 25, 25);
        if (buildStep <= 2) return 25 + Math.min((buildStep - 1) * 35, 35);
        if (buildStep <= 3) return 60 + Math.min((buildStep - 2) * 25, 25);
        if (buildStep <= 4) return 85 + Math.min((buildStep - 3) * 15, 15);
        return 100;
    };

    return (
        <div className="flex flex-col items-center justify-center p-5 text-center h-full">
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#e3f2fd" stroke="#2b7fff" strokeWidth="1.7" />
                    <path d="M12 9v3M12 15h.01" stroke="#2b7fff" transform="rotate(180 12 12)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h3 className="text-blue-500 m-0 mb-3 text-lg font-semibold">
                {isCompiling ? 'Compiling...' : 'Ready to Run'}
            </h3>
            <p className="text-gray-600 m-0 mb-5 text-sm max-w-[280px]">
                {isCompiling
                    ? 'Please wait while your code is being compiled...'
                    : 'Click the "Run Code" button in the header to compile and see your Compose UI in action.'
                }
            </p>

            {/* Progress indicator saat compiling */}
            {isCompiling && (
                <div className="w-full max-w-[280px] mb-5">
                    <div className="flex items-center mb-1.5 justify-center">
                        <div className="w-3.5 h-3.5 border-2 border-blue-300 border-t-blue-500 rounded-full animate-spin mr-2"></div>
                        <span className="text-sm text-blue-600">{buildProgress}</span>
                    </div>
                    <div className="w-full h-0.5 bg-blue-200 rounded-sm overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300 ease-in-out rounded-sm"
                            style={{ width: `${getProgressPercentage()}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <button
                onClick={onRunCode}
                className={`flex items-center gap-2 rounded-full pl-2 pr-4 py-1 font-semibold text-white text-sm shadow-md transition-colors duration-200 ${isCompiling
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-500 cursor-pointer hover:bg-green-600'
                    }`}
                disabled={isCompiling}
                title="Run Code (Ctrl+S / Cmd+S)"
            >
                {isCompiling ? (
                    <>
                        <svg width="1" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="#FFFFFF" />
                        </svg>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Compiling...
                    </>
                ) : (
                    <>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="#FFFFFF" />
                        </svg>
                        Run Code
                    </>
                )}
            </button>
        </div>
    );
};

export default ReadyToRunInfo; 