import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>weather app</h1>
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
