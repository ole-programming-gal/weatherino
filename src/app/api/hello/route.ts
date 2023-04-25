interface WeatherData {
  temperature: number;
  description: string;
}

export async function getWeatherData(city: string): Promise<WeatherData> {
  const api_id = "6d4c20e1f45d4685f9ed33b4af0f9a77"
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_id}&units=metric`);
  const data = await response.json();

  const weatherData: WeatherData = {
    temperature: data.main.temp,
    description: data.weather[0].description,
  };

  return weatherData;
}

