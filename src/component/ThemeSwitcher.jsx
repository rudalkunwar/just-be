import { Moon, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div>
            {
                theme === 'light' ? (
                    <button className='bg-gray-900 p-2 shadow-lg rounded-full' onClick={toggleTheme}>
                        <Moon className="text-white" />
                    </button>
                ) : (
                    <button className='bg-white p-2 shadow-lg rounded-full' onClick={toggleTheme}>
                        <Sun className="text-black" />
                    </button>
                )
            }
        </div>
    )
}

export default ThemeSwitcher