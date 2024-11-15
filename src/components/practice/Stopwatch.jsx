import React from 'react'

function Stopwatch() {
    return (
        <div className='h-screen flex justify-center items-center'>

            <div className='h-1/2 w-full mx-10 shadow-lg bg-cyan-200 rounded-md'>
                <div className='h-full flex justify-center items-center'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className='h-48 w-48 bg-green-300 rounded-full flex justify-center items-center border-2 border-black'>
                                <p>
                                    8 : 45
                                </p>
                            </div>
                        </div>
                        <button className='px-4 py-2 rounded-md bg-blue-600 text-white'>Start</button>
                        <button className='px-4 py-2 rounded-md bg-red-600 text-white'>Stop</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Stopwatch