import Search from './Search/Search'
import Filter from './Filter/Filter'

export default function Main() {
  return (
    <main className="flex flex-col bg-[var(--Very-Light-Gray)] h-full p-5 items-center justify-start">
      <div className="w-full max-w-md">        
        <Search />
        <Filter />
        {/* <Card /> */}
      </div>
    </main>
  )
}