export default function DarkToggle({
  theme,
  setTheme,
}: {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full glass focus:ring-2 focus:ring-offset-2">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
