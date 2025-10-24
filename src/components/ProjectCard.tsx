import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="glass p-4 md:p-6 rounded-2xl shadow-lg flex flex-col">
      {/* Project Title & Tech */}
      <header className="flex items-center justify-between mb-3">
        <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs md:text-sm px-2 py-1 bg-white/10 dark:bg-black/20 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Image Carousel */}
      <div className="relative mb-3 cursor-pointer group">
        <motion.img
          src={project.images[activeImage]}
          alt={project.title}
          className="w-full h-48 md:h-56 object-cover rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          onClick={() => setModalOpen(true)}
        />

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <div className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(
                  activeImage === 0
                    ? project.images.length - 1
                    : activeImage - 1
                );
              }}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50">
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(
                  activeImage === project.images.length - 1
                    ? 0
                    : activeImage + 1
                );
              }}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50">
              ›
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm md:text-base mb-3">
        {project.description}
      </p>

      {/* Features */}
      <ul className="list-disc ml-5 text-xs md:text-sm mb-3 space-y-1">
        {project.features.slice(0, 3).map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* Icon-only Links */}
      <div className="flex gap-3 mt-auto">
        {project.live && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.live}
            className="p-3 bg-white/10 dark:bg-black/20 rounded-full flex items-center justify-center hover:bg-neon-violet/20 transition">
            <FaExternalLinkAlt size={18} />
          </a>
        )}
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.github}
            className="p-3 bg-white/10 dark:bg-black/20 rounded-full flex items-center justify-center hover:bg-neon-violet/20 transition">
            <FaGithub size={18} />
          </a>
        )}
      </div>

      {/* Modal for Images */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center p-4"
          onClick={() => setModalOpen(false)}>
          <div className="relative w-full max-w-3xl">
            <img
              src={project.images[activeImage]}
              alt={project.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            {/* Carousel inside modal */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(
                      activeImage === 0
                        ? project.images.length - 1
                        : activeImage - 1
                    );
                  }}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50">
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(
                      activeImage === project.images.length - 1
                        ? 0
                        : activeImage + 1
                    );
                  }}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50">
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
