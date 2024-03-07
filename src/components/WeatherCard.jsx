import React, { useState } from 'react'
import './styles/weatherCard.css';

const WeatherCard = ({ weather, temp }) => {

    // console.log(temp)
    const [isCelsius, setIsCelsius] = useState(true)

    const handleIsCelsius = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <article className='weather'>
            <h1 className='weather__title'>Weather App</h1>
            <h2 className='weather__country'>Ciudad <span>{weather?.name}, {weather?.sys.country}</span></h2>

            <section className='weather__body'>
                {
                    weather ?
                        <>
                            <header className='weather__img'>
                                <img className='weather__icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                            </header>
                            <div className='weather__condition'>
                                <h3 className='weather__description'>{weather.weather[0].description}</h3>
                                <ul className='weather__list'>
                                    <li className='weather__list-item'><span className='weather__label'>Wind Speed </span><span className='weather__value'>{weather.wind.speed} m/s</span></li>
                                    <li className='weather__list-item'><span className='weather__label'>Clouds </span><span className='weather__value'>{weather.clouds.all} %</span></li>
                                    <li className='weather__list-item'><span className='weather__label'>Pressure </span><span className='weather__value'>{weather.main.pressure} hPa</span></li>
                                </ul>
                            </div>
                        </>
                        : <h2>loading...</h2>
                }
            </section>

            <section className='weather__principal'>
                <h2 className='weather__temp'>{isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F`}</h2>
            </section>

            <footer className='weather__footer'>
                <button className='weather__btn' onClick={handleIsCelsius}>Change to F° / C°</button>
            </footer>

        </article>
    )
}

export default WeatherCard