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
    <section id="experience" className="py-24 px-4 sm:px-8 md:px-12 relative">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 text-center text-neon-violet">
        Experience
      </motion.h2>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-neon-violet/30 h-full z-0"></div>

      {/* Timeline Cards */}
      <div className="relative z-10 space-y-32">
        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className={`relative w-full flex ${
                isLeft ? "justify-end" : "justify-start"
              }`}>
              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px #8C4DFF" }}
                className="glass bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl w-full max-w-2xl border border-neon-violet/30 hover:border-neon-violet transition-all duration-300">
                <h3 className="text-2xl lg:text-3xl font-semibold text-neon-violet mb-2">
                  {exp.role}
                </h3>
                <span className="block text-base lg:text-lg text-slate-400 dark:text-slate-300 mb-5">
                  {exp.company} — {exp.duration}
                </span>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-slate-200">
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
