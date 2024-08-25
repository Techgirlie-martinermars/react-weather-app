import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <img
            src="https://openweathermap.org/img/wn/01d.png"
            alt="Weather icon"
            className="WeatherForecast-icon"
          />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">18°</span>
            <span className="WeatherForecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
