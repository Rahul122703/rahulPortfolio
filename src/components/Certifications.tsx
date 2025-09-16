
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-4">
        Certifications
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">SQL (Basic) — HackerRank</p>
        </div>
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">Python Bootcamp — Udemy</p>
        </div>
        <div className="glass p-4 rounded-lg">
          <p className="font-semibold">Web Design Course — My Udaan Trust</p>
        </div>
      </div>
    </section>
  );
}
