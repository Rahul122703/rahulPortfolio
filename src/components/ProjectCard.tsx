"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GalleryModal from "./GalleryModal"; // import the fullscreen modal

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  live?: string;
  github?: string;
  images: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.article
        whileHover={{ scale: 1.03 }}
        className="glass p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl flex flex-col bg-gradient-to-br from-white/20 dark:from-black/30 to-white/10 dark:to-black/20 backdrop-blur-lg transition-all">
        {/* Title & Tech */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-3">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs md:text-sm px-3 py-1 bg-white/20 dark:bg-black/30 text-white rounded-full font-medium">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Single Preview Image */}
        {project.images.length > 0 && (
          <div className="relative mb-5 cursor-pointer group w-full rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => setModalOpen(true)}
            />
          </div>
        )}

        {/* Description */}
        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 mb-5">
          {project.description}
        </p>

        {/* Features */}
        <ul className="list-disc ml-5 text-sm md:text-base mb-6 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-md hover:scale-105 transition">
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl shadow-md hover:scale-105 transition">
              <FaGithub className="mr-2" /> GitHub
            </a>
          )}
        </div>
      </motion.article>

      {/* Fullscreen Gallery Modal */}
      {modalOpen && (
        <GalleryModal
          images={project.images}
          initialIndex={0}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
