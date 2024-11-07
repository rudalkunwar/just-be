import React, { useState } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (p) => {
        setCart((prev) => [...prev, p]); 
    };

    console.log('cart value:', cart);
    console.log('cart type:', typeof cart);

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
