
import { motion } from "framer-motion";

// average sems calculation mentioned in the file. Using given CGPA (8.26) directly.
export default function Education() {
  return (
    <section id="education" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-4">
        Education
      </motion.h2>
      <div className="glass p-4 rounded-lg">
        <p className="font-semibold">
          B.E. Information Technology — Xavier Institute of Engineering
        </p>
        <p className="text-sm opacity-80">CGPA: 8.26 (aggregate till sem 5)</p>
      </div>
    </section>
  );
}
