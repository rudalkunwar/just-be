import React from 'react'
import { useTheme } from '../../hooks/useTheme'

function Component1() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="h-full w-full bg-pink-200 dark:text-white dark:bg-black">Component1</div>
    )
}

export default Component1