import React from 'react'

function Input({ label, type = 'text' }) {
    return (
        <div className='p-2 my-1 rounded-md'>
            <label htmlFor={label} className='block py-1'>{label}</label>
            <input id={label} className='py-1 px-2 rounded-md border-2 border-indigo-400 outline-indigo-700' placeholder={`Enter ${label}`} type={type} />
            
        </div>
    )
}

export default Input