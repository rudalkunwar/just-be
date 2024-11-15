import React, { useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0);
    const startTime = () => {

    }

    const stopTime = () => {

    }
    
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='h-1/2 w-full mx-10 shadow-lg bg-cyan-200 rounded-md'>
                <div className='h-full flex justify-center items-center'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className='h-48 w-48 bg-green-300 rounded-full flex justify-center items-center border-2 border-black'>
                                <p>
                                    {time}
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-2 rounded-md bg-blue-600 text-white' onClick={startTime}>Start</button>
                        <button className='px-4 py-2 rounded-md bg-red-600 text-white' onClick={stopTime}>Stop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch