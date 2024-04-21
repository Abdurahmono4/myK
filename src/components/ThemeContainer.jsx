import { FaSun, FaMoon } from "react-icons/fa";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/useGlobalContext";

const colors = ["#8DECB4", "#76ABAE", "#59D5E0"];

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function darkModeFromLocalStoage() {
  return localStorage.getItem("mode") || themes.winter;
}

function ThemeContainer() {
  const [theme, setTheme] = useState(darkModeFromLocalStoage);
  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    localStorage.setItem("mode", newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const { dispatch } = useContext(GlobalContext);
  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_NAVBAR_BG",
      payload: color,
    });
  };
  return (
    <div className="mb-10 py-3">
      <div className="align-element  flex justify-between items-center">
        {/*colors */}
        <div className="flex flex-row gap-2">
          {colors.map((color) => {
            return (
              <div
                key={color}
                onClick={() => changeColor(color)}
                className="h-7 w-7 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
        {/* theme */}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleClick} />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-7 h-7" />
            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-7 h-7" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThemeContainer;
