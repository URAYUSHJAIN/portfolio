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
      title: "VITicketeer",
      href: "https://viticketeer.vercel.app/",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "VITicketeer is an event management platform tailored for your university, featuring a user-friendly interface, secure ticketing via Stripe, and efficient user authentication with Clerk. It simplifies event creation, management, and participation, keeping the campus community connected.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Mongoose",
        "Stripe",
        "Clerk",
        "Vercel",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://viticketeer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilshenoy/VITicketeer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "BucketByte",
      href: "https://bucketbyte.com",
      dates: "Sept 2024",
      active: true,
      description:
        "BucketByte is a platform designed to generate AI-powered blog content, simplifying the content creation process with secure cloud storage and efficient serverless integration. It reflects practical experience in working with Amazon Web Services to create a reliable and scalable solution.",
      technologies: [
        "Amazon Bedrock",
        "Amazon S3",
        "Amazon Lambda",
        "API Gateway",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://bucketbyte.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilshenoy/bucket-byte",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://imgur.com/a/bVixY0S",
    },
    {
      title: "NeuroNote",
      href: "https://neuro-note.com",
      dates: "Sept 2024",
      active: true,
      description:
        "A web application that enables users to upload documents and create notes, featuring integrated AI-powered search capabilities for efficient information retrieval. It leverages cutting-edge technologies to provide a seamless experience in managing and searching through personal and team documentation.",
      technologies: [
        "Open AI API",
        "Convex",
        "Vector Embedding",
        "Clerk",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://neuro-note.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dhwanibudhiraja/neuronote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://imgur.com/a/bVixY0S",
    }
  ],

  UpcomingProjects: [
    {
      title: "PadhoVIT",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developing a comprehensive Learning Management System (LMS) using Next.js, Node.js, and MongoDB, focusing on a seamless user experience and efficient backend processes. Integrating technologies like Redis for caching and AWS S3 for media storage, leading to significant improvements in performance and user engagement.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "AWS S3",
        "RTK Query",
        "Socket.io",
        "MongoDB",
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
