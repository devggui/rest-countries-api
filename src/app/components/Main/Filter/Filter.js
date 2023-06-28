import Select from 'react-select'
import AsyncSelect from 'react-select/async';

export default function Filter({
  regions
}) {
  const defaultValue = ['Filter by Region']
  let allRegions = []

  regions.map(region => {    
    allRegions.push(region.region)  
  })

  const uniqueRegion = [...new Set(allRegions)]  

  const options = [
    { value: 'Filter by Region', label: 'Filter by Region' },

    uniqueRegion.map(region => {
      return (        
        { 
          value: region, 
          label: region 
        }
      )
    })
  ]

  console.log(options)
  return (
    <Select 
      placeholder="Filter by Region"      
      options={options[1]}
      className="my-5 w-3/5 outline-none rounded-md" 
      isClearable={true}
      isSearchable={true}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles, 
          borderColor: 'transparent',         
          padding: '10px',
          borderRadius: '6px'
        }),
      }}
    />
  )
}