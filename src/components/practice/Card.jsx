import React from 'react'

function Card() {
    return (
        <div className='h-screen flex justify-center items-center bg-blue-50'>

            <div className='h-[80vh] mx-10 container bg-white shadow-lg'>
                <div className='text-center'>
                    <div className='py-4'>
                        <h1 className='text-3xl'>Our Pricing</h1>
                    </div>

                    <div className='flex gap-5 justify-center'>
                        <h1>Annually</h1>
                        <input type="checkbox" />
                        <h1>Monthly</h1>
                    </div>
                </div>
                <div className='flex py-12 mx-12 justify-center'>
                    <div className='text-center h-[20rem] w-[20rem] shadow-lg'>
                        <h2 className='py-2'>Basic</h2>
                        <div className='flex items-center justify-center font-bold py-4'>
                            <p className='py-2 text-2xl'>$</p>
                            <p className='text-5xl'>299</p>
                        </div>
                        <div className='mx-10'>
                            <p className='border-b border-t py-2'>500 GB Storage</p>
                            <p className='border-b border-t py-2'>Best offer done</p>
                            <p className='border-b border-t py-2'>Buy this now</p>
                            <button>Suscribe</button>
                        </div>
                    </div>
                    <div className='text-center text-white rounded-md  h-[25rem] w-[20rem] shadow-lg bg-violet-400'>
                        <h2 className='py-2'>Professional</h2>
                        <div className='flex items-center justify-center font-bold py-4'>
                            <p className='py-2 text-2xl'>$</p>
                            <p className='text-5xl'>299</p>
                        </div>
                        <div className='mx-10'>
                            <p className='border-b border-t py-2'>500 GB Storage</p>
                            <p className='border-b border-t py-2'>Unlimited Acess</p>
                            <p className='border-b border-t py-2'>Lightining Fast Internet</p>
                            <button>Suscribe</button>
                        </div>
                    </div>
                    <div className='text-center h-[20rem] w-[20rem] shadow-lg'>
                        <h2 className='py-2'>Master</h2>
                        <div className='flex items-center justify-center font-bold py-4'>
                            <p className='py-2 text-2xl'>$</p>
                            <p className='text-5xl'>299</p>
                        </div>
                        <div className='mx-10'>
                            <p className='border-b border-t py-2'>250 GB Storage</p>
                            <p className='border-b border-t py-2'>Limited Acesss 10 req/sec</p>
                            <p className='border-b border-t py-2'>No die any today</p>
                            <button>Suscribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card