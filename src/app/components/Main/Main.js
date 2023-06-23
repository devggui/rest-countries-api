import { useEffect, useState } from "react"
import axios from "axios"

import Search from './Search/Search'
import Filter from './Filter/Filter'
import Card from './Card/Card'

export default function Main() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
      console.log(response.data)      
    })
  }, [])

  return (
    <main className="flex flex-col bg-[var(--Very-Light-Gray)] p-5 items-center justify-start">
      <div className="w-full max-w-md">        
        <Search />
        <Filter />
        <div className="flex flex-col items-center justify-center">
          {countries.map((country, index) => {
            return (
              <Card 
                key={index}
                src={country.flags.png}
                alt={country.flags.alt ? country.flags.alt : 'No description'}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}