import { useEffect, useState } from "react";
import c from "./style.module.css";
export default function WeatherApp() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorData, setErrorData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const getData = await response.json();
      if (getData) {
        setData(getData);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorData(e);
      console.log("Hello");
    }
  }
  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);
  function getDate(){
    return new Date().toLocaleDateString("en-us", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
  }
  if (loading) return <h1>Loading</h1>;
  if (errorData) return <h1>Error Guys</h1>;
  return (
    <div className={c.wrap}>
      <div>
        <input
          type="text"
          placeholder="Enter your city name"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          onClick={() => {
            fetchWeatherData(inputData);
          }}
        >
          Search
        </button>
      </div>
      {data && (
        <div className={c.container}>
          <h1>
            {data.name} <span>{data.sys.country}</span>
          </h1>
          <h1>{getDate()}</h1>
          <h1>{data.main.feels_like}</h1>
          <h1>{data.weather[0].description}</h1>
          <h1>Humidity: {data.main.humidity}</h1>
          <p>Wind Speed: {data.wind.speed}</p>
        </div>
      )}
    </div>
  );
}
