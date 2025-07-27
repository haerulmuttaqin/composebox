import React from 'react';

interface ProgressIndicatorProps {
    isCompiling: boolean;
    buildProgress: string;
    buildStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
    isCompiling, 
    buildProgress, 
    buildStep 
}) => {
    const getProgressPercentage = () => {
        if (buildStep === 0) return 0;
        if (buildStep <= 1) return Math.min(buildStep * 25, 25);
        if (buildStep <= 2) return 25 + Math.min((buildStep - 1) * 35, 35);
        if (buildStep <= 3) return 60 + Math.min((buildStep - 2) * 25, 25);
        if (buildStep <= 4) return 85 + Math.min((buildStep - 3) * 15, 15);
        return 100;
    };

    if (!isCompiling) return null;

    return (
        <div className="absolute left-0 right-0 bottom-0 px-2.5 pt-2 pb-0 bg-transparent border-t-0 border-b border-white/10 w-full z-10">
            <div className="flex items-center mb-1.5">
                <div className="w-3 h-3 border-[1.5px] border-white/30 border-t-cyan-400 rounded-full animate-spin mr-1.5"></div>
                <span className="text-xs text-white/80">{buildProgress}</span>
            </div>
            <div className="w-full h-0.5 bg-white/10 rounded-sm overflow-hidden">
                <div 
                    className="h-full bg-cyan-400 transition-all duration-300 ease-in-out rounded-sm"
                    style={{ width: `${getProgressPercentage()}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressIndicator; 