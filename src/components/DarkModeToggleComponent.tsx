import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/UI/UISlice";
import { FiMoon, FiSun } from "react-icons/fi";

interface UIState {
  ui: {
    darkMode: boolean;
  };
}
//adding comment
const DarkModeToggleComponent: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: UIState) => state.ui.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition">
      {darkMode ? (
        <FiSun className="text-lg" />
      ) : (
        <FiMoon className="text-lg" />
      )}
    </button>
  );
};

export default DarkModeToggleComponent;
