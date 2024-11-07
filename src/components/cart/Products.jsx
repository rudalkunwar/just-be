import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';

function Products() {
    const { cart, addToCart } = useContext(CartContext)
    const products = [
        {
            id: 1,
            name: "Wireless Earbuds",
            description: "Bluetooth wireless earbuds with noise cancellation.",
            price: 49.99,
            category: "Electronics",
            stock: 120,
            rating: 4.5
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Fitness tracker with heart rate monitor and GPS.",
            price: 89.99,
            category: "Electronics",
            stock: 75,
            rating: 4.2
        },
        {
            id: 3,
            name: "Water Bottle",
            description: "Reusable stainless steel water bottle.",
            price: 19.99,
            category: "Lifestyle",
            stock: 200,
            rating: 4.8
        },
        {
            id: 4,
            name: "Yoga Mat",
            description: "Eco-friendly non-slip yoga mat.",
            price: 29.99,
            category: "Sports",
            stock: 50,
            rating: 4.6
        },
        {
            id: 5,
            name: "Gaming Mouse",
            description: "RGB gaming mouse with adjustable DPI.",
            price: 39.99,
            category: "Electronics",
            stock: 85,
            rating: 4.3
        },
        {
            id: 6,
            name: "Portable Charger",
            description: "10000mAh portable power bank.",
            price: 25.99,
            category: "Electronics",
            stock: 150,
            rating: 4.7
        },
        {
            id: 7,
            name: "Running Shoes",
            description: "Lightweight running shoes for men and women.",
            price: 59.99,
            category: "Sports",
            stock: 95,
            rating: 4.4
        },
        {
            id: 8,
            name: "Coffee Maker",
            description: "Single-serve coffee maker with reusable filter.",
            price: 49.99,
            category: "Home Appliances",
            stock: 30,
            rating: 4.1
        },
        {
            id: 9,
            name: "Wireless Keyboard",
            description: "Slim, rechargeable wireless keyboard.",
            price: 32.99,
            category: "Electronics",
            stock: 60,
            rating: 4.5
        },
        {
            id: 10,
            name: "LED Desk Lamp",
            description: "Adjustable LED desk lamp with touch control.",
            price: 21.99,
            category: "Home & Office",
            stock: 40,
            rating: 4.6
        }
    ];

    return (
        <div>
            <div className='h-[95vh] flex justify-center items-center bg-slate-600'>
                <div className='flex gap-2 w-full overflow-x-auto mx-10'>
                    {
                        products.map((p) => (
                            <div className='h-[200px] w-[250px] bg-white px-2 py-4 shadow-lg rounded-md' key={p.id}>
                                <h3>{p.name}</h3>
                                <p>Rs {p.price}</p>
                                <button className='bg-blue-500 rounded-md px-2 py-1 text-white' onClick={() => addToCart(p)}>Add to Cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products