import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [timer, setTimer] = useState(null); // Holds the interval ID

    const startTime = () => {
        if (timer) return; // Prevent multiple intervals
        const interval = setInterval(() => {
            setSec((prevSec) => {
                if (prevSec === 59) {
                    setMin((prevMin) => {
                        if (prevMin === 59) {
                            setHour((prevHour) => prevHour + 1);
                            return 0;
                        }
                        return prevMin + 1;
                    });
                    return 0;
                }
                return prevSec + 1;
            });
        }, 1000);
        setTimer(interval); // Save the interval ID
    };

    const stopTime = () => {
        clearInterval(timer); // Stop the interval
        setTimer(null); // Reset the timer ID
    };

    const resetTime = () => {
        stopTime(); // Stop the timer
        setSec(0);
        setMin(0);
        setHour(0);
    };

    useEffect(() => {
        return () => clearInterval(timer); // Cleanup on unmount
    }, [timer]);

    return (
        <div className='h-screen flex justify-center items-center bg-gray-600'>
            <div className='h-1/2 w-full mx-10 shadow-lg bg-cyan-800 rounded-md'>
                <div className='h-full flex justify-center items-center'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className='h-48 w-48 bg-green-300 rounded-full flex justify-center items-center border-2 border-pink-800'>
                                <span className='px-2'>{String(hour).padStart(2, '0')}</span>:
                                <span className='px-2'>{String(min).padStart(2, '0')}</span>:
                                <span className='px-2'>{String(sec).padStart(2, '0')}</span>
                            </div>
                        </div>
                        <button className='px-4 py-2 rounded-md bg-blue-600 text-white' onClick={startTime}>
                            Start
                        </button>
                        <button className='px-4 py-2 rounded-md bg-red-600 text-white' onClick={stopTime}>
                            Stop
                        </button>
                        <button className='px-4 py-2 rounded-md bg-yellow-600 text-white' onClick={resetTime}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;
