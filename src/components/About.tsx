import { motion, Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import {
  SiMongodb,
  SiSqlite,
  SiAirtable,
  SiCodepen,
  SiNetlify,
  SiVercel,
  SiSelenium,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiExpress,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { ReactNode } from "react";

interface SkillItem {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export default function About() {
  const objectiveLines: string[] = [
    "Full-stack developer with multiple internship experiences, specializing in frontend and solid backend knowledge.",
    "Skilled at building responsive interfaces, APIs, databases, and web scraping.",
    "Freelancer available for hire — let's build your next project together! 🚀",
  ];

  const skills: SkillCategory[] = [
    {
      category: "Testing & Scraping",
      items: [
        { name: "Selenium", icon: <SiSelenium /> },
        { name: "BeautifulSoup", icon: <SiPython /> },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Render", icon: <SiCodepen /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },

    {
      category: "Backend & APIs",
      items: [
        { name: "Flask", icon: <SiFlask /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Airtable", icon: <SiAirtable /> },
      ],
    },
    {
      category: "Languages & Tools",
      items: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <SiSqlite /> },
        { name: "Git", icon: <SiGit /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
  ];

  // Animation variants for categories
  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section id="about" className="py-12 px-4 sm:px-8 md:px-16">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        About Me
      </motion.h2>

      {/* Glass container */}
      <motion.div
        className="glass p-6 md:p-10 rounded-2xl shadow-lg bg-white/10 dark:bg-black/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* Typing effect for objective */}
        <motion.p
          className="text-base md:text-lg text-slate-800 dark:text-slate-200 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <Typewriter
            words={objectiveLines}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={20}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Skills Section */}
        <div className="mt-8 space-y-8">
          {skills.map((cat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}>
              <h3 className="font-semibold text-black dark:text-white text-lg md:text-xl mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((s, i) => (
                  <Tilt
                    key={i}
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    glareColor="#ffffff"
                    glarePosition="all"
                    scale={1.05}
                    transitionSpeed={400}>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm md:text-base cursor-default text-black dark:text-white transition-colors duration-300 shadow-md hover:shadow-xl">
                      <span className="text-lg">{s.icon}</span>
                      <span>{s.name}</span>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
