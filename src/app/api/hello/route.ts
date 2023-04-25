interface WeatherData {
  temperature: number;
  humidity: number;
  wSpeed: number;
  description: string;
}

export async function getWeatherData(city: string): Promise<WeatherData> {
  try{
    const api_id = "6d4c20e1f45d4685f9ed33b4af0f9a77"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_id}&units=metric`);
    const data = await response.json();
    console.log("", data);
    const weatherData: WeatherData = {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    wSpeed: data.wind.speed,
    description: data.weather[0].main,
  }
  return weatherData;
  }catch(error: any){
    console.log(error)
    const weatherData = {
      temperature: 0,
      humidity: 0,
      wSpeed: 0,
      description: "",
    }
    return weatherData
  }
}

