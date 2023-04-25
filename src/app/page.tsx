"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { use, useState,useEffect } from 'react'
import { getWeatherData } from './api/hello/route';

export default function Home() {
  const [City, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({ temperature: 0, humidity:0,wSpeed:0 , description: "" });
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(City);
      setWeatherData(data);
    };

    fetchWeather();
  }, [City]);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCity(City)
    }
  }
  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <input type = "text"
        value = {City}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.CityField}/>
      </div>
      <div className={styles.center}>
      <Image
        src={`/${weatherData.description}.png`}
        alt = "/Mist.png"
        height={128}
        width={128}
        />
      </div>
      <div>
      <div className={styles.weatherDisplay}>
        <h1>{weatherData.temperature} °C </h1>
      </div>
      </div>
      <div className = {styles.infoContainer}>
      <Image
        src= "/humidity.png"
        alt = ""
        height={64}
        width={64}
        id = "Humidityimg"
        />
        <h1>{weatherData.humidity}</h1>
        <Image
        src= "/wind.png"
        alt = ""
        height={64}
        width={64}
        id = "Windimg"
        />
        <h1>{weatherData.wSpeed}</h1>
      </div>
      <div className={styles.ref}>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>
    </main>
  )
}
