import TicTacToeImage from "../assets/Tictactoe.png";
import PortfolioImage from "../assets/Portfolio.png";
import EdusphereImage from "../assets/Edusphere.jpg";
import ChessGameImage from "../assets/ChessGame.jpeg";
import SwiftNotesImage from "../assets/SwiftNotes.jpeg";

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
        description: "A modern, responsive personal portfolio designed to showcase development skills, projects, and contact information. Features include smooth scrolling, interactive project sections, animated transitions, and a fully responsive layout for seamless viewing across devices.",
        image: PortfolioImage,
        technologies: ["React", "Tailwind CSS", "Vite", "Figma", "EmailJS"],
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

    {
        id: 4,
        title: "Checkmate.io",
        description: "A real-time online chess platform where two players can compete live while others watch the match in real time. Built with Node.js and Socket.IO for instant synchronization, and Chess.js for accurate game logic and server-side move validation. Ensures fair gameplay with validated moves and seamless multiplayer interaction.",
        image: ChessGameImage,
        technologies: ["Node.js", "Express", "Socket.IO", "Chess.js"],
        category: "backend",
        liveUrl: "https://checkmateio-eight.vercel.app/",
        githubUrl: "https://github.com/amansumesh/ChessGame.git"
    },

    {
        id: 5,
        title: "SwiftNotes",
        description: "A sleek and lightweight notes application built with React and Tailwind CSS, designed for fast task creation and effortless note organization. Features a clean, minimal UI focused on improving daily productivity and managing notes efficiently.",
        image: SwiftNotesImage,
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        category: "frontend",
        liveUrl: "https://swift-notes-cyan.vercel.app/",
        githubUrl: "https://github.com/amansumesh/SwiftNotes.git"
    }
];

export const categories = [
    { name: "all", label: "All Projects" },
    { name: "frontend", label: "Frontend" },
    { name: "backend", label: "Backend" },
    { name: "fullstack", label: "Full Stack" }
];