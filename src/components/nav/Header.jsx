import React from "react";
import { Link } from "react-router-dom";
import { Home, Package, TrendingUp, Clock, LogIn, UserPlus } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";

function Header() {
    const navs = [
        { to: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
        { to: "/products", icon: <Package className="w-5 h-5" />, label: "Products" },
        { to: "/trending", icon: <TrendingUp className="w-5 h-5" />, label: "Trending" },
        { to: "/latest", icon: <Clock className="w-5 h-5" />, label: "Latest" },
    ]
    return (
        <header

            className="bg-gray-900 text-white shadow-lg">
            <motion.nav className="container mx-auto px-6 py-4" initial={{ y: -20 }}
                animate={{ y: 0 }}>
                <div className="flex justify-between items-center">
                    <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }} whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                        className="text-3xl font-bold tracking-wide">
                        <Link
                            to="/"
                            className="hover:text-yellow-300 transition duration-300 ease-in-out"
                        >
                            D Store
                        </Link>
                    </motion.div>
                    <motion.ul
                        className="hidden md:flex gap-8 text-lg font-medium items-center">
                        {navs.map(({ to, icon, label }) => (
                            <motion.li
                                key={to}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1.2 }}
                                className="flex items-center gap-2"
                            >
                                {icon}
                                <Link
                                    to={to}
                                    className="hover:text-yellow-300 transition duration-300 ease-in-out"
                                >
                                    {label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <Link
                                to="/signup"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition duration-300 ease-in-out shadow-md"
                            >
                                <UserPlus className="w-5 h-5" />
                                Sign Up
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <Link
                                to="/login"
                                className="flex items-center gap-2 hover:text-yellow-300 font-medium transition duration-300 ease-in-out"
                            >
                                <LogIn className="w-5 h-5" />
                                Login
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </header>
    );
}

export default Header;
