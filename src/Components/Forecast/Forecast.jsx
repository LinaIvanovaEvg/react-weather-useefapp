import React from "react";
import "./Forecast.css";
import Cards from "../Cards/Cards";

function Forecast({ forecast, state, ok, cityname, value }) {
  return (
    <>
      {ok && (
        <div className="forecast-wrapper">
          <div
            className={state ? "forecast-card-cont" : "forecast-card-cont-dark"}
          >
            {forecast.map((item) => {
              const weekdayName = new Date(item.dt * 1000).toLocaleString(
                "ru",
                { weekday: "short" }
              );
              const day = new Date(item.dt * 1000).toLocaleString("ru", {
                day: "numeric",
              });
              const monthNum = new Date(item.dt * 1000).toLocaleString("ru", {
                month: "numeric",
              });
              const monthLong = new Date(item.dt * 1000).toLocaleString("ru", {
                month: "long",
              });
              const monthName = monthLong.slice(0, -1) + `я`;
              if (monthNum === 2 || monthNum === 3) {
                monthName = monthLong.slice(0, -1) + `а`;
              }

              return (
                <Cards
                  weekday={
                    weekdayName.substring(0, 1).toUpperCase() +
                    weekdayName.substring(1)
                  }
                  temp={
                    Math.round(item.main.temp) > 0
                      ? `+${Math.round(item.main.temp)}°C`
                      : Math.round(item.main.temp)
                  }
                  date={`${day} ${monthName}`}
                  img={
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    />
                  }
                  // tempmin={item.main.temp_min}
                  // tempmax={item.main.temp_max}
                  description={item.weather[0].description}
                  state={state}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Forecast;
