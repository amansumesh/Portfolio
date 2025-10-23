import { useEffect, useState } from "react";
import ReactLogo from "../../assets/React.svg";
import JavaScriptLogo from "../../assets/JavaScript.svg";
import ExpressLogo from "../../assets/Express.svg";
import PythonLogo from "../../assets/Python.svg";
import JavaLogo from "../../assets/Java.svg";
import MongoDBLogo from "../../assets/MongoDB.svg";
import NextLogo from "../../assets/Nextjs.svg";
import FigmaLogo from "../../assets/Figma.svg";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            name: "React",
            logo: <img src={ReactLogo} alt="React" className="w-8 h-8" />
        },
        {
            name: "JavaScript",
            logo: <img src={JavaScriptLogo} alt="JavaScript" className="w-8 h-8" />
        },
        {
            name: "Express",
            logo: <img src={ExpressLogo} alt="Express" className="w-8 h-8" />
        },
        {
            name: "Python",
            logo: <img src={PythonLogo} alt="Python" className="w-8 h-8" />
        },
        {
            name: "Java",
            logo: <img src={JavaLogo} alt="Java" className="w-8 h-8" />
        },
        {
            name: "MongoDB",
            logo: <img src={MongoDBLogo} alt="MongoDB" className="w-8 h-8" />
        },
        {
            name: "Next.js",
            logo: <img src={NextLogo} alt="Next.js" className="w-8 h-8" />
        },
        {
            name: "Figma",
            logo: <img src={FigmaLogo} alt="Figma" className="w-8 h-8" />
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            About <span className="text-pink-400">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6">
                            <div className="text-lg text-gray-300 leading-relaxed">
                                <p className="mb-4">
                                    I'm a passionate full-stack developer with a love for creating
                                    innovative digital solutions. I am a student at VIT Vellore.
                                    I specialize in building modern, scalable applications 
                                    that deliver exceptional user experiences.
                                </p>
                                <p className="mb-4">
                                    My journey in tech started with curiosity about how websites work,
                                    and it has evolved into a deep passion for problem-solving through code.
                                    I enjoy working with cutting-edge technologies and am always eager to
                                    learn new tools and frameworks.
                                </p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies,
                                    contributing to open-source projects, or sharing knowledge with the
                                    developer community.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                                    Problem Solver
                                </div>
                                <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                                    Team Player
                                </div>
                                <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                                    Continuous Learner
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Skills */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className={`flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="p-3 rounded-full bg-white/10 mb-3 flex items-center justify-center">
                                            {skill.logo}
                                        </div>
                                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
