import {
  faTemperatureFull,
  faDroplet,
  faCloud,
  faCloudRain,
  faSnowflake,
  faSun,
  faSmog,
  faCloudBolt,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weathers({ data }) {
  return (
    <>
      <div className=" weatherConditions">
        <Main data={data} />
        <Other data={data} />
        <Detail data={data} />
      </div>
    </>
  );
}

function Main({ data }) {
  const weatherLogoUrl =
    " https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

  const weather = filtWeather(data.weather[0].main);
  return (
    <>
      <div className="main">
        <section className="weatherBox">
          {weather} <span> </span>
          {data.weather[0].main} weather in{" "}
          <i style={{ color: "blue" }}>{data.name}</i>
        </section>
        <section className="weatherBox1">
          {data.weather[0].description}
          <img src={weatherLogoUrl} alt="weather icon" />
        </section>
      </div>
    </>
  );
}

function Other({ data }) {
  return (
    <>
      <div className="main rounded-3">
        <section className="weatherBox">
          <span>wind speed {data.wind.speed}</span>
          <FontAwesomeIcon
            icon={faWind}
            style={{ fontSize: "40px", textAlign: "center" }}
            beat
          />
        </section>
        <section
          className="weatherBox"
          style={{ backgroundColor: "rgb(19, 211fade" }}
        >
          clouds {data.clouds.all}%{" "}
          <FontAwesomeIcon
            icon={faCloud}
            style={{ fontSize: "40px", textAlign: "center" }}
          />
        </section>
      </div>
    </>
  );
}

function Detail({ data }) {
  let temp = Math.floor(parseInt(data.main.temp) - 273.15);
  let feelTemp = Math.floor(parseInt(data.main.feels_like) - 273.15);
  let humidity = parseInt(data.main.humidity);
  return (
    <>
      <section className="detail">
        <ul className="list-group">
          <li className="list-group-item">
            Temperature{" "}
            <FontAwesomeIcon
              icon={faTemperatureFull}
              style={{ color: temp >= 30 ? "red" : "blue" }}
            />
            {temp}°C
          </li>
          <li className="list-group-item">
            Feels like{" "}
            <FontAwesomeIcon
              icon={faTemperatureFull}
              style={{ color: feelTemp >= 30 ? "red" : "blue" }}
            />
            {feelTemp}°C
          </li>
          <li className="list-group-item">
            Humidity{" "}
            <FontAwesomeIcon icon={faDroplet} style={{ color: "blue" }} />
            {humidity}%
          </li>
        </ul>
      </section>
    </>
  );
}

function filtWeather(main) {
  switch (main) {
    case "Thunderstorm":
      return (
        <FontAwesomeIcon
          icon={faCloudBolt}
          style={{ color: "black", fontSize: "32px" }}
          fade
        />
      );
    case "Drizzle":
      return (
        <FontAwesomeIcon
          icon={faCloudRain}
          style={{ color: "blue", fontSize: "32px" }}
          fade
        />
      );
    case "Rain":
      return (
        <FontAwesomeIcon
          icon={faCloudRain}
          style={{ color: "blue", fontSize: "32px" }}
          fade
        />
      );
    case "Snow":
      return (
        <FontAwesomeIcon
          icon={faSnowflake}
          style={{ color: "blue", fontSize: "32px" }}
          fade
        />
      );
    case "Clear":
      return (
        <FontAwesomeIcon
          icon={faSun}
          style={{ color: "black", fontSize: "32px" }}
          fade
        />
      );
    case "Clouds":
      return (
        <FontAwesomeIcon
          icon={faCloud}
          style={{ color: "black", fontSize: "32px" }}
          fade
        />
      );
    default:
      return (
        <FontAwesomeIcon
          icon={faSmog}
          style={{ color: "gray", fontSize: "32px" }}
          fade
        />
      );
  }
}
const atmosphereG = [
  "Mist",
  "Smoke",
  "Haze",
  "Dust",
  "Fog",
  "Sand",
  "Dust",
  "Ash",
  "Squall",
  "Tornado",
];
