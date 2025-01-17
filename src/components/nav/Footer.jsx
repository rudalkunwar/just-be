import { footer } from 'motion/react-client'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='flex justify-around py-4 bg-gray-600 text-white'>
                <div>
                    <h2>Dstore</h2>
                </div>
                <div className=''>
                    <ul>
                        <li>Services</li>
                        <li>About</li>
                        <li>Trending</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className=''>
                    <ul>
                        <li>Services</li>
                        <li>About</li>
                        <li>Trending</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className=''>
                    <ul>
                        <li>Services</li>
                        <li>About</li>
                        <li>Trending</li>
                        <li>Contact</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="py-8 bg-gray-800 text-white text-center">
                <p>&copy; 2024 Dstore. All Rights Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer