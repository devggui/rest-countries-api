import Image from "next/image";

export default function Card({
  src,
  alt,
  name,
  population,
  region,
  capital
}) {

  const imageLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <div className="w-64 h-max bg-white shadow-inner my-5 flex flex-col max-w-xs rounded-md">
      <Image 
        loader={imageLoader}
        src={src}
        alt={alt}
        width={500}
        height={400}
        unoptimized
        priority
        className="rounded-t-md"
      />
      <div className="flex flex-col w-full text-left p-5">
        <h1 className="font-bold text-2xl mb-5">{name}</h1>
        <div>
          <strong>Population:  </strong>
          <span>{population}</span>
        </div>
        <div>
          <strong>Region:  </strong>        
          <span>{region}</span>
        </div>
        <div>
          <strong>Capital:  </strong>        
          <span>{capital}</span>
        </div>
      </div>
    </div>
  )
}