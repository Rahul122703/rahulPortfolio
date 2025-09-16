
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "KanoonKeHaath",
    duration: "December 2024 – July 2025",
    points: [
      "Built responsive and user-friendly interfaces with React.js and Tailwind CSS.",
      "Developed backend REST APIs in Next.js and validated endpoints with Postman.",
      "Implemented frontend data fetching with Axios and managed global state using the Context API.",
      "Applied Git branching strategies to streamline collaboration, resulting in successfully merged Pull Requests.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "aAHARAN EduSMART Pvt. Ltd.",
    duration: "August 2023 – October 2023",
    points: [
      "Contributed to the Novare Project with secure, scalable, and reliable web modules.",
      "Built responsive and dynamic interfaces while improving code maintainability using TypeScript.",
      "Implemented global state management with Redux Toolkit to handle complex workflows efficiently.",
      "Delivered client-focused solutions with CI/CD integration for quality, usability, and timely deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 sm:px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-neon-violet/50 ml-4 md:ml-8">
        {experiences.map((exp, i) => {
          // Alternate slide direction
          const slideFromLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: slideFromLeft ? -100 : 100,
                scale: 0.9,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="mb-12 pl-6 md:pl-10 relative flex justify-start md:justify-start">
              {/* Circle on timeline */}
              <div className="absolute -left-[10px] md:-left-6 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-neon-violet shadow-lg" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #8C4DFF" }}
                className={`glass p-4 md:p-6 rounded-xl shadow-lg bg-white/10 dark:bg-black/20 backdrop-blur-md w-full md:w-[85%]`}>
                <h3 className="font-semibold text-lg md:text-xl">
                  {exp.company} — {exp.role}
                </h3>
                <span className="text-sm md:text-base text-slate-500 dark:text-slate-300">
                  {exp.duration}
                </span>
                <ul className="mt-2 list-disc ml-5 text-sm md:text-base text-slate-700 dark:text-slate-200 space-y-1">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
