import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-80 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="relative">
                <div className="animate-spin border-4 border-t-transparent w-12 h-12 rounded-full border-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="animate-ping absolute inset-0 border-4 border-blue-300 w-12 h-12 rounded-full opacity-30"></div>
                <div className="mt-4 text-center">
                    <p className="text-sm font-medium text-gray-600 animate-pulse">Enhancing your image...</p>
                </div>
            </div>
        </div>
    );
};
export default Loading;