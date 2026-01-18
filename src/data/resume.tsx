import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, File} from "lucide-react";

export const DATA = {
  name: "Ayush Jain",
  initials: "AJ",
  url: "https://urayushjain.vercel.app",
  location: "Ghaziabad, India",
  locationLink: "https://maps.app.goo.gl/gjC8e8hepcGbdsU38",
  description:
    "Third-year Computer Science Engineering student at ABES Engineering College, 5x Patent Holder specializing in Generative AI, Web3, and Full-Stack Development.",
  summary:
    "I am Ayush Jain, a third-year Computer Science Engineering student at ABES Engineering College and a 5x patent holder. With a strong foundation in core CSE subjects and advanced skills in data structures, algorithms, and system design, I thrive on building scalable, impactful solutions.\nMy academic and project journey has fueled a deep passion for technology, leading to the development of cutting-edge projects in smart energy systems, blockchain-based optimization, and citizen services. I am committed to continuous learning and pushing the boundaries of technology through research, innovation, and hands-on engineering.",
  avatarUrl: "/ayu.jpg",
  skills: [
    // Fundamentals
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "System Design",
    // Languages
    "C",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Solidity",
    // Frontend
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vite",
    "React Flow",
    "React Leaflet",
    "Chart.js",
    // Backend
    "Node.js",
    "Express",
    "Firebase",
    // Databases
    "SQL",
    // AI/ML
    "Hugging Face",
    "Mistral",
    "Gemini Pro",
    "Vertex AI",
    "Prompt Engineering",
    // Blockchain
    "Ethers.js",
    "Hardhat",
    "Alchemy",
    "Metamask",
    // Tools
    "Git",
    "GitHub",
    "Postman",
    // Deployment
    "Vercel",
    "Netlify",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "https://www.techwithsd.com", icon: NotebookIcon, label: "Blog" },
    { 
      href: "https://drive.google.com/file/d/1uIGeJfrX3DgFwwKAxigGAB3sg-4XhLoN/view?usp=sharing", 
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
      Facebook: {
        name: "Facebook",
        url: "https://facebook.com/urayushjain", // Update with your actual Facebook profile
        icon: Icons.globe, // Using globe icon as placeholder
        navbar: false,
      },
      Instagram: {
        name: "Instagram", 
        url: "https://instagram.com/urayushjain", // Update with your actual Instagram profile
        icon: Icons.globe, // Using globe icon as placeholder
        navbar: false,
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
  experience: [
    {
      company: "GDG ABESEC",
      href: "https://gdg.community.dev/gdg-abesec/",
      role: "Co Organizer",
      logoUrl: "/gdg.jpg",
      start: "Sep 2024",
      end: "Present",
      description: "Leading event management and community engagement initiatives. Responsible for organizing technical workshops, managing sponsorships, and fostering leadership development within the Google Developer Groups community.",
      responsibilities: [
        "Team Leadership & Leadership Development",
        "Event Management & Planning", 
        "Sponsorship Coordination",
        "Community Engagement"
      ]
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
      video: "",
    },
    {
      title: "shayoga",
      href: "https://shayoga.netlify.app/",
      dates: "August 2024 - October 2024",
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
      image: "/shayoga.jpg",
      video: "",
    },
    {
      title: "AadhaarPulse",
      href: "https://aadhaar-pulse.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "AadhaarPulse - AI-powered analytics platform for monitoring Aadhaar authentication patterns. Built for UIDAI Hackathon 2026.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://aadhaar-pulse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/AadhaarPulse-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AadhaarPulse.png",
      video: "",
    },
    {
      title: "ArogyaPlus",
      href: "https://arogyaplus-two.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "AI-powered healthcare platform combining OCR, computer vision for intelligent medical report analysis. Integrates modern medicine with Ayurvedic solutions.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Gemini Pro",
        "OCR",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://arogyaplus-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/Arogyaplus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Arogyaplus.png",
      video: "",
    },
    {
      title: "DevStudy",
      href: "https://devstudy-ten.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "A comprehensive, interactive learning platform designed to help developers master engineering skills, system design, and coding through hands-on practice.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://devstudy-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/URAYUSHJAIN/Devstudy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DevStudy.png",
      video: "",
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
      video: "",
    }
    
  ],


  patents: [
    {
      title: "GENSHAKTI: AI-DRIVEN SMART ENERGY SAVER",
      applicationNumber: "202511025277",
      publicationNumber: "14/2025",
      date: "04/04/2025",
    },
    {
      title: "GENSHAKTI: AI-DRIVEN SMART ZONE SELECTION FOR RENEWABLE ENERGY",
      applicationNumber: "202511025280",
      publicationNumber: "14/2025",
      date: "04/04/2025",
    },
    {
      title: "DECENTRALIZED DOCUMENT CONTROL SYSTEM",
      applicationNumber: "202511052005",
      publicationNumber: "24/2025",
      date: "13/06/2025",
    },
    {
      title: "BLOCKCHAIN-DRIVEN PHARMACEUTICAL SUPPLY CHAIN OPTIMIZER",
      applicationNumber: "202511050913",
      publicationNumber: "24/2025",
      date: "13/06/2025",
    },
    {
      title: "AROGYAPLUS: SMART MEDICAL INSIGHTS NAVIGATOR",
      applicationNumber: "202511053921",
      publicationNumber: "25/2025",
      date: "20/06/2025",
    },
  ],

  articles: [
    {
      title: "How Anyone Can Protect Their Big Idea: A Student Guide to Filing Patents",
      href: "https://medium.com/@urayushjain/how-anyone-can-protect-their-big-idea-a-student-guide-to-filing-patents-d9f6e6448571",
      dates: "Aug 6, 2025",
      description: "A comprehensive guide on how students can file patents, based on my journey of publishing five patents in twelve months. It breaks down myths and provides a step-by-step roadmap for student inventors.",
      image: "/How Anyone Can Protect Their Big Idea A Student Guide to Filing Patents.webp",
      links: [
        {
          type: "Medium",
          href: "https://medium.com/@urayushjain/how-anyone-can-protect-their-big-idea-a-student-guide-to-filing-patents-d9f6e6448571",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Your Idea Won’t Speak for Itself; Your Presentation Will. Build It Right.",
      href: "https://medium.com/@urayushjain/your-idea-wont-speak-for-itself-your-presentation-will-build-it-right-9a4d79c6b1b6",
      dates: "Nov 23, 2025",
      description: "Sharing the '8-Slide Hackathon Winner Blueprint' and how to transform technical complexity into clear, impactful visual stories that win rooms and convince judges.",
      image: "/Your Idea Won’t Speak.webp",
      links: [
        {
          type: "Medium",
          href: "https://medium.com/@urayushjain/your-idea-wont-speak-for-itself-your-presentation-will-build-it-right-9a4d79c6b1b6",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "From Zero to Contributor: A Student’s Guide to Conquering Hacktoberfest",
      href: "https://medium.com/@urayushjain/from-zero-to-contributor-a-students-guide-to-conquering-hacktoberfest-c566a5d8fbe4",
      dates: "Oct 17, 2025",
      description: "A guide for students on starting their open-source journey, covering everything from Git basics to handling feedback and why the real prize isn't just the swag.",
      image: "/From Zero to Contributor.webp",
      links: [
        {
          type: "Medium",
          href: "https://medium.com/@urayushjain/from-zero-to-contributor-a-students-guide-to-conquering-hacktoberfest-c566a5d8fbe4",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],

  certificate: [
    {
      title: "Hacktoberfest 2025: Supercontributor",
      dates: "Oct 2025",
      description:
        "Achieved Supercontributor status in Hacktoberfest 2025, demonstrating exceptional contribution to open-source projects. Recognized for outstanding participation in the global open-source community and advancing collaborative development practices.",
      image: "/hacktoberfest_logo.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.holopin.io/hacktoberfest2025/userbadge/cmgkj3kdf002ol5045f2p5zz7",
        },
      ],
      credentialId: "cmgkj3kdf002o15045t2p5zz7",
      skills: ["Open-Source Development", "Open Sources"]
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      dates: "Sep 2025",
      description:
        "Completed AWS Academy Cloud Foundations program, gaining comprehensive knowledge of Amazon Web Services cloud computing fundamentals, including core AWS services, security, architecture, and pricing models.",
      image: "/aws_china_logo.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/33da683e-9f96-417b-8db8-ddd5fc2ed644/print",
        },
      ],
    },
    {
      title: "Certification: Blockchain Basics",
      dates: "May 2025",
      description:
        "Comprehensive certification in blockchain fundamentals from Cyfrin. Covered distributed ledger technology, consensus mechanisms, smart contracts, and blockchain security principles.",
      image: "/cyfrin-blockchain-cert.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://updraft.cyfrin.io/courses/blockchain-basics/final/proficiency-exam",
        },
      ],
    },
    {
      title: "Google Prompting Essentials",
      dates: "Apr 2025",
      description:
        "Google certification in prompt engineering and AI interaction. Learned advanced prompting techniques, AI model optimization, and best practices for leveraging generative AI tools effectively.",
      image: "/google.png",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/FRJVK9E37OBS",
        },
      ],
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      dates: "May 2024",
      description:
        "Comprehensive course covering generative AI fundamentals, computer ethics, and artificial intelligence applications. Gained expertise in AI technologies and their ethical implementation in business contexts.",
      image: "/microsoft.png",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/455f960aa30c5a926e2e1db562f4d145539ddfe716c99005b7447fa12e282063",
        },
      ],
    },
    {
      title: "Vanderbilt University Course",
      dates: "Jan 2024",
      description:
        "Completed advanced course in Prompt Engineering and ChatGPT. Developed skills in AI interaction, prompt optimization, and leveraging large language models for various applications.",
      image: "/vanderbilt-cert.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.coursera.org/account/accomplishments/verify/VQZ6YM6KZAFK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        },
      ],
    },
    
  ],
} as const;
