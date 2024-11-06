import React, { useContext } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { ThemeContext } from '../../contexts/ThemeContext'

function Theme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <div className='py-10 flex justify-center'>
                <button className='bg-blue-600 px-2 py-2 rounded-md text-white' onClick={() => toggleTheme(!theme)}>{theme}</button>
            </div>
            <div className='h-screen flex'>
                <div className='w-1/2'>
                    <Component1 />
                </div>
                <div className='w-1/2'>
                    <Component2 />
                </div >
            </div>
        </>
    )
}

export default Theme