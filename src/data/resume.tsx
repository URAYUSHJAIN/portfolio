import { Icons } from "../../icons";
import { HomeIcon, icons , NotebookIcon, File} from "lucide-react";

export const DATA = {
  name: "Ayush Jain",
  initials: "AJ",
  url: "https://dhwanibudhiraja.com",
  location: "Ghaziabad, India",
  locationLink: "https://maps.app.goo.gl/gjC8e8hepcGbdsU38",
  description:
    "Third-year Computer Science Engineering student at ABES Engineering College, 5x Patent Holder specializing in Generative AI, Web3, and Full-Stack Development.",
  summary:
    "I am Ayush Jain, a third-year Computer Science Engineering student at ABES Engineering College and a 5x patent holder. With a strong foundation in core CSE subjects and advanced skills in data structures, algorithms, and system design, I thrive on building scalable, impactful solutions.\nMy academic and project journey has fueled a deep passion for technology, leading to the development of cutting-edge projects in smart energy systems, blockchain-based optimization, and citizen services. I am committed to continuous learning and pushing the boundaries of technology through research, innovation, and hands-on engineering.",
  avatarUrl: "/ayush.jpg",
  skills: [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "C",
  "Java",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "SQL",
  "Git",
  "GitHub",
  "Firebase Auth",
  "Postman",
  "Hugging Face",
  "Mistral",
  "Gemini Pro",
  "Vertex AI",
  "Prompt Engineering",
  "Vercel",
  "Netlify"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://www.techwithsd.com", icon: NotebookIcon, label: "Blog" },
    { 
      href: "https://drive.google.com/file/d/1blI7Nqdd05OyUxBKjWBchmucsfwygeDp/view?usp=sharing", 
      icon: File, 
      label: "Resume",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ],
  contact: {
    email: "urayushjain@gmail.com",
    tel: "+91 9044945620",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/urayushjain",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/urayushjain/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=urayushjain@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "ABES Engineering College",
      href: "https://abes.ac.in/",
      degree: "B.Tech Computer Science",
      logoUrl: "/abes.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "SJS Public School, Raebareli, Uttar Pradesh, India",
      href: "https://www.sjspublicschool.com//",
      degree: "Class XII - PCM ",
      logoUrl: "/sjs.jpg",
      start: "2010",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "GenShakti",
      href: "https://genshaakti.web.app/",
      dates: "June 2024 - September 2024",
      active: true,
      description:
        "GenShakti is an AI-driven tool for smart renewable energy planning, carbon modeling, and sustainable living insights.",
      technologies: [
        "React",
        "javascript",
        "TailwindCSS",
        "Reactflow",
        "React-leaflet",
        "react-chartjs-2",
        "Chart.js",
        "gemini-pro",
        "Hugging Face",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://genshaakti.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/GenShakti",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/GenShakti.jpg",
    },
    {
      title: "shayoga",
      href: "https://shayoga.netlify.app/",
      dates: "February 2025 - March 2025",
      active: true,
      description:
      "Shayoga is a Web3-powered crowdfunding platform that allows anyone to create or support fundraising campaigns on the Ethereum blockchain. Designed with transparency and decentralization at its core, Shayoga ensures that donations reach the right hands — without intermediaries.",
      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "Ethers.js",
        "Solidity",
        "Hardhat",
        "alchemy",
        "Metamask",
        "netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://shayoga.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/Shayoga",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Tacwin",
      href: "https://tacwin.vercel.app/",
      dates: "February 2025 - March 2025",
      active: true,
      description:
      "A beautifully designed Tic Tac Toe game with a modern glassy, neon-themed interface. Built using React, this project is a fun way to revisit a classic game while showcasing responsive design and CSS effects.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://tacwin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/Tacwin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tacwin.jpg",
    },
    {
      title: "Fusion2048",
      href: "https://fusion2048.netlify.app/",
      dates: "Sept 2024",
      active: true,
      description:
      "Fusion2048 is an engaging 2048 puzzle game built with HTML, CSS, and JavaScript. The game challenges players to merge tiles with the same numbers to reach the highest possible score. The game offers smooth animations, user-friendly controls, and a modern design.",
      technologies: [
        "html",
        "Css",
        "javascript",

      ],
      links: [
        {
          type: "Website",
          href: "https://fusion2048.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/Fusion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fusion.jpg",
    }
    
  ],

  patents: [
  {
    title: "Smart Energy Optimization System",
    dateOfPublish: "March 2024",
    patentNumber: "IN1234567",
    applicationNumber: "20231234567",
  },
  {
    title: "Blockchain-Based Citizen Services",
    dateOfPublish: "July 2023",
    patentNumber: "IN7654321",
    applicationNumber: "20237654321",
  },
  // Add more patents as needed
],

  UpcomingProjects: [
    {
      title: "PadhoVIT",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developing a comprehensive Learning Management System (LMS) using Next.js, Node.js, and MongoDB, focusing on a seamless user experience and efficient backend processes. Integrating technologies like Redis for caching and AWS S3 for media storage, leading to significant improvements in performance and user engagement.",
      
    },
    {
      title: "RAG",
      href: "",
      dates: "Sept 2023 - Present",
      active: true,
      description:
        "Developed a robust and free medical knowledge base using Retrieval Augmented Generation (RAG) with Pinecone, Next.js, LangChain, and Transformers.js. The project processes medical documents for seamless retrieval and embedding, offering efficient and cost-effective AI-powered solutions.",
      technologies: [
        "langchain",
        "pinecone",
        "next.js",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://imgur.com/a/bVixY0S",
    }
  ],

  certificate: [
    {
      title: "Amazon Cloud Practitioner",
      dates: "Jan 11th, 2024",
      description:
        "Completed AWS Cloud Practitioner certification with a good grasp of cloud basics. Proficient in deploying secure cloud solutions, monitoring performance, and implementing disaster recovery plans. I can manage and support cloud environments, ensuring they run smoothly and securely.",
      image: "/amazonCloudPrac.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ce2da91410bc474ba220ab91ef2696fd",
        },
      ],
    },
  ],
} as const;
