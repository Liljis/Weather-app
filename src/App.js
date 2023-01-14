import "./App.css";
import { useState } from "react";

const api = {
  key: "3ebea1f580e8cf47350e9b400e4c341e",
  base: `https://api.openweathermap.org/data/2.5/`
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("30");
  const [palce, setPlace] = useState("Kochi,IN");

  function getDate(e) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let date = e.getDate();
    let day = days[e.getDay()];
    let month = months[e.getMonth()];
    let year = e.getFullYear();
    return ` ${day} ${date} ${month} ${year}`;
  }
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data.main.temp_max);
          setPlace(`${data.name},${data.sys.country}`);
        });
    }
  };

  return (
    <div className="App">
      <div className="Input-box">
        <input
          value={query}
          placeholder="Search your city"
          id="input-bar"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
        />
      </div>
      <div className="result">
        <div className="city">{palce}</div>
        <div className="date">{getDate(new Date())}</div>
        <div className="weather">{`${weather}  ℃`}</div>
      </div>
    </div>
  );
}

export default App;
