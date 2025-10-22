export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
        category: "frontend",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather dashboard that displays current weather conditions and forecasts using real-time API data.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
        technologies: ["JavaScript", "CSS3", "Weather API"],
        category: "frontend",
        liveUrl: "#",
        githubUrl: "#"
    },
    {

        id: 4,
        title: "EduSphere LMS",
        description: "A modern Learning Management System built with the MERN stack. Features include user authentication via Clerk, secure payments with Stripe, media management through Cloudinary, and a responsive React frontend. Designed for seamless online course creation and management.",
        image: "https://unsplash.com/photos/a-pen-on-a-book-nVBPy9S2USQ",
        technologies: ["Node.js", "Express", "MongoDB", "React", "Clerk", "Cloudinary", "Stripe"],
        category: "fullstack",
        liveUrl: "https://edu-sphere-ten.vercel.app/",
        githubUrl: "https://github.com/amansumesh/EduSphere.git"

    },
    
    
];

export const categories = [
    { name: "all", label: "All Projects" },
    { name: "frontend", label: "Frontend" },
    { name: "backend", label: "Backend" },
    { name: "fullstack", label: "Full Stack" }
];