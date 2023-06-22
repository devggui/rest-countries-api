import Image from "next/image";

export default function Search() {
  return (    
    <div className="relative flex items-center justify-start">
      <label className="absolute left-5">
        <Image 
          src={'/icons/search-light.svg'}
          alt="Lupa"
          width={20}
          height={20}
        />
      </label>
      <input 
        type="text"
        id="search"
        placeholder="Search for a country..."
        className="w-full pl-16 pr-2 py-4 bg-white outline-none shadow-inner rounded-md"
      /> 
    </div>
  )
}