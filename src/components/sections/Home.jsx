import { useEffect, useState } from "react";
import AmanImage from "../../assets/aman.jpg";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="scroll-mt-20 min-h-screen flex items-start sm:items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            
            <div className="absolute top-20 left-10 w-20 h-20 border border-pink-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 border border-pink-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-pink-300/40 rounded-full animate-pulse delay-2000"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-18 sm:pt-12">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Circular Image Section */}
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
                        <img 
                            src={AmanImage}  
                            alt="Aman Sumesh" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                            Aman Sumesh
                        </span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl text-gray-300 mb-8">
                        <span className="text-pink-400">&lt;</span>
                        <span className="animate-pulse">Full Stack Developer</span>
                        <span className="text-pink-400">/&gt;</span>
                    </div>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I craft beautiful, functional, and user-centered digital experiences. 
                        Passionate about turning ideas into reality through code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:flex">
                    <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
