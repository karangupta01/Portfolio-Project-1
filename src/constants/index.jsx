import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " Javascript, Python, React.js, Redux, Express.js, Node.js, MongoDb, Tailwind, MySql, PostgreSQL, HTML/CSS, Postman, RestAPIs, ";

export const PROJECTS = [
  {
    id: 1,
    title: "AI Travel Planner",
    description:
      "An AI-powered travel planner built with React.js and JavaScript, integrating Google APIs and Gemini AI to create personalized itineraries, suggest destinations, optimize routes, and provide real-time updates and booking options.",
    imgSrc: project1,
    link: "https://github.com/karangupta01/AI-Travel-Planner.git",
  },
  {
    id: 2,
    title: "To Do App",
    description:
      "To-Do App with Local Storage – Built with React JS, Vite, Context API, and Hooks to manage tasks dynamically and persist data.",
    imgSrc: project2,
    link: "https://github.com/karangupta01/To-Do-App.git",
  },
  {
    id: 3,
    title: "Stock Sentiment Analysis using news headlines",
    description:
      "Stock Sentiment Analysis uses NLP to evaluate news headlines, identifying positive, negative, or neutral sentiments to help investors gauge market trends.",
    imgSrc: project3,
    link: "https://github.com/karangupta01/Stock-Sentiment-Analysis.git",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with user authentication and content management.",
    imgSrc: project4,
    link: "https://github.com/karangupta01/Blog-Website-.git",
  },
  {
    id: 5,
    title: "Video Streaming App",
    description: "A full-stack video streaming app using React (frontend), Node.js/Express (backend), and FFmpeg middleware for video processing. Supports file uploads, encoding, and real-time streaming with a responsive user interface.",
    imgSrc: project5,
    link: "https://github.com/karangupta01/Full-Stack-Video-Streaming-Project.git",
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "Password Generator App – Built with React JS, Vite, and `useState` Hook to generate secure, customizable passwords with ease.",
    imgSrc: project6,
    link: "https://github.com/karangupta01/Password-Generator.git",
  },
  {
    id: 7,
    title: "Currency Converter",
    description: "Currency Converter App – Built with React JS, Vite, useState, and useEffect for real-time currency conversion with API integration.",
    imgSrc: project7,
    link: "https://github.com/karangupta01/Currency-Converter.git",
  },
  {
    id: 8,
    title: "VideoTube Backend",
    description: "VideoTube Backend A professional and optimized backend application using Node.js, Express, and MongoDB to manage video streaming, user authentication, comments, likes, subscriptions, and media uploads securely. ",
    imgSrc: project8,
    link: "https://github.com/karangupta01/VIDEOTUBE-Backend-Project.git",
  },
  {
    id: 9,
    title: "QR-Code Generator",
    description:
      "Simple QR code generator that creates a QR code from any URL you enter. Fast and efficient!",
    imgSrc: project9,
    link: "https://github.com/karangupta01/QR-Code-Generator.git",
  },
];

export const ABOUT =
  "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "GlobalLogic Technologies Pvt Ltd - A Hitachi Group of Company",
    role: "Associate Analyst",
    year: "Feb'24 - Present",
    description:
      "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
  },
  {
    company: "Sky Bug Technologies",
    role: "Full Stack Developer",
    year: "Dec'23 - Jan'24",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
  {
    company: "Knocial India Limited",
    role: "Full Stack Developer",
    year: "Aug'23 - Nov'23",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  // },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/karangupta01",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "www.linkedin.com/in/karan-gupta-3aa117248",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "karangupta1017@gmail.com",
  phone: "+91 - 885xxxxxxx",
};
