import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
import PantError from './components/PantError'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [pantError, setPantError] = useState(false)

  const success = info => {
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude,
    })
    // console.log(info)
  }

  const funcerror = () => {
    setIsLoading(false)
    setPantError(true)
  }

  useEffect(() => {

    // getCurrentPosition es un método de la API de geolocalización del navegador que toma una 
    // función de éxito como argumento. Cuando se ejecuta, este método intenta obtener la 
    // ubicación actual del usuario y llama a la función success cuando tiene éxito

    // La función success no se llama directamente por tu código; en cambio, la API de geolocalización
    // la invoca y le pasa un objeto Position como argumento. El objeto Position contiene información
    // sobre la ubicación, como las coordenadas de latitud y longitud, y se accede mediante 
    // info.coords.latitude y info.coords.longitude.

    navigator.geolocation.getCurrentPosition(success, funcerror)
  }, [])
  

  // console.log(coords)

  // console.log(weather)

  useEffect(() => {
    if (coords) {

      const APIKEY = 'f687e1e30568acf1a4bc79392262bd8a'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = ((9/5*celsius) + 32).toFixed(1)
          setTemp({
            celsius,
            fahrenheit
          })
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
      }
  }, [coords])

  // console.log(temp)
  return (

    <div className='app'>

      {
        isLoading?
          <Loader />

          : 
          pantError ?
          < PantError />

          :
          < WeatherCard 
          weather = {weather}
          temp = {temp} />
      }
    </div>
  )
}

export default App
