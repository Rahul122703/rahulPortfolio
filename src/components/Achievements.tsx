"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section id="achievements" className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold mb-6">
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <motion.a
          custom={3}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          href="https://res.cloudinary.com/dle5gmw0f/image/upload/v1761327272/sprintNova4th_ttn8yl.jpg"
          target="_blank"
          rel="noreferrer"
          className="glass p-5 rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-transform duration-300">
          <p className="font-semibold text-lg">🥇 Hackathon Winner</p>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Won the <strong>Fourth Prize</strong> among 28 teams in a
            college-level hackathon.
          </p>
          <p className="text-xs mt-2 text-blue-500 underline">
            View Certificate
          </p>
        </motion.a>

        <motion.a
          custom={2}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          href="https://res.cloudinary.com/dle5gmw0f/image/upload/v1761326380/24hrhack_bonozc.png"
          target="_blank"
          rel="noreferrer"
          className="glass p-5 rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-transform duration-300">
          <p className="font-semibold text-lg">💻 Hackathon Finalist</p>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Secured <strong>4th Place</strong> in a 24-hour inter-college
            hackathon among 50+ teams.
          </p>
          <p className="text-xs mt-2 text-blue-500 underline">
            View Certificate
          </p>
        </motion.a>

        <motion.a
          custom={1}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          href="https://res.cloudinary.com/dle5gmw0f/image/upload/v1761327638/pollverseFirstPrice_vm0bny.png"
          target="_blank"
          rel="noreferrer"
          className="glass p-5 rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-transform duration-300">
          <p className="font-semibold text-lg">
            🏅 ShareBro — Project Exhibition Winner
          </p>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Won <strong>First Prize</strong> for ShareBro at the college-level
            project exhibition.
          </p>
          <p className="text-xs mt-2 text-blue-500 underline">
            View Certificate
          </p>
        </motion.a>
        <motion.a
          custom={0}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          href="https://res.cloudinary.com/dle5gmw0f/image/upload/v1761327638/pollverseFirstPrice_vm0bny.png"
          target="_blank"
          rel="noreferrer"
          className="glass p-5 rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-transform duration-300">
          <p className="font-semibold text-lg">
            🏆 PollVerse — Project Exhibition Winner
          </p>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Won <strong>First Prize</strong> for PollVerse at the college-level
            project exhibition.
          </p>
          <p className="text-xs mt-2 text-blue-500 underline">
            View Certificate
          </p>
        </motion.a>

        <motion.a
          custom={4}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          href="https://monkeytype.com/profile/rahul122703"
          target="_blank"
          rel="noreferrer"
          className="glass p-5 rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-transform duration-300">
          <p className="font-semibold text-lg">⌨️ Touch Typing Excellence</p>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Ranked among the <strong>Top 11.76%</strong> globally on Monkeytype
            (15s category).
          </p>
          <p className="text-xs mt-2 text-blue-500 underline">View Profile</p>
        </motion.a>
      </div>
    </section>
  );
}
