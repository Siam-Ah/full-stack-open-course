import { useState } from 'react'

export default function Countries(props) {
    const [selectedCountry, setSelectedCountry] = useState(null)

    const filteredCountries = props.countries.filter(
        country => country.name.common.toUpperCase().includes(props.countryName.toUpperCase())
    )

    return (
        <div>
            {filteredCountries.length !== 0 ? (
              <div>
                {
                  filteredCountries.length > 10 ? (
                    "Too many matches, specify another filter"
                  ) : filteredCountries.length > 1 ? (
                    <div>
                      {filteredCountries.map((country) => (
                        <div key={country.cca3}>
                          {country.name.common}
                          <button onClick={() => setSelectedCountry(country)}>show</button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <CountryInfo country={filteredCountries[0]}/>
                  )
                }
              </div>
            ) : null}

            {selectedCountry && <CountryInfo country={selectedCountry} />}
        </div>
          
    )
}

function CountryInfo(props) {
    return (
        <div>
            <h2>{props.country.name.common}</h2>
            <p>Capital: {props.country.capital}</p>
            <p>Area: {props.country.area}</p>
            <ul>
            {Object.values(props.country.languages).map((language, index) => (
                <li key={index}>{language}</li>
            ))}
            </ul>
            <img src={props.country.flags.png} alt={props.country.name.common} />
        </div>
    )
}
