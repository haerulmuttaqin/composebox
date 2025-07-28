import React from 'react';

interface ResizerProps {
    onMouseDown: (e: React.MouseEvent) => void;
    isResizing: boolean;
}

const Resizer: React.FC<ResizerProps> = ({ onMouseDown }) => {
    return (
        <div
            className="w-1 bg-zinc-800 cursor-col-resize relative flex items-center justify-center transition-colors duration-200 hover:bg-cyan-600"
            onMouseDown={onMouseDown}
        >
            <div className="w-0.5 h-10 bg-gray-500 rounded-sm" />
        </div>
    );
};

export default Resizer; 