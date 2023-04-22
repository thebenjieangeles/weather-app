import kelvinToCelsius from "./kelvinToCelsius";
export default function appendWeather(weatherData) {
  const app = document.getElementById("app");

  const h1 = document.createElement("h1");
  h1.textContent = `Right now in ${weatherData.name}, it's ${weatherData.weather[0].description}.`;

  const main = document.createElement("main");

  const iconContainer = document.createElement("div");
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const tempContainer = document.createElement("div");
  const temp = document.createElement("h2");
  temp.textContent = `${kelvinToCelsius(weatherData.main.temp)}°C`;

  const detailsContainer = document.createElement("div");

  iconContainer.appendChild(weatherIcon);
  tempContainer.appendChild(temp);
  main.append(iconContainer, tempContainer, detailsContainer);
  app.append(h1, main);
}
