import { DarkModeToggleComponent } from "./index";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="sticky top-4 z-50 mx-auto max-w-6xl px-6">
      <nav className="glass flex items-center justify-between p-4 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 dark:border-white/20">
        {/* === Left Name (Always visible) === */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="font-extrabold text-xl md:text-2xl tracking-tight select-none text-black dark:text-white">
          RAHUL SHARMA
        </motion.a>

        {/* === Desktop Links === */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, color: "#8C4DFF" }}
              whileTap={{ scale: 0.95 }}
              className="relative text-slate-800 dark:text-slate-200 font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-neon-violet after:transition-all">
              {l.label}
            </motion.a>
          ))}
          {/* Dark mode toggle */}
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring" }}>
            <DarkModeToggleComponent />
          </motion.div>
        </div>

        {/* === Mobile Menu === */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggleComponent />

          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass px-3 py-2 rounded-lg shadow-lg">
              ☰
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-[#0b0b0f]/90 dark:bg-[#111] backdrop-blur-xl shadow-xl ring-1 ring-white/10 focus:outline-none p-4 space-y-3 rounded-xl">
                {links.map((l, i) => (
                  <Menu.Item key={l.id}>
                    {({ active }) => (
                      <motion.a
                        href={`#${l.id}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className={`block px-3 py-2 rounded-lg transition ${
                          active
                            ? "bg-neon-violet/20 text-neon-violet"
                            : "text-slate-300 hover:text-neon-violet"
                        }`}>
                        {l.label}
                      </motion.a>
                    )}
                  </Menu.Item>
                ))}
              </motion.div>
            </Menu.Items>
          </Menu>
        </div>
      </nav>
    </motion.header>
  );
}
