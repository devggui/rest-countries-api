import Image from "next/image";
import { useState } from "react";
import styles from '../Theme/Theme.module.css';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const themeClassName = isDarkMode ? styles.dark : styles.light

  return (
    <header className={"flex flex-row justify-between items-center text-center border-b-2 border-solid shadow-md p-5"}>
      <h1 className="font-bold">Where in the world?</h1>
      <div className="flex flex-row items-center justify-center text-center">
        <button 
          className="mr-3"
          onClick={toggleTheme}
          id="theme"
        >
          <Image 
            src={'/icons/moon-light.svg'}
            alt="Lua"
            width={20}
            height={20}
          />
        </button>
        <span>Dark Mode</span>
      </div>
    </header>
  )
}
