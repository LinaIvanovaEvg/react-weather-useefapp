import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ forecast, state, ok, city,value }) {
  return (
    <>
      {ok&& (
        <div className="weather-wrapper">
          <div
            className={state ? "main-card-wrapper" : "main-card-wrapper-dark"}
          >
            <p className="main-temp-wrapper">
              {Math.round(forecast[0].main.temp) > 0
                ? `+${Math.round(forecast[0].main.temp)}°С`
                : `${Math.round(forecast[0].main.temp)}°С`}
              <img
                className="main-icon"
                src={`https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}.png`}
              />
            </p>
            <p className={state ? "today-wrapper" : "today-wrapper-dark"}>
              Сегодня
            </p>
            <p className="citycountry">Город: {city}</p>
          </div>
          <div
            className={state ? "more-info-wrapper" : "more-info-wrapper-dark"}
          >
            <div className="param-box">
              <div className="more-info-icon-box">
                <div className="more-info-icon-circle">
                  <img className="more-info-icon" src="/icons/temp.svg" />
                </div>
                <div className="more-info-icon-circle">
                  <img className="more-info-icon" src="/icons/pressure.svg" />
                </div>
                <div className="more-info-icon-circle">
                  <img
                    className="more-info-icon"
                    src="/icons/evaporator 1.svg"
                  />
                </div>
                <div className="more-info-icon-circle">
                  <img className="more-info-icon" src="/icons/wind.svg" />
                </div>
              </div>
              <div className="param-name">
                <p>Температура, °C</p>
                <p>Давление</p>
                <p>Осадки</p>
                <p>Ветер, м/c</p>
              </div>
              <div
                className={
                  state ? "param-significant" : "param-significant-dark"
                }
              >
                <p>
                  {Math.round(forecast[0].main.temp) > 0
                    ? `+${Math.round(forecast[0].main.temp)}`
                    : Math.round(forecast[0].main.temp)}{" "}
                  ощущается как{" "}
                  {Math.round(forecast[0].main.feels_like) > 0
                    ? `+${Math.round(forecast[0].main.feels_like)}`
                    : Math.round(forecast[0].feels_like)}
                </p>
                <p>{forecast[0].main.pressure}</p>
                <p>{forecast[0].weather[0].description} </p>
                <p>{forecast[0].wind.speed}</p>
              </div>
            </div>
            <img className="more-info-cloud" src="/icons/more-info-cloud.svg" />
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeather;
