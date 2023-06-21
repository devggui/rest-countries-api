'use client'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

export default function Home() {
  return (
    <div className={theme + " h-screen"}>
      <Header 
        themeClassName={theme}
      />
      <Main />
    </div>
  )
}