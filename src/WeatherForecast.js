import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
  }
  function getForecast() {
    let apiKey = "7f9683b5472584ac4ff49bee2b0bc129";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (forecast) {
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
  } else {
    getForecast();
    return "Loading...";
  }
}
