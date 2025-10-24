import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  );
}
