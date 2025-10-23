import TicTacToeImage from "../assets/Tictactoe.png";
import PortfolioImage from "../assets/Portfolio.png";
import EdusphereImage from "../assets/Edusphere.jpg";

export const projects = [
    {
        id: 1,
        title: "Tic Tac Toe Game",
        description: "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Features include a responsive grid, interactive X and O gameplay, and a reset button to start a new game.",
        image: TicTacToeImage,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "frontend",
        liveUrl: "https://tic-tac-toe-game-rho-ochre.vercel.app/",     
        githubUrl: "https://github.com/amansumesh/Tic-Tac-Toe-Game.git"
    },
    
    {
        id: 2,
        title: "Personal Portfolio Website",
        description: "A modern, responsive personal portfolio built to showcase development skills, projects, and contact information. Features include smooth scrolling, animations, and dark mode support.",
        image: PortfolioImage,
        technologies: ["React", "Tailwind CSS", "Vite", "EmailJS"],
        category: "frontend",
        liveUrl: "https://aman-sumesh.vercel.app/",
        githubUrl: "https://github.com/amansumesh/Portfolio.git"
    },

    {
        id: 3,
        title: "EduSphere LMS",
        description: "A modern Learning Management System built with the MERN stack. Features include user authentication via Clerk, secure payments with Stripe, media management through Cloudinary, and a responsive React frontend. Designed for seamless online course creation and management.",
        image: EdusphereImage,
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