import { useEffect, useState } from "react";
import { projects, categories } from "../../data/Projects";

export default function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('projects');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="text-pink-400">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and passion for development.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveFilter(category.name)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category.name
                                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-pink-400'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group hover:transform hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    {/* Large Screen Overlay */}
                                    <div className="hidden lg:block">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition-colors duration-300"
                                                >
                                                    Live Demo
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 border border-pink-500 text-pink-400 text-sm rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full border border-pink-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Small Screen Buttons */}
                                <div className="md:hidden flex justify-center px-4 pb-6">
                                    <div className="flex gap-3 w-full max-w-xs">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-pink-500 text-white text-sm rounded-full hover:bg-pink-600 transition-colors duration-300 text-center"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 border border-pink-500 text-pink-400 text-sm rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 text-center"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-gray-400 mb-6">
                            Interested in working together? Let's discuss your next project!
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
