"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-semibold text-center mb-10">
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        {/* Social Links */}
        <div className="flex gap-6 justify-center text-2xl mb-8">
          <a
            href="mailto:rsharma122703@gmail.com"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/rahul122703"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul122703/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a
            href="https://res.cloudinary.com/rahulcloud/raw/upload/v1739754123/Rahul_Sharma_Resume.pdf?fl_attachment:Rahul_Sharma_Resume.pdf"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaDownload />
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:rsharma122703@gmail.com";
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
            placeholder="Your name"
          />
          <input
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full"
            placeholder="Your email"
          />
          <textarea
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition md:col-span-2"
            rows={5}
            placeholder="Message"></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="md:col-span-2 mt-4 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
