import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Details from "./Components/Details/Details.js";
import Daily from "./Components/Daily/Daily.js";
import "./index.css";
import City from "./Components/city/city.json";

const App = () => {
  const [weather, setweather] = useState([]);
  const [res, setres] = useState([]);

  const callWeatherApi = () => {
    let API_Key = "e106d013821f4afc8e6180822220202";
    let city = weather[0].name;
    let baseurl = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=yes`;

    fetch(baseurl)
    .then(r => r.json())
    .then(d => setres(d))

    };

  const citys = (val) => {
    var arr = City.filter((data) => {
      return data.name.toLowerCase().includes(val.toLowerCase());
    });
    setweather(arr.splice(0,15));
  };

  return (
    <div className="main">
      <Navbar callApi={callWeatherApi} weather={weather} city={citys} />
      <Details citydata={res} />
      <Daily />
    </div>
  );
};

export default App;
