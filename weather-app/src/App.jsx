import { useEffect, useState } from "react";
import "./App.css";
import Cities from "./components/actions";
import Weathers from "./components/weather";
import { library } from "@fortawesome/fontawesome-svg-core";
import { initialData, popularCities } from "./components/data";

export default function App() {
  const [weatherData, setWeatherData] = useState(initialData);
  const [city_name, setCity_name] = useState("Yangon");
  const [selectedId, setSelectedId] = useState(0);
  const apiKey = "2013cb6e5ce36aabf59f456434d7527f";
  useEffect(() => {
    console.log("its here");
    fetchCity(city_name);
  }, [city_name]);
  function onCityClick(city, id) {
    setCity_name(city);
    setSelectedId(id);
  }
  async function fetchCity(cityName) {
    try {
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      const data = await respone.json();
      setWeatherData(data);
    } catch (error) {
      console.error("error in cathing data:", error);
    }
  }
  return (
    <>
      <div className="weatherApp container-fluid rounded">
        <h2 style={{ color: "white" }}>Weather App</h2>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid black",
            margin: "10px 0",
          }}
        />
        <div className="row container-fluid widgets">
          <div className="col-4">
            <Cities
              cityList={popularCities}
              cityClick={onCityClick}
              selectedId={selectedId}
            />
          </div>
          <div className="col-8">
            <Weathers data={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}
