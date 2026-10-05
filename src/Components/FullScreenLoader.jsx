import React, { useEffect } from 'react';

/**
 * FullScreenLoader Component
 * 
 * @param {boolean|boolean[]} isVisible - Single boolean state or an array of states (e.g., [isFetching, isSubmitting])
 * @param {string} message - Custom loading text displayed under the spinner
 */
const FullScreenLoader = ({ isVisible = false, message = "Loading, please wait..." }) => {
  // Determine if loading is active (handles both boolean and array of booleans)
  const showLoader = Array.isArray(isVisible)
    ? isVisible.some(Boolean)
    : Boolean(isVisible);

  // Prevent background scrolling when the loader is active
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      aria-busy="true"
      aria-live="polite"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-100 dark:border-gray-700 max-w-xs w-full mx-4 text-center">
        
        {/* Spinner Animation */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Glow */}
          <div className="absolute w-16 h-16 rounded-full bg-blue-500/20 animate-ping"></div>
          
          {/* Spinning Ring */}
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 dark:border-blue-900 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>

        {/* Loading Message */}
        <p className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-200 animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
};

export default FullScreenLoader;