import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'


export default function App() {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log("effect")
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log("promise fulfilled")
        setCountries(response.data)
      })
  }, [])

  function handleNameChange(event) {
    setCountryName(event.target.value)
  }

  const countryList = countryName ? <Countries countryName={countryName} countries={countries} /> : null

  return (
    <div>
      <Search countryName={countryName} handleNameChange={handleNameChange} />
      {countryList}
    </div>
  )
}
