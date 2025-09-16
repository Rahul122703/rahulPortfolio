import type { Project } from "../types";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="glass p-6 rounded-2xl shadow-md">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="text-sm opacity-80">{project.tech.join(" • ")}</div>
      </header>
      <p className="mt-3 text-slate-300">{project.description}</p>
      <ul className="mt-3 list-disc ml-5 space-y-1 text-sm">
        {project.features.slice(0, 3).map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        {project.live && (
          <a
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 glass rounded-md"
            href={project.live}>
            Live
          </a>
        )}
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 glass rounded-md"
            href={project.github}>
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
