import React, { useState } from "react";
import axios from "axios";
import DateDisplay from "./DateDisplay";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const apiKey = "7f9683b5472584ac4ff49bee2b0bc129";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then((response) => {
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,

        description: response.data.weather[0].description,

        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        date: new Date(response.data.dt * 1000),
      });
    });
  };

  const handleUnitChange = (newUnit) => {
    if (unit !== newUnit) {
      setUnit(newUnit);
      if (weather) {
        const apiKey = "7f9683b5472584ac4ff49bee2b0bc129";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${apiKey}&units=${newUnit}`;

        axios.get(apiUrl).then((response) => {
          setWeather({
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
            date: new Date(response.data.dt * 1000),
          });
        });
      }
    }
  };

  return (
    <div className="weather">
      <form onSubmit={handleSearch}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              value={city}
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      {weather && (
        <>
          <h1>{weather.city}</h1>
          <ul>
            <li>{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img src={weather.icon} alt={weather.description} />
              <strong>
                {Math.round(weather.temperature)}°{" "}
                <span
                  className={unit === "metric" ? "active" : "clickable"}
                  onClick={() => handleUnitChange("metric")}
                >
                  C
                </span>{" "}
                |{" "}
                <span
                  className={unit === "imperial" ? "active" : "clickable"}
                  onClick={() => handleUnitChange("imperial")}
                >
                  F
                </span>
              </strong>
              <WeatherForecast />
            </div>
            <div className="col-6">
              <ul>
                <DateDisplay date={weather.date} />
                <li>Humidity: {weather.humidity}%</li>
                <li>
                  Wind: {weather.wind} {unit === "metric" ? "m/s" : "mph"}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
