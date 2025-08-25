"use client"

import { motion } from "framer-motion"

export function ConferenceHeader() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 md:py-6 lg:py-8"
        >
            <div className="container mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                    {/* Conference Logo */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex-shrink-0 order-1 lg:order-1"
                    >
                        <div className="bg-white text-blue-900 px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-bold text-center">
                            <div className="text-xl sm:text-2xl font-black flex justify-center items-center">
                                <img src="/images/icaitsc.png" alt="ICAITSC 2026 Logo" className="w-36 h-36" />
                                ICAITSC 2026</div>
                        </div>
                    </motion.div>

                    {/* Main Conference Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex-1 text-center order-2 lg:order-2 lg:mx-4 xl:mx-8"
                    >
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 leading-tight">
                            <span className="text-red-400">I</span>nternational{" "}
                            <span className="text-red-400">C</span>onference on <span className="text-red-400">C</span>omputational
                            Intelligence
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                            <span className="text-red-400">A</span>rtificial <span className="text-red-400">I</span>ntelligence <span className="text-red-400">T</span>echniques and  <span className="text-red-400">S</span>
                            mart <span className="text-red-400">C</span>omputing
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">26-27 February 2026</p>
                        <div className="text-xs sm:text-sm lg:text-base space-y-1">
                            <p className="mb-1">
                                Department of
                                <br className="sm:hidden" /> Computer Science
                            </p>
                            <p className="text-yellow-300 font-medium text-sm sm:text-base lg:text-lg">
                                Periyar University Salem, Tamil Nadu, India
                            </p>
                        </div>
                    </motion.div>

                    {/* University Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex-shrink-0 order-3 lg:order-3"
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-lg flex items-center justify-center">
                            <img
                                src="/images/logo1.png"
                                alt="Periyar University Logo"
                                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.header>
    )
}
