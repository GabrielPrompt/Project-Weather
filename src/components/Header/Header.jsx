import React, { useState, useEffect } from 'react'
import "./style.scss"
import Modal from '../Modal/Modal'

const Header = () => {
    const [country, setCountry] = useState([])
    const [latestCity, setLatestCity] = useState('')
    const [city, setCity] = useState('Sao Paulo')
    const [search, setSearch] = useState(false)
    const [weather, setWeather] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(!search)
    }

    useEffect(() => {
        async function getCityWeather() {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=da14b980badc4c2f904145411240103&q=${city}&aqi=no`)
            const data = await response.json()
            const apiCountry = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a051513c6cec715dbc33dc088c2e6d78&lang=pt-br`)
            const res = await apiCountry.json()
            setCountry(res)
            setWeather(data)
            setLatestCity(city)
        }

        getCityWeather()
    }, [search])





    return (
        <div>
            <form action='' onSubmit={handleSubmit} id='search-container'>
                <h1 id='title_weather'> Previsão do tempo </h1>
                <input
                    placeholder='Insira aqui o nome da cidade'
                    type="text"
                    className='search'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </form>

            {latestCity && (
                <Modal
                    temp_max={parseInt(country.main.temp_max) }
                    temp_min={parseInt(country.main.temp_min) }
                    cidade={weather.location.name}
                    estado={weather.location.region}
                    pais={weather.location.country}
                    temp={parseInt(weather.current.temp_c)}
                    humidade={weather.current.humidity}
                    vento={weather.current.wind_mph}
                    sensacao={parseInt(weather.current.feelslike_c)}
                    icon={weather.current.condition.icon}
                />


            )}

        </div>
    )
}

export default Header
