import axios from 'axios'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const api_key = import.meta.env.VITE_SOME_KEY

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getWeather = (capital) => {
    const request = axios.get(`${weatherUrl}${capital}&APPID=${api_key}`)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, getWeather, create, update, remove }
