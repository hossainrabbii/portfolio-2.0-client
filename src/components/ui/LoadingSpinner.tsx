import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <div
        className="w-12 h-12 border-4 border-t-blue-500 border-b-blue-500 border-l-gray-300 border-r-gray-300 rounded-full animate-spin
                   dark:border-t-blue-400 dark:border-b-blue-400 dark:border-l-gray-600 dark:border-r-gray-600"
      ></div>
    </div>
  );
};

export default LoadingSpinner;
