import { useEffect, useState } from "react";
import AmanImage from "../../assets/aman.jpg";
import { motion } from "framer-motion";

export default function Home() {

    return (
        <section id="home" className="scroll-mt-20 min-h-screen flex items-start sm:items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>

            <motion.div
                className="absolute top-20 left-10 w-20 h-20 border border-pink-500/30 rounded-full"
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-40 right-20 w-16 h-16 border border-pink-400/20 rounded-full"
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute bottom-32 left-1/4 w-12 h-12 border border-pink-300/40 rounded-full"
                animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-18 sm:pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    {/* Circular Image Section */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg"
                    >
                        <img
                            src={AmanImage}
                            alt="Aman Sumesh"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                            Aman Sumesh
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-300 mb-8">
                        <span className="text-pink-400">&lt;</span>
                        <motion.span
                            className="inline-block mx-2"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Full Stack Developer
                        </motion.span>
                        <span className="text-pink-400">/&gt;</span>
                    </div>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I craft beautiful, functional, and user-centered digital experiences.
                        Passionate about turning ideas into reality through code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
