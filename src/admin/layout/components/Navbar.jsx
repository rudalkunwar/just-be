import { BellIcon, User } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <div className='bg-green-200 py-4'>
            <div className='flex justify-between items-center'>
                <div className='mx-12'>
                    <input className='px-2 py-1 rounded-md' placeholder='Search........' type="text" />
                </div>
                <div className='flex gap-4 justify-between items-center mx-4'>
                    <button><BellIcon /> </button>
                    <button><User /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar