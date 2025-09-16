import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "pollverse",
    title: "Pollverse",
    description:
      "Sentiment analysis on anonymous polls with OTP auth and email alerts.",
    tech: ["HTML", "CSS", "JS", "Flask", "SQLAlchemy", "Matplotlib"],
    features: [
      "Anonymous Polls with OTP authentication",
      "Sentiment analysis and trends over time",
      "User profiles & email notifications",
    ],
    live: "https://pollversey.onrender.com",
    github: "https://github.com/Rahul122703/pollverse",
  },
  {
    id: "sharesense",
    title: "ShareSense",
    description:
      "Secure document sharing platform with drag-and-drop uploads and OTP auth.",
    tech: ["HTML", "CSS", "JS", "Flask", "SQLAlchemy"],
    features: [
      "Flexible file sharing",
      "Drag-and-drop uploads",
      "Account based access with OTP",
    ],
    live: "https://sharesense.onrender.com",
    github: "https://github.com/Rahul122703/rshare",
  },
  {
    id: "rahulmart",
    title: "RahulMart",
    description:
      "Full e-commerce UI built with React and Airtable backend & serverless functions.",
    tech: ["React", "Tailwind", "Netlify Functions", "Airtable"],
    features: ["Login/Register", "Filtering & Search", "Dark Mode"],
    live: "https://rahulmart.netlify.app",
    github: "https://github.com/Rahul122703/rahulmart",
  },
  {
    id: "student-dashboard",
    title: "Student Dashboard",
    description:
      "Dashboard for students — course management, resume enhancer, progress tracking.",
    tech: ["React", "Vite", "Tailwind", "Redux Toolkit"],
    features: [
      "Course management",
      "Resume enhancer & progress tracking",
      "Real-time notifications",
    ],
    live: "https://student-ed-tech-dashboard.vercel.app",
    github: "https://github.com/Rahul122703/StudentEdTechDashboard",
  },
  {
    id: "easy-share",
    title: "Easy Share",
    description:
      "Secure file sharing with rooms, encrypted transfers, and shareable links.",
    tech: ["Next.js", "SQLite"],
    features: [
      "One-time/expirable share links",
      "Rooms for controlled sharing",
      "End-to-end encryption design",
    ],
    live: "https://sharebro.onrender.com",
    github: "https://github.com/Rahul122703/sharesense",
  },
  {
    id: "rohan-arts",
    title: "Rohan Arts",
    description:
      "Artist portfolio built with vanilla HTML/CSS/JS with filter and search.",
    tech: ["HTML", "CSS", "JS"],
    features: ["Artwork filters", "Search", "Mobile friendly"],
    live: "https://rohanarts.vercel.app",
    github: "https://github.com/Rahul122703/rohan_arts",
  },
  {
    id: "elementary-apps",
    title: "Elementary Apps",
    description: "Collection of hosted projects and scripts.",
    tech: ["Netlify", "React", "Vanilla JS"],
    features: ["Central project list", "Categories", "Hosted demos"],
    live: "https://rahulsharmahosted.netlify.app",
    github: "https://github.com/Rahul122703/all_hosted_project_list",
  },
  {
    id: "linkedin-automation",
    title: "LinkedIn Automation",
    description:
      "Selenium script to automate job applications (for learning/automation).",
    tech: ["Python", "Selenium"],
    features: ["Automatic application", "Credential-based automation"],
    github: "https://github.com/Rahul122703/linkedinAutomation",
  },
  {
    id: "sih-scraping",
    title: "SIH Scraping",
    description: "Web scraper for SmartIndiaHackathon data to CSV/Excel.",
    tech: ["Python", "BeautifulSoup"],
    features: ["Data extraction", "Excel output"],
    github: "https://github.com/Rahul122703/SIHscraping",
  },
  {
    id: "sharebro",
    title: "ShareBro",
    description:
      "Secure document sharing platform with rooms, redux, and Prisma/SQLite backend.",
    tech: ["Next.js", "Redux", "SQLite", "Prisma", "Socket.IO"],
    features: ["Dashboard UI", "Room creation & chat", "JWT authentication"],
    live: "https://sharebro.onrender.com",
    github: "https://github.com/Rahul122703/sharesense",
  },
];
