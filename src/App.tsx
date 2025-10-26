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
        innerSize={12}
        outerSize={40}
        color="0,255,100" // neon green RGB
        outerAlpha={0.3}
        innerScale={0.8}
        outerScale={2.5}
        trailingSpeed={12}
        clickables={["a", "button", ".link"]}
        outerStyle={{
          border: "2px solid #00FF64", // neon green border
          boxShadow: "0 0 15px #00FF64", // glowing effect
        }}
        innerStyle={{
          backgroundColor: "#00FF64", // neon green inner dot
          boxShadow: "0 0 8px #00FF64", // subtle glow
        }}
      />

      {/* Navbar always on top */}
      <Navbar />

      {/* Main content */}
      <Hero />
      <main className="max-w-6xl mx-auto border border-none">
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
