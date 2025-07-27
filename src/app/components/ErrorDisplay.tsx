import React from 'react';

interface ErrorDisplayProps {
    error: string | null;
    errorDetail: string | null;
    isCompiling: boolean;
    onTryAgain: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
    error, 
    errorDetail, 
    isCompiling, 
    onTryAgain 
}) => {
    if (!error) return null;

    return (
        <div className="flex flex-col items-center justify-center h-[500px] bg-red-50 border-2 border-red-500 rounded-lg p-5 text-center">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <svg fill="#f44336" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <title>error-solid</title> 
                        <path d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"></path> 
                        <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> 
                    </g>
                </svg>
            </div>
            <h3 className="text-red-700 m-0 mb-3 text-lg font-semibold">
                Compilation Error
            </h3>
            <p className="text-gray-600 m-0 mb-4 text-sm max-w-md">
                Your code couldn't be compiled. Please check the error details below and fix the issues.
            </p>
            <div className="bg-white border border-red-200 rounded-md p-4 font-mono text-sm text-red-700 text-left max-w-full w-full max-h-[400px] overflow-auto whitespace-pre-wrap break-words leading-relaxed">
                <div className="mb-2 font-semibold border-b border-red-200 pb-1">
                    Error Details:
                </div>
                {error}
                {errorDetail && (
                    <div className="mt-3 pt-3 border-t border-red-200">
                        <div className="font-semibold mb-1 text-red-800">
                            Additional Details:
                        </div>
                        <div className="text-xs text-red-700 bg-orange-50 p-2 rounded border border-yellow-400">
                            {errorDetail}
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-4 flex gap-3 items-center">
                <button
                    onClick={onTryAgain}
                    className="flex items-center gap-1.5 bg-green-500 border-none rounded-full px-4 py-2 font-semibold text-white cursor-pointer text-sm shadow-md transition-colors duration-200 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isCompiling}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" fill="white"/>
                    </svg>
                    Try Again
                </button>
                <span className="text-xs text-gray-600">
                    Fix the errors and click "Try Again"
                </span>
            </div>
        </div>
    );
};

export default ErrorDisplay; 