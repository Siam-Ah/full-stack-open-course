import { useState } from "react"
import { useEffect } from "react"
import countriesService from '../services/countries'

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState('')

    useEffect(() => {
        const targetCapital = `${props.selectedCountry.capital[0]},${props.selectedCountry.cca2}`
        setWeatherData(searchWeather(targetCapital))
    }, [props.selectedCountry])

    function searchWeather(capital) {
        countriesService
          .getWeather(capital)
          .then(data => {
            console.log("promise fulfilled")
            setWeatherData(data)
          })
      }

      function getWeatherIcon(description) {
        let iconId = ""
        switch(description) {
            case "clear sky":
                iconId = "01d"
                break
            case "few clouds":
                iconId = "02d"
                break
            case "scattered clouds":
                iconId = "03d"
                break
            case "broken clouds":
                iconId = "04d"
                break
            case "shower rain":
                iconId = "09d"
                break
            case "rain":
                iconId = "10d"
                break
            case "thunderstorm":
                iconId="11d"
                break
            case "snow":
                iconId="13d"
                break
            case "mist":
                iconId="50d"
                break
        }
        return iconId
      }

      return (
        weatherData && 
        <div>
            <h3>Weather in {props.selectedCountry.capital[0]}</h3>
            <p>temperature {(weatherData.main.temp - 273.15).toFixed(2)} celcius</p>
            <img src={`https://openweathermap.org/img/wn/${getWeatherIcon(weatherData.weather[0].description)}@2x.png`} />
            <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      )
}