import useLocalStroage from "./useLocalStroage";
import c from "./style.module.css";
export default function DarkLightTheme() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");
  return (
    <div
      className={
        theme === "dark"
          ? `${c.container} ${c.dark}`
          : `${c.container} ${c.light}`
      }
    >
      <h1>Hello World</h1>
      <button
        className={
          theme === "dark" ? `${c.light} ${c.handle}` : `${c.dark} ${c.handle}`
        }
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        Change Theme
      </button>
    </div>
  );
}
