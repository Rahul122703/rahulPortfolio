import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { HomePage, AboutPage } from "./pages";
import { NavbarComponent, FooterComponent } from "./components";

interface UIState {
  ui: {
    darkMode: boolean;
  };
}

function App() {
  const darkMode = useSelector((state: UIState) => state.ui.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Full-page flex container */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white transition">
        {/* Navbar */}
        <NavbarComponent />

        {/* Main content area takes up remaining space */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
