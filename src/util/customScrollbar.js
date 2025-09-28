const scrollbarTypes = {
    default: `
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
    `,
    
    thin: `
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-gray-50
        [&::-webkit-scrollbar-thumb]:bg-gray-400
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-500
        dark:[&::-webkit-scrollbar-track]:bg-neutral-800
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600
    `,
    
    thick: `
        [&::-webkit-scrollbar]:w-4
        [&::-webkit-scrollbar-track]:rounded-lg
        [&::-webkit-scrollbar-track]:bg-gray-200
        [&::-webkit-scrollbar-thumb]:rounded-lg
        [&::-webkit-scrollbar-thumb]:bg-gray-400
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-500
        dark:[&::-webkit-scrollbar-track]:bg-neutral-600
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400
    `,
    
    colorful: `
        [&::-webkit-scrollbar]:w-3
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-blue-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-blue-400
        [&::-webkit-scrollbar-thumb]:hover:bg-blue-500
        dark:[&::-webkit-scrollbar-track]:bg-blue-900
        dark:[&::-webkit-scrollbar-thumb]:bg-blue-600
    `,
    
    minimal: `
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-400
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-600
        dark:[&::-webkit-scrollbar-thumb]:hover:bg-neutral-500
    `
};

export const getScrollbarClass = (type = 'default') => {
    return scrollbarTypes[type]?.replace(/\s+/g, ' ').trim() || scrollbarTypes.default;
};

export const scrollbarTypesList = Object.keys(scrollbarTypes);

// Usage in JSX:
// import { getScrollbarClass } from './util/customScrollbar.js';
// const className = getScrollbarClass('thin');
