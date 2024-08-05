import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Martiner Winceit and is {""}
          <a
            href="https://github.com/Techgirlie-martinermars/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
          {""} and hosted on
          <a
            href="https://incredible-chebakia-5404ce.netlify.app/"
            target="_blank"
          >
            {""}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
