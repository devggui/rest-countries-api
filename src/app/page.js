'use client'

import { useState } from "react"

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import styles from './components/Theme/Theme.module.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }
  
  const themeClassName = isDarkMode ? styles.dark : styles.light

  return (
    <div className={themeClassName + " h-screen bg-green-50"}>
      <Header 
        toggleTheme={toggleTheme}
      />
      <Main />
    </div>
  )
}