// Home.jsx
import React from 'react';
import { Laptop, User, CheckCircle, Scale } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
function Home() {
    // Create a motion-compatible Link component
    const MotionLink = motion.create(Link);
    return (
        <div className="font-sans bg-gray-50 text-gray-900">
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center justify-center text-center text-white px-6">
                <div className="max-w-2xl space-y-6">
                    <h1 className="text-5xl sm:text-6xl font-bold">Build Your Future With Us</h1>
                    <p className="text-xl sm:text-2xl opacity-80">
                        Join us to unlock endless possibilities. Build something great, today!
                    </p>
                    <MotionLink
                        to="/" // The route to navigate to
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
                    >
                        Get Started
                    </MotionLink>
                </div>
            </div>

            <div className="py-16 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="text-blue-600 text-5xl mb-4">
                                <Laptop />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Modern Tools</h3>
                            <p className="text-gray-600 mt-3">
                                Access cutting-edge technology and tools to build your dream projects.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="text-indigo-600 text-5xl mb-4">
                                <User />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
                            <p className="text-gray-600 mt-3">
                                Work with a team of experts who guide you every step of the way.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="text-green-600 text-5xl mb-4">
                                <CheckCircle />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Guaranteed Success</h3>
                            <p className="text-gray-600 mt-3">
                                We ensure your projects succeed with our full support and resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-6 bg-gray-900 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8 opacity-80">
                    We are excited to help you bring your ideas to life. Join us now and start building!
                </p>
                <a
                    href="#"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
                >
                    Join Now
                </a>
            </div>
        </div>
    );
}

export default Home;
