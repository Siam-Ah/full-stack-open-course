export default function Countries(props) {
    const filteredCountries = props.countries.filter(
        country => country.name.common.toUpperCase().includes(props.countryName.toUpperCase())
    )

    return (
        filteredCountries.length !== 0 ?
            <div>
                {
                    filteredCountries.length > 10 ? "Too many matches, specify another filter" : 
                        filteredCountries.length > 1 ?
                            <div>
                                {filteredCountries.map(country => <div>{country.name.common}</div>)}
                            </div> :
                                <div>
                                    <h2>{filteredCountries[0].name.common}</h2>
                                    capital {filteredCountries[0].capital[0]}
                                    <br />area {filteredCountries[0].area}
                                    <ul>
                                        {
                                            Object.values(filteredCountries[0].languages).map(language => <li>{language}</li>)
                                        }
                                    </ul>
                                    <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].alt}/>
                                </div>
                }
            </div> :
            null
    )
}