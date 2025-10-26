import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

const VIDEO_CDN =
  "https://cdn.pixabay.com/video/2020/08/21/47802-451812879_large.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center py-16 px-6 sm:px-12 overflow-hidden border border-none mt-4">
      {/* ==== Background Video ==== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30">
        <source src={VIDEO_CDN} type="video/mp4" />
      </video>

      {/* ==== Overlay (for readability) ==== */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 dark:from-black/60 dark:via-black/40 dark:to-black/80"></div>

      {/* ==== Content Wrapper ==== */}
      <div className="max-w-[900px] w-full mx-auto border border-none flex flex-col ">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ==== Left Content ==== */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white">
              Rahul Sharma
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300">
              Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 italic">
              “Turning ideas into interactive experiences 🚀”
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex justify-center items-center md:justify-start gap-6 mt-6 text-2xl border border-none">
              <a
                href="mailto:rsharma122703@gmail.com"
                className="hover:text-neon-violet transition">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/rahul122703"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon-blue transition">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul122703/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neon-violet transition">
                <FaLinkedin />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1MTpdlmD4y8nNXe5rfZIPJGDJEapJTHtN"
                download="Rahul_Sharma_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-base border border-neon-blue rounded-2xl hover:bg-neon-blue transition">
                <FaDownload className="text-lg" />
                <span>Resume</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 glass p-4 rounded-xl shadow-lg max-w-lg mx-auto md:mx-0">
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200">
                Full-stack developer with multiple internship experiences,
                specializing in frontend and solid backend knowledge. Skilled at
                building responsive interfaces, APIs, and scalable apps.
              </p>
            </motion.div>
          </div>
        </div>
        {/* ==== GitHub Section ==== */}
        <div className="relative z-10 mt-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">
              GitHub Activity
            </h3>
            <GitHubCalendar
              username="rahul122703"
              colorScheme="dark"
              blockSize={12}
              blockMargin={5}
              fontSize={12}
            />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src="https://github-readme-stats.vercel.app/api?username=rahul122703&show_icons=true&theme=radical"
              alt="GitHub stats"
              className="rounded-xl shadow-lg w-full"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahul122703&layout=compact&theme=radical"
              alt="Top languages"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
