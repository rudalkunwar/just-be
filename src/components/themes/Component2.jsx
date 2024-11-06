// Component2.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function Component2() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="h-full w-full bg-yellow-200 dark:text-white dark:bg-gray-800">
            Component2
        </div>
    );
}

export default Component2;