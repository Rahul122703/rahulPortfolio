import { motion } from "framer-motion";
import { DarkModeToggleComponent } from "./index";
import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineProfile,
  AiOutlineHome,
} from "react-icons/ai";

const links = [
  { id: "hero", icon: <AiOutlineHome size={24} />, label: "Hero" },
  { id: "projects", icon: <AiOutlineProject size={24} />, label: "Projects" },
  {
    id: "experience",
    icon: <AiOutlineProfile size={24} />,
    label: "Experience",
  },
  { id: "education", icon: <AiOutlineBook size={24} />, label: "Education" },
  { id: "about", icon: <AiOutlineUser size={24} />, label: "About" },
];

export default function Navbar() {
  return (
    <>
      {/* === Desktop Navbar === */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-6xl w-full px-6 hidden md:block">
        <nav className="glass flex items-center justify-between p-4 rounded-2xl shadow-xl backdrop-blur-lg border border-white/10 dark:border-white/20">
          {/* Logo / Name */}
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

          {/* Links */}
          <div className="flex items-center gap-8">
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

            {/* Dark Mode */}
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring" }}>
              <DarkModeToggleComponent />
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* === Mobile Bottom Navbar === */}
      <nav className="fixed bottom-0 left-0 w-full md:hidden bg-white/20 dark:bg-black/30 backdrop-blur-lg border-t border-white/10 dark:border-white/20 z-50 flex justify-around items-center py-2 shadow-inner overflow-x-auto">
        {links.map((l) => (
          <motion.a
            key={l.id}
            href={`#${l.id}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-slate-800 dark:text-slate-200 p-2 rounded-lg flex flex-col items-center justify-center hover:text-neon-violet transition-colors">
            {l.icon}
            <span className="text-xs">{l.label}</span>
          </motion.a>
        ))}

        {/* Dark Mode Toggle */}
        <DarkModeToggleComponent />
      </nav>
    </>
  );
}
