import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

function Input({ value, label, type = 'text', onChange, className = '' }) {
    const [inputType, setInputType] = useState(type);
    return (
        <div className='p-2 my-1 rounded-md'>
            <label htmlFor={label} className='block py-1'>{label}</label>
            <div className='flex relative'>
                <input id={label} value={value} onChange={(e) => onChange(e.target.value)} className={`py-1 px-2 rounded-md border-2 border-indigo-400/40 outline-indigo-700 ${className}`} placeholder={`Enter ${label}`} type={inputType} />
                {
                    type === 'password' && (
                        inputType === 'text' ?
                            (<EyeOff className='absolute right-1 top-1.5 z-10' onClick={() => setInputType((prev) => (prev === 'text' ? 'password' : 'text'))} />)
                            :
                            (< Eye className='absolute right-1 top-1.5 z-10' onClick={() => setInputType((prev) => (prev === 'text' ? 'password' : 'text'))} />)
                    )
                }
            </div>
        </div>
    )
}

export default Input