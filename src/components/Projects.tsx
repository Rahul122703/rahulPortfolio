import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          My Signature Projects
        </h2>
        <a
          href="https://rahulsharmahosted.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-neon-blue font-semibold hover:underline">
          See All <FaArrowRight />
        </a>
      </motion.div>

      {/* Project Cards */}
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
