import Image from "next/image";

export default function Header({ toggleTheme }) {

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
