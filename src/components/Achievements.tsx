
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-4">
        Achievements
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">
            Pollverse — 1st prize (College exhibition)
          </p>
        </div>
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">Top 4 — 24hr intercollege hackathon</p>
        </div>
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">
            Silver — Youth India Olympics (Taekwondo)
          </p>
        </div>
      </div>
    </section>
  );
}
