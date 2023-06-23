import Select from 'react-select'
import AsyncSelect from 'react-select/async';

export default function Filter() {
  const options = [
    { value: 'Filter by Region', label: 'Filter by Region' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ]

  return (
    <Select 
      defaultValue={options[0]}
      options={options}
      className="mt-5 w-3/5 outline-none rounded-md"
      id="countries"
      name="countries"

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