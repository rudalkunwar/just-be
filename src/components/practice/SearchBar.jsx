import React, { useState } from 'react'

function SearchBar() {
    const [text, setText] = useState('');
    const listItem = ['Apple', 'Mango', 'Orange', 'Banana', 'Pineapple', 'Grapes', 'Papaya'];

    const filterItem = listItem.filter(item => item.toLocaleLowerCase().includes(text.toLowerCase()));
    return (
        <div className='h-screen flex flex-col gap-4 justify-center items-center'>
            <div>
                <span className='text-white'>Search</span>
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='px-4 py-2 rounded-xl outline-none focus:outline-green-300' />
            <div >
                <ul>
                    {
                        filterItem.map((fruit, index) => (
                            <li key={index} className='text-white'>{fruit}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default SearchBar