import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Forecast from "./Components/Forecast/Forecast";
import Time from "./Components/Time/Time";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// key=3bee00214388b808bcbad581f67b5a37
function App() {
  const [cityname, setCityname] = useState("Минск");
  const [city, setCity] = useState("");
  const [ok, setOk] = useState("");
  const [forecast, setForecast] = useState([]);
  const [value, setValue] = useState("");
  // const [vis, setVis] = useState("");
  
  const handleChange = (event) => {
    setCityname(event.target.value);
    setValue(event.target.value);
  };

  const handleOk = () => {
    if (cityname) {
      setOk(cityname);
      // setValue(cityname);
      // setVis(cityname);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&lang=ru&units=metric&appid=3bee00214388b808bcbad581f67b5a37`
    ).then((response) => {
      response.status !== 404
        ? response.json().then((data) => {
            setForecast(
              data.list.filter((item) => item.dt_txt.includes("18:00:00"))
            );
            setCity(data.city.name);
            setValue("");
            // setVis("");
            console.log(forecast);
          })
         
        :

        alert("введите корректное значение");
        setValue("");
        //  console.log('ok='+ok, 'cityname='+cityname, 'value='+value);
       
   
    });
  }, [ok]);





  const [state, setState] = useState("true");
  const handleState = () => {
    setState(!state);
  };


   return (
    <div className={state ? "app-wrapper" : "app-wrapper-dark"}>
      <div className="header-wrapper">
        <div>
          <img src="/icons/Header logo.svg" />
        </div>
        <Time />
        <div className="search-wrapper">
          <button className="drop-wrapper" onClick={handleState}>
            <img src="/icons/Vector (1).svg" />
          </button>
          <input
            value={value}
            onChange={handleChange}
            placeholder="Поиск города"
          />
          <button onClick={handleOk}>Get Weather</button>
        </div>
      </div>
      <><CurrentWeather forecast={forecast} state={state} ok={ok} city={city} cityname={cityname} value={value}/>
      <Forecast forecast={forecast} state={state} ok={ok} value={value}cityname={cityname} /></>
    </div>
  );
}

export default App;
