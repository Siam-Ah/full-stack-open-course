import { useState, useEffect } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'
import Weather from './components/Weather'
import countriesService from './services/countries'


export default function App() {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    console.log("effect")
    countriesService
      .getAll()
      .then(data => {
        console.log("promise fulfilled")
        setCountries(data)
      })
  }, [])

  function handleNameChange(event) {
    setCountryName(event.target.value)
  }

  const countryList = countryName ? 
    <Countries 
      countryName={countryName} 
      countries={countries} 
      selectedCountry={selectedCountry} 
      setSelectedCountry={setSelectedCountry}
    /> : null

  return (
    <div>
      <Search countryName={countryName} handleNameChange={handleNameChange} />
      {countryList}
      {selectedCountry && <Weather selectedCountry={selectedCountry} />}
    </div>
  )
}
