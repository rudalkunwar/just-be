import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, TrendingUp, Clock, LogIn, UserPlus } from 'lucide-react';

function Header() {
    return (
        <div className="">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center text-white">
                    <div className="text-2xl font-bold">
                        <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                            D Store
                        </Link>
                    </div>

                    <ul className="hidden md:flex gap-8 text-lg font-medium items-center">
                        <li className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Package className="w-5 h-5" />
                            <Link to="/products" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                                Products
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            <Link to="/trending" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                                Trending
                            </Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <Link to="/latest" className="hover:text-yellow-300 transition duration-300 ease-in-out">
                                Latest
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/signup"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition duration-300 ease-in-out shadow-md"
                        >
                            <UserPlus className="w-5 h-5" />
                            Sign Up
                        </Link>
                        <Link
                            to="/login"
                            className="flex items-center gap-2 hover:text-yellow-300 font-medium transition duration-300 ease-in-out"
                        >
                            <LogIn className="w-5 h-5" />
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
