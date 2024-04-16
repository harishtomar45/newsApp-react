import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/weather/WeatherContext";
import { fetchWeather } from "../context/weather/WeatherAction";
import ThemeContext from "../context/theme/ThemeContext";

const WeatherCard = () => {
   const { darkMode } = useContext(ThemeContext);
  const {weather, dispatch} = useContext(WeatherContext);

  const getWeather = async (topic) => {
    const data = await fetchWeather(topic);

    dispatch({
      type: "GET_WEATHER",
      payload : data,
    })
  

  }

  useEffect(()=>{
   getWeather("Bhopal");
  },[])
   
  
  return (
    <>
      <div className="col-md-4 col-sm-12">
        <div className="card p-5">
          <h4>Today's Weather</h4>
          <span className="d-flex aling-items-center justify-content-between" >
            <span>
              <h1>{weather?.current?.temp_c} ° c</h1>
              <h2>{weather?.location?.name}</h2>
            </span>
            <span>
                <img src="http//cdn.weatherapi.com/weather/64x64/day/143.png" alt="" />
                <p>{weather?.current?.condition?.text}</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
