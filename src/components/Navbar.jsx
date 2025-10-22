import { useState } from "react";
import { Menu } from "lucide-react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return(
        <nav className="fixed top-0 w-full z-50 bg-[rgba(10, 10, 10, 0.9)] backdrop-blur-lg border-b border-pink-500/20 shadow-lg"> 
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white hover:text-pink-400 transition-colors duration-300">
                        Aman <span className="text-pink-400">Sumesh</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-pink-400 transition-colors duration-300 relative z-50 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-pink-500/20">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};