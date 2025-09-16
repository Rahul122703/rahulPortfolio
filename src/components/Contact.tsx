import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-4">
        Contact Me
      </motion.h2>

      <div className="glass p-6 rounded-2xl space-y-6">
        {/* Social Links */}
        <div className="flex gap-6 text-2xl justify-center">
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
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:rsharma122703@gmail.com";
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            required
            className="p-3 rounded-md glass"
            placeholder="Your name"
          />
          <input
            required
            className="p-3 rounded-md glass"
            placeholder="Your email"
          />
          <textarea
            required
            className="p-3 rounded-md glass md:col-span-2"
            rows={5}
            placeholder="Message"></textarea>
          <button className="md:col-span-2 px-4 py-2 rounded-full glass hover:scale-105 transition">
            Send (opens email)
          </button>
        </form>
      </div>
    </section>
  );
}
