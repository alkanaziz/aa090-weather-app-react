import { createContext, useContext, useState } from "react";
import axios from "axios";

const CityContext = createContext();
export const Context = () => useContext(CityContext);

export const CityProvider = ({ children }) => {

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5`
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=${apiKey}&units=metric&cnt=5`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", data);
    }
  };

  return (
    <CityContext.Provider value={{ city, setCity, weatherData, setWeatherData}}>{children}</CityContext.Provider>
  )
};
