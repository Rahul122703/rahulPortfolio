

export default function Footer() {
  return (
    <footer className="mt-12 py-6">
      <div className="max-w-6xl mx-auto text-center text-sm opacity-80">
        © {new Date().getFullYear()} Rahul Sharma — Built with React + Framer
        Motion. |{" "}
        <a href="#contact" className="underline">
          Resume
        </a>
      </div>
    </footer>
  );
}
