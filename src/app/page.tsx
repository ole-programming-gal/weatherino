"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { use, useState,useEffect } from 'react'
import { getWeatherData } from './api/hello/route';

export default function Home() {
  const [City, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({ temperature: 0, description: "" });
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
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.search}>
        <input type = "text"
        value = {City}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.CityField}/>
      </div>
      <div>
      <div className={styles.weatherDisplay}>
        <Image src={weatherData.temperature > 28 ? "/public/hot.png" : "/public/cold.png"}
        alt = ""
        height={64}
        width={64}
        />
        {weatherData.temperature} °C
      </div>
      </div>
      <div className={styles.ref}>
        <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </div>
    </main>
  )
}
