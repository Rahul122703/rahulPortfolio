import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Education,
  Achievements,
  Footer,
} from "./components";

interface UIState {
  ui: {
    darkMode: boolean;
  };
}

export default function App() {
  const darkMode = useSelector((state: UIState) => state.ui.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#06060A] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}>
      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
