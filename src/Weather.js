import React from "react";
import "./Weather.css";

export default function () {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
        <h1>Tokyo</h1>
        <ul>
          <li>Monday 8:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt=""
            />
            <strong>10 °C</strong>
          </div>
          <div className="col-6">
            <ul>
              <li>Perception 40%</li>
              <li>Humidity 80%</li>
              <li>Wind 0km/hr</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
