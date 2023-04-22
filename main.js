import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";

fetchCurrentWeather("Baguio").then((data) => appendWeather(data));
