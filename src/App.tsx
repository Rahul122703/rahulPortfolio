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

import AnimatedCursor from "react-animated-cursor";

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
      className={`transition-colors duration-500 ${
        darkMode ? "bg-[#06060A] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}>
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="140,77,255" // RGB for neon purple
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={8}
        clickables={["a", "button", ".link"]}
      />

      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <Hero />
      <main className="max-w-6xl mx-auto px-6 border border-none">
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
