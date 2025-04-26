import { BookDashed, PenBoxIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='min-h-screen w-40 p-2 bg-slate-300'>
            <div className='bg-black h-24 w-24 rounded-full mb-2'>
                <div className='h-full flex justify-center items-center'>
                    <h1 className='text-white'>Admin</h1>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <div className='border-b-2'>
                    <Link to="dashboard" className='flex items-center gap-1 p-1 hover:bg-blue-300 hover:text-black'><PenBoxIcon size={20} /> Dashboard</Link>
                </div>
                <div className='border-b-2'>
                    <Link to="categories" className='flex items-center gap-1 p-1 hover:bg-blue-300 hover:text-black'><PenBoxIcon size={20} /> Categories</Link>
                </div>
                <div className='border-b-2'>
                    <Link to="products" className='flex items-center gap-1 p-1 hover:bg-blue-300 hover:text-black'><PenBoxIcon size={20} /> Products</Link>
                </div>
                <div className='border-b-2'>
                    <Link to="orders" className='flex items-center gap-1 p-1 hover:bg-blue-300 hover:text-black'><PenBoxIcon size={20} /> Orders</Link>
                </div>
                <div className='border-b-2'>
                    <Link to="invoices" className='flex items-center gap-1 p-1 hover:bg-blue-300 hover:text-black'><PenBoxIcon size={20} /> Invoices</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar