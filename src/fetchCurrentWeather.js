export default async function fetchCurrentWeather(city) {
  const API_KEY = "3c7ba30cdedad9f065361b3b1b7e4565";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();
  return weatherData;
}
