import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'

function Layout() {
    return (
        <div>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex-1'>
                    <Navbar />
                    <div>
                        <div>
                            <Routes>
                                <Route path='/admin/dashboard' element={<Dashboard />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout