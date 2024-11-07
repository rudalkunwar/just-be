import React, { useContext } from 'react'
import Products from './Products'
import { CartContext } from '../../contexts/CartContext'

function Shop() {
    const { cart, addToCart } = useContext(CartContext)
    return (
        <div>
            <div className='bg-gray-200 py-2 shadow-lg border-b border-black'>
                <div className="flex justify-between mx-10">
                    <div>
                        Cart
                    </div>
                    <div>
                        <ul className='flex gap-4'>
                            <li>Home</li>
                            <li>Profile</li>
                            <li>Cart({cart.length})</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Products />
            </div>
        </div>
    )
}

export default Shop